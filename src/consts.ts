type Metadata = {
  title: string;
  description?: string;
};

type Site = {
  metadata: Metadata;
};

type CollectionSite = Site & {
  pageSize?: number;
};

export const HOME: Site & {
  maxBlogItems?: number;
  maxProjectItems?: number;
  maxTalkItems?: number;
} = {
  metadata: {
    title: "Astro Mili Dev",
    description: "Astro Micro is an accessible and lightweight blog.",
  },
  maxBlogItems: 5,
  maxProjectItems: 3,
  maxTalkItems: 3,
};

export const BLOG: CollectionSite = {
  metadata: {
    title: "Blog",
    description: "A collection of articles on topics I am passionate about.",
  },
  pageSize: 10,
};

export const PROJECTS: CollectionSite = {
  metadata: {
    title: "Projects",
    description:
      "A collection of my projects with links to repositories and live demos.",
  },
  pageSize: 10,
};

export const TALKS: CollectionSite = {
  metadata: {
    title: "Talks",
    description:
      "A collection of my projects with links to repositories and live demos.",
  },
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
