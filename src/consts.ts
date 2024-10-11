export type CollectionName = "blog" | "projects" | "talks";

type Site = {
  title: string;
};

type CollectionSite = Site & {
  title: CollectionName;
  pageSize?: number;
};

export const HOME: Site & {
  maxBlogItems?: number;
  maxProjectItems?: number;
  maxTalkItems?: number;
} = {
  title: "Astro Mili Dev",
  maxBlogItems: 5,
  maxProjectItems: 3,
  maxTalkItems: 3,
};

export const BLOG: CollectionSite = {
  title: "blog",
  pageSize: 10,
};

export const PROJECTS: CollectionSite = {
  title: "projects",
  pageSize: 10,
};

export const TALKS: CollectionSite = {
  title: "talks",
  pageSize: 10,
};

export const CONTACT: {
  name: string;
  href: string;
  displayName?: string;
}[] = [
  {
    name: "Email",
    href: "mailto:email@example.com",
    displayName: "email@example.com",
  },
  {
    name: "X",
    href: "https://x.com/BillGates",
    displayName: "@BillGates",
  },
  {
    name: "GitHub",
    href: "https://github.com/dotnet",
    displayName: "dotnet",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/williamhgates/",
  },
];

export const GLOBAL: Site & {
  description: string;
  author: string;
  email: string;
} = {
  title: "Astro Mili Dev",
  description: "An accessible and lightweight Astro theme for developers.",
  author: "Bartosz Lenar",
  email:
    CONTACT.find((c) => c.name === "Email")?.href.substring("mailto:".length) ||
    "",
};
