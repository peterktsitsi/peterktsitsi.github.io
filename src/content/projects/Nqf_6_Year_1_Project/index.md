---
title: "YEAR 1: Local Information Systems"
summary: "Local Area Networks and Offline Databases"
date: "Oct 01 2026"
draft: false
tags:
- C# Windows Form Application
- Javascript DOM
- Python CLI
- CSV
- Sqlite

---

## Project Brief

1 km West of SunCity in the North West provice, sits a village called Raa. The locals have recently accired a small community library and they need your help, with creating a local information management system for registering people who go in and out of the library aand also keep trace of the books and who has what. Also create a website for the library with all the relevent information to keep the locals upto date with activities.

*here is a map of the place and it's resources.*
![local area network image](/library_project_brief.png)

outcomes:

- All 6 of the computers must have internet access
- Gate_Computers must use a CLI program for register visitors
- Library_Computer must have access to book database and visitors database
- Library_computer can manage other PCs on network
- Library_Terminals must be accessed by registered visitors ony
- Build a Webiste fore this library
  
---

## Project solution

**In one line:** a small, secure network and two purpose-built apps that record who is in the library, track every book, and keep working even when the network does not.

The system has three parts that depend on each other:

```

 Gate PC 1 ─┐                                     ┌─ Members
            ├─ CSV logs ◄─ pulled by ─ Librarian PC ┼─ Books & loans
 Gate PC 2 ─┘   (one per gate)         (WinForms)  └─ Gate events (SQLite)
```

**Design principles I worked to**

- **Keep working offline.** A gate must keep recording people if the network drops.
- **One writer per file.** Nothing is shared between two machines that could corrupt it.
- **Least privilege.** The public-facing PCs can reach as little as possible.
- **Simple over clever.** A small library needs reliable, explainable tools, not a complicated stack.

---

### 0. The Website

here is a [link to the website demo.](/Raa%20Community%20Library_%20Responsive%20Homepage.html) _Right clcik to open in new tab._

### 1. Gate tracker (Python CLI)

[_Code Found Here_](https://github.com/peterktsitsi/IT-Project-Year-1-local-information-systems)

Runs on the gate PCs and logs every entry and exit to a local CSV file.

| Decision | Why |
|---|---|
| One CSV per gate (`gate1_log.csv`, `gate2_log.csv`) | Two PCs writing one file can corrupt it, and a network fault would stop the gate |
| Direction is set per gate (`in`, `out`, or ask each time) | A member can enter at one gate and leave at another, so guessing IN/OUT from one file would be wrong |
| Each row is flushed to disk immediately | A power cut loses at most the scan in progress |
| IDs validated and uppercased | Junk and typos never reach the log |
| Double scans within 5 seconds ignored | Keeps the log clean without losing real events |

```
python gate_tracker.py --gate-id GATE1 --direction in
python gate_tracker.py --gate-id GATE2 --direction out
```

Log format: `timestamp, member_id, direction, gate_id`. The code is commented line by line and linked to a written explainer.

---

### 2. Librarian app (Windows Forms + SQLite)

[_Code Found Here_](https://github.com/peterktsitsi/IT-Project-Year-1-local-information-systems)

Runs on the main librarian PC. It pulls the gate logs, works out who is on the premises, and manages members, books and loans.

**What it does**

- **Syncs the gate logs** automatically every few minutes or on demand, importing only new rows so nothing is counted twice.
- **Shows who is on the premises** by taking each member's latest event across all gates.
- **Enforces the access rule:** a book is only issued to an active member who is currently inside, and within a loan limit.
- **Manages members, books and loans,** including due dates, returns and copy counts.

**How it is built:** four layers, so each part is easy to test and explain.

| Layer | Responsibility |
|---|---|
| Models | Plain data: members, books, loans, gate events |
| Data | The only code that talks to SQLite |
| Services | The library's rules: import, presence, loans |
| Forms | Screens only, no SQL |

The database stays on the librarian PC. SQLite is a file database and is unreliable when several computers open it over a network, so only one machine ever touches it.

---

### 3. Network design

A VLAN-segmented network so that the public, the gates and the librarian's data are kept apart.

| VLAN | Purpose | Subnet |
|---|---|---|
| 10 Gate | Gate PCs | 192.168.10.112/28 |
| 20 Librarian | Librarian PC and database | 192.168.10.96/28 |
| 30 Public | Reading-room PCs | 192.168.10.64/27 |
| 40 Guest | Visitors' phones and laptops | 192.168.10.0/26 |
| 99 Management | Switch, router, access point | 192.168.10.128/28 |

- **Right-sized subnets (VLSM)** from a single /24, with room left to grow.
- **Router-on-a-stick:** one router, one trunk cable to a managed switch, which keeps the cost low.
- **Access rules (ACLs) on the router:** the librarian PC may pull logs from the gates, but gates cannot start connections to it. Public and guest users get internet only and cannot reach internal VLANs.
- **Hardening:** unused ports shut down, port security on the gate and librarian ports, trunk limited to the five VLANs, native VLAN moved off VLAN 1.

**How the data flows:** a gate PC writes locally, and the librarian PC reaches in over a read-only share to collect the file. The most valuable machine always starts the connection, never the exposed one.

---

### What this demonstrates

| Skill | Evidence |
|---|---|
| Networking | VLANs, VLSM subnetting, inter-VLAN routing, ACLs, hardening |
| Software development | Python CLI, C# Windows Forms app, SQL schema and layered code |
| Systems thinking | Designing around failure: offline gates, safe writes, no duplicate imports |
| Security | Segmentation, least privilege, pull-not-push data flow |
| Communication | Explainer document, commented code, this write-up |

### Status and next steps

- **Done:** network design, gate tracker app with explainer.
- **In progress:** librarian app build and testing.
- **Next:** the library website, for opening hours, events and news for the locals of Raa.

<!-- Add screenshots here: gate CLI session, librarian app tabs, network diagram -->

---

## Glossary

- **802.1Q (dot1Q):** The standard that adds a VLAN number (a "tag") to network traffic so one cable can carry several VLANs.
- **Access point (AP):** The device that provides Wi-Fi. Here it connects wireless guests to their own VLAN.
- **Access port:** A switch port that belongs to a single VLAN. Ordinary devices like PCs plug into these.
- **ACL (access control list):** A list of allow and deny rules on a router that decides which traffic may pass between networks.
- **Broadcast domain:** The group of devices that receive each other's broadcast messages. Each VLAN is its own broadcast domain.
- **CIDR notation (/24, /26, /28):** A short way to write a subnet's size. The number after the slash is how many bits are the network part, so a bigger number means a smaller subnet.
- **CLI (command-line interface):** A program you use by typing text commands rather than clicking.
- **CSV (comma-separated values):** A plain text file where each line is a row and commas separate the columns.
- **DHCP reservation:** A setting that always gives the same IP address to a particular device.
- **`established` (ACL keyword):** Matches only replies to a connection that was already started, so a device can answer but not start new connections.
- **fsync:** An instruction that forces data from memory onto the disk, so it survives a power cut.
- **Gateway:** The router address that devices use to reach other networks.
- **Guest VLAN:** A separate network for visitors' devices, kept apart from the library's own computers.
- **ISO 8601:** An international date and time format (for example `2026-11-18T13:17:12`) that sorts correctly as text.
- **Layered architecture:** Splitting a program into parts, such as data, rules and screens, so each has one job.
- **Least privilege:** Giving each device or user only the access it actually needs.
- **Management VLAN:** A network used only to administer the switch, router and access point.
- **Native VLAN:** The VLAN whose traffic crosses a trunk without a tag. Moving it off the default VLAN 1 reduces attack risk.
- **.NET / NuGet:** .NET is Microsoft's development platform. NuGet is its package manager, which downloads libraries such as the SQLite driver.
- **Port security:** A switch feature that limits which or how many devices can use a port.
- **Pull vs push:** In a pull, the receiver starts the connection and collects the data. In a push, the sender starts it. Pull keeps the sensitive machine in control.
- **Router-on-a-stick:** A setup where one router connects to a switch through a single trunk cable and routes between all the VLANs.
- **SMB:** The Windows protocol for sharing files and folders over a network.
- **SQLite:** A database stored in a single file, with no separate server to run.
- **SSID:** The name of a Wi-Fi network.
- **Static IP:** An IP address set by hand rather than handed out automatically.
- **Sub-interface:** A virtual interface on a router, one per VLAN, that lets a single physical port act as the gateway for several VLANs.
- **Subnet:** A smaller network carved out of a larger address range.
- **Trunk port:** A switch port that carries traffic for many VLANs at once, such as the link to the router.
- **UNC path:** A Windows network path in the form `\\computer\share\file`.
- **VLAN (virtual LAN):** A way to split one physical network into separate logical networks, so groups of devices are isolated from each other.
- **VLSM (variable-length subnet masking):** Giving each subnet the size it needs rather than one size for all, so addresses are not wasted.
- **Windows Forms:** Microsoft's toolkit for building desktop applications with windows, buttons and grids.
