import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Peter's Portfolio",
  DESCRIPTION: "Welcome to my site, a portfolio and blog for anyone interested in programming and design",
  AUTHOR: "Peter",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "My Work Eperience.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "My thought on things...",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "What am I doing right now?",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "Kpetertsitsi@gmail.com",
    HREF: "mailto:kpetertsitsi@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "My Github",
    HREF: "https://github.com/peterktsi"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "markhorn-dev",
    HREF: "https://www.linkedin.com/in/peter-tsitsi-643123298/",
  },
  
]

