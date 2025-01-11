export type CollectionName = "blog" | "projects" | "talks";

type Site = {
  title: string;
};

type CollectionSite = Site & {
  title: string;
  pageSize: number;
};

type LicenseInfo = {
  name: string;
  href: string;
};

export const HOME: Site & {
  maxBlogItems?: number;
  maxProjectItems?: number;
  maxTalkItems?: number;
} = {
  title: "Astro Milidev",
  maxBlogItems: 5,
  maxProjectItems: 3,
  maxTalkItems: 3,
};

export const BLOG: CollectionSite & { license: LicenseInfo } = {
  title: "Blog",
  pageSize: 10,
  license: {
    name: "CC BY-NC-ND 4.0",
    href: "https://creativecommons.org/licenses/by-nc-nd/4.0",
  },
};

export const PROJECTS: CollectionSite = {
  title: "Projects",
  pageSize: 10,
};

export const TALKS: CollectionSite = {
  title: "Talks",
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
  authorPhotoSrc: string;
  email: string;
  logo?: {
    darkThemeSrc?: string;
    lightThemeSrc?: string;
  };
} = {
  title: "Astro Milidev",
  description: "a minimalistic blog+portfolio Astro theme",
  author: "Astro Milidev",
  authorPhotoSrc: "/johndoe.png",
  email:
    CONTACT.find((c) => c.name === "Email")?.href.substring("mailto:".length) ||
    "",
  logo: {
    darkThemeSrc: "/logo/logo_dark.png",
    lightThemeSrc: "/logo/logo_light.png",
  }
};
