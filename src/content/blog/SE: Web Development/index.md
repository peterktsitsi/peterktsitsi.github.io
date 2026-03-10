---
title: "Software Engineering: Web Development and Information Design Course"
summary: "Understanding how data is colleceted structured and processed for Web based systems."
date: "Feb 15 2026"
draft: false
tags:
- Web Development
- Information Design
- Education
---
*this course is meant to introduce you to the concepts of information design, and how these principle, when carried over to Web Based Systems Development can help you build better information systems, with an understanding of how your users are going to interact with these systems and presentaions, It's a sub course within general software engineering*

## Welcome! and Lets Begin

### Module 1: Introduction to Information Design and Web Development

---

### Part 1: Information Design: What is Information Design?

**Information design** is the practice of **organizing data into structures that people can understand and use**.

It sits between several disciplines:

- Design, Data, Communication, Psychology and Software development

Information designers take **raw data** and turn it into **clear, structured information**.

Example transformation:

| Raw Data | Information |
|---|---|
| Spreadsheet numbers | Graphs and dashboards |
| Research notes | Structured reports |
| Database tables | Searchable interfaces |
| Documents | Structured websites |

The goal is simple:

> Make information easier to understand, navigate, and use.

---

## Why Information Design Matters in Software Engineering

Software engineers do not just write code.

They build **systems that move information** and understanding how user interact with these systems can help you make them better, from a Road sign to a Dashboard.

Examples of software systems that rely heavily on information design:

- **dashboards, admin panels, search systems, websites, APIs, documentation systems and data visualization tools.**

Without **good** information design:

- **software becomes confusing, users get lost and data becomes unusable.**

Good software engineers think about:

- **how information is structured**
- **how users navigate information**
- **how data becomes meaningful**
- **limits of the tech being used**

Information design improves:

- **usability, clarity, decision making and communication between systems and humans.**

---

## A Short History of Information Design

### Oral Knowledge

Early human societies stored information through **memory and storytelling**.
Limitations: knowledge could be lost, difficult to scale and hard to preserve

### Written Knowledge

Writing introduced **external memory systems**.

Examples:

- **clay tablets, papyrus scrolls and manuscripts.**

Benefits:

- **long-term records, early legal systems and libraries.**

### The Print Era

Printing enabled **mass distribution of knowledge**, but still we had to phisycally move it.

Key developments:

- **books, newspapers, scientific publishing and education systems.**

Information design innovations emerged:

- **page layout, typography, indexing and tables of contents.**

### Industrial Information Systems

Governments and corporations began building **large information systems**.

Examples:

- **census records, accounting systems, engineering diagram and administrative forms.**

Information design became **systematic and standardized**.

### The Digital Era

Computers introduced:

- **digital documents, databases, spreadsheets and digital archives.**

Information became:

- **searchable, easily duplicated and instantly distributed.**

But there was still one problem:

> Computers could not easily share documents globally.

That problem led to the creation of the **web**.

---

## Project 1A: Introduction to Information Design

### Objective

For this project you'll be practicing the most basic skill in information design... **Compiling** and **summarising information**.
You will be writing 2 essays.<br>

- Topic 1: how the web works.
- Topic 2: From Data to information to action.

## Project 1B: Introduction to Web Development

### Objective

Build a simple site, that will hold all the informaton you gathered in project 1A,
 and use it as a way to practice structuring information on the web, 
 and how to use basic web technologies to do so.

The rest of the instructions are on github, just go to:
 ([Module 1](hhttps://github.com/peterktsitsi/web-development-and-information-design/blob/main/README.md#module-1-introduction-to-information-design-and-web-development))

---

## Module 2: Introduction to Design Systems: CSS

---

### Part 1: Information Design: Restructuring Information Using Design Systems

As information systems grow larger, the amount of data and content they contain increases rapidly. Without structure, this information becomes difficult to navigate, understand, and maintain.

**Design systems** help solve this problem.

A design system is a collection of rules, patterns, and reusable components used to organize information and visual elements consistently across a system.

Instead of designing each page or interface from scratch, designers and developers use a **shared set of structures and components**.

This is also true outside of sofware developemnt, weather creating a textbook or designing **catagorization systems** for storing 1000s of books.

Examples include:

- layout grids
- typography rules
- color systems
- reusable UI components
- navigation patterns

These systems ensure that information is **presented consistently and predictably** across an application and other mediums of information consumption.

---

### Why Design Systems Matter

In small projects, information structures can be simple. But as systems grow, the people involved change and complexity increases it becomes hard to maintain **consistancy** and **functionality** for the end user.

Examples of large information systems include:

- documentation websites
- dashboards and analytics tools
- government information systems
- enterprise software
- large web platforms

Without a system for organizing visual and structural elements:

- interfaces become inconsistent
- users struggle to navigate
- development becomes slower
- teams repeat the same work
- real money can be lost. *'is it the green button'* moments

Design systems allow teams to **scale both design and development**.

---

### Structuring Information Visually

One of the core goals of information design is **turning complex information into structures people can quickly understand**.

This is done using visual tools such as:

- hierarchy
- grouping
- spacing
- color
- typography
- layout grids

These elements help guide the user’s attention and communicate relationships between pieces of information.

Example structure:

- Title
- Section
- Subsection
- Details


A well-designed interface visually communicates this structure so users can quickly scan and understand it.

---

### Summarizing and Compressing Information

Another important concept in information design is **information compression**.

Large bodies of information can be summarized using structured representations such as:

- tables
- diagrams
- charts
- lists
- navigation trees

For example, a 50-page report might be summarized as:

- a dashboard
- a set of charts
- a structured outline

This allows users to **understand complex information faster**.

The same principle applies when learning technical topics.

Instead of reading hundreds of pages about programming, a learner might first study a **summary diagram of how a system works**, then explore each component in more detail.

---

### Part 2: Design Systems for Web Based Systems

#### Introduction

In software engineering whether for the **Web** or **Mobile**, design systems help developers organize, not just the **information** but the interface **properties**, **decicions** and **elements** that make up the final application.

On a deeper level the informatoin being presented and how users interact with it, will be the thing that drives how you create these systems. You can't design a School Website the same way you make a Private messaging services

For the web, which relies on the **htlm document** and the **box model**, being styled by **CSS** .
Think of it like this:

- the html document is an information delivery device, with rules on how you can interact with it.
- the box model, separates everything(**elements**) on this document into boxes with **properties** that can be issolated and controlled.
- to expand the visual presentation options a way to control these **properties** was made... **CSS**
- **CSS** tells your browser what you want your html to look like.

---

### CSS as a Tool for Information Structure

CSS (Cascading Style Sheets) is the technology used to control the **layout and visual presentation of web documents**.

While HTML defines the **structure of information**, CSS defines how that information is **organized visually on the screen**.

CSS allows developers to:

- control layout
- define typography
- create visual hierarchy
- manage spacing
- build responsive interfaces

Modern CSS systems often rely on:

- layout grids
- spacing scales
- typography systems
- component styles

Frameworks such as Tailwind CSS help developers apply these patterns consistently.

---

## Project 2A: Your fisrt Design System

### Objective

Identify a Website you like, and deconstruct the design system of the website.<br>
Create a variation of that **Design System** that is to be applied on your site from **Project 1B**.<br>

---

## Project 2B: Building Layouts with CSS

### Objective

Edit your Website according to the **Design Document** from **Project 2A**.<br>
***good luck***

The rest of the instructions are on github, just go to:
 ([Module 2](https://github.com/peterktsitsi/web-development-and-information-design/blob/main/README.md#module-2-introduction-to-design-systems-css))