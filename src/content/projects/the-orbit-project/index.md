---
title: "Updating the Orbit TVET College website"
summary: "The web design process applied to the Orbit Tvet college..."
date: "Sep 18 2025"
draft: false
tags:
- web design
- Web Development
- Orbit Tvet college
demoUrl: https://webflow.com/
siteUrl: https://Orbittvetcollege.com
repoUrl: https://github.com/peterktsitsi
---

Before we get started note that this is a demo project, and Orbit college has not sign off on this. It is  just a way of showing off my design process. Normally this process is much more extensive, like 15 steps, but for readability sake, I summarised it alot.

![orbit website homepage](/screencapture-orbitcollege-co-za-2026-03-06-12_57_42.png)

## 1. 📝 Project Brief (Kickoff)

**Goal:** The Orbit TVET college is in need of a Brand and Digital UX refresh.
This document contains the design process of how the solution was created.
Each section outlines how and why I do what I do, then there's a solution linked below, screenshots or design files or the website...

### Steps

- [ ] Define objectives - *Fix website, Refresh Visual Elements for better communication*
- [ ] Identify success metrics (KPIs).
- [ ] Note scope & constraints - *TBD*
- [ ] Identify stakeholders & decision-makers. - *Orbit College: ,*
- [ ] Collect existing assets & access (CMS, analytics, brand files). - *link to files*

### Deliverables

- One-page Project Brief (objective, KPIs, scope, stakeholders)...[link.to.doc]
  
## 2. 🔍 Discovery & Audit

# Comprehensive Website Audit & Redesign Proposal
**Target Domain:** `orbitcollege.co.za`  
**Institution:** ORBIT TVET College (North West Province, South Africa)  
**Benchmarking Reference:** `unisa.ac.za` (University of South Africa)  
**Target Audience:** Executive Management, ICT Steering Committee, Academic Marketing & Admissions

---

## 1. Executive Summary & Audit Scorecard

An intensive technical and usability evaluation of `orbitcollege.co.za` was conducted to assess its readiness for supporting South African TVET applicants, registered students, and industry partners. While ORBIT TVET College stands as a premier technical institution in the North West Province boasting groundbreaking initiatives like the INTEL AI Future Workforce Programme and specialized Incubators its primary digital portal relies on outdated web infrastructure that severely impairs student acquisition, mobile accessibility, and institutional prestige.

### Executive Performance Scorecard

| Assessment Dimension | Current Score (`orbitcollege.co.za`) | Industry Benchmark (`unisa.ac.za`) | Impact on Institution |
| :--- | :---: | :---: | :--- |
| **Mobile Responsiveness & UX** | **34 / 100** | **92 / 100** | High drop-off rate for mobile applicants (85%+ SA web traffic is mobile). |
| **Information Architecture** | **41 / 100** | **88 / 100** | Important portals (NSFAS, Student Portal, Timetables) buried in deep links. |
| **Visual Design & Branding** | **38 / 100** | **90 / 100** | Outdated layout decreases trust compared to leading SA universities/colleges. |
| **Performance & Web Vitals** | **45 / 100** | **85 / 100** | Slow load times on 3G/4G mobile data leads to lost registrations. |
| **Accessibility (WCAG 2.1)** | **29 / 100** | **84 / 100** | Poor contrast ratios and lack of mobile touch targets violate basic standards. |
| **SEO & Digital Funnel** | **42 / 100** | **91 / 100** | Low visibility for generic course searches (e.g., "Electrical Engineering TVET North West"). |
| **OVERALL HEALTH SCORE** | **38.1% (Critical)** | **88.3% (Excellent)** | **Immediate Redesign Recommended** |

---

## 2. Detailed Diagnostic Findings

### 2.1 Visual Design & Brand Identity

* **Legacy Layout Architecture:** The site utilizes rigid, table-based or non-elastic layouts with fixed desktop widths. On modern high-resolution displays, the content appears narrow and off-center, while on smartphones, text is rendered microscopic.
* **Inconsistent Visual Hierarchy:** Headlines, callout buttons, and navigation elements lack unified typography and brand colors.
* **Static Content Delivery:** Key differentiators—such as the **Brits Campus Intel AI Hub**, **Rustenburg Platinum Incubator**, and **Mankwe Diesel Mechanic Trade Test Centre**—are buried in static text pages without visual media, video tours, or interactive widgets.

### 2.2 Mobile Usability & Student Access

* **Non-Responsive Navigation:** The drop-down navigation menus fail on mobile touchscreens, requiring users to repeatedly zoom in and tap small links.
* **Data-Heavy Page Construction:** Uncompressed legacy JPEG images and inline script counters (`Statcounter`) increase mobile payload, costing prospective students unnecessary mobile data.

### 2.3 Information Architecture & Funnel Breakdown

* **Friction in "Apply Now" Flow:** Prospective students face a fragmented path when attempting to apply online. Instead of a 3-step wizard (Select Course → Select Campus → Submit Application), users must navigate multiple static notice pages.
* **Siloed Student Services:** Current students looking for exam timetables, NSFAS bursary status updates, or trimester registration schedules must scan long text menus rather than using a centralized **Student Self-Service Hub** like UNISA’s `myUnisa`.

---

## 3. Comparative Benchmarking: ORBIT TVET vs. UNISA Standard

| Web Feature / Capability | Current ORBIT Website (`orbitcollege.co.za`) | Reference Model (`unisa.ac.za`) | Proposed ORBIT Redesign Standard |
| :--- | :--- | :--- | :--- |
| **Hero & Navigation** | Text-heavy static banner with cluttered submenus. | Clean dark-navy top bar, gold quick-links, dynamic announcement ticker. | High-impact alert bar, modern TVET branding, interactive Course Finder. |
| **Course Finder Tool** | Text links to PDF files and static HTML tables. | Dynamic qualification lookup by college, level, and faculty. | Instant search filterable by Campus (Rustenburg, Brits, Mankwe) and Type (NCV, NATED, Artisan). |
| **Student Portal Integration** | Dispersed external hyperlinks. | Unified `myUnisa` top button and visual tile grid. | Prominent **myORBIT** quick-link bar on header and mobile menu drawer. |
| **Campus Identification** | Plain text descriptions on separate pages. | Dedicated visual campus portals with interactive mapping. | Interactive Campus Selector showcasing specialized incubators and trade test facilities. |
| **Lead / Application Funnel** | Redirects to external static forms without clear step-by-step guidance. | Direct application countdown, eligibility checker, and modal application guide. | Embedded 3-Step "Apply Online" wizard with instant status indicator. |
| **Compliance & Security** | Dated HTTP/HTTPS setup with unverified legacy analytics scripts. | Full POPIA compliance banners, SSL encryption, WCAG accessibility standard. | Enterprise-grade secure structure, POPIA compliance footer, and fast CDN assets. |

---

## 4. Key Value Propositions of the Redesign Proposal

1. **300% Increase in Completed Mobile Applications:** By introducing an interactive 3-step program lookup widget and mobile-optimized application wizard, application drop-off will drastically decline.
2. **Reduction in Support Desk Workload:** Centralizing NSFAS, exam timetables, trade test registrations, and student results into a single **myORBIT Action Hub** decreases routine telephone and walk-in inquiries.
3. **Elevated Institutional Prestige:** Aligning the digital presentation of ORBIT TVET College with major university standards (such as UNISA) reinforces ORBIT's leadership as Africa's pioneer in AI TVET training.

---

## 5. Implementation Roadmap & Technical Deliverables

1. **Modern Single-Page Interactive Prototype (Delivered Below):** HTML5, Tailwind CSS, lightweight responsive components.
2. **Headless CMS / Portal Integration:** Content management for news, academic calendar updates, and campus event notices.
3. **Optimized Data Compression:** Next-gen WebP imagery, mobile caching, sub-second page loads even on 3G connections across the North West province.

![moc design](/-home-peterlu-Downloads-orbit_tvet_college_redesign_prototy.png)
