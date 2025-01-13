export type CollectionName = "blog" | "projects" | "talks";

type Site = {
  title: string;
};

export type GlobalSite = Site & {
  description: string;
  author: string;
  authorPhotoSrc: string;
  logo?: {
    darkThemeSrc?: string;
    lightThemeSrc?: string;
  };
};

export const GLOBAL: GlobalSite = {
  title: "Astro Milidev",
  description: "a minimalistic blog+portfolio Astro theme",
  author: "John Doe",
  authorPhotoSrc: "/johndoe.png",
  logo: {
    darkThemeSrc: "/logo/logo_dark.png",
    lightThemeSrc: "/logo/logo_light.png",
  }
};


type CollectionSite = Site & {
  pageSize: number;
};

type HomeSite = Site & {
  blogEntries?: number;
  projectEntries?: number;
  talkEntries?: number;
}

export const HOME: HomeSite = {
  title: "Home title",
  blogEntries: 5,
  projectEntries: 3,
  talkEntries: 3,
};

type BlogSite = CollectionSite & {
  license: {
    name: string;
    href: string;
  }
};

export const BLOG: BlogSite = {
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

type ContactInfo = {
  type: string;
  href: string;
  account?: string;
}

type ContactSite = ContactInfo[]

export const CONTACT: ContactSite = [
  {
    type: "Email",
    href: "mailto:email@example.com",
    account: "email@example.com",
  },
  {
    type: "X",
    href: "https://x.com/BillGates",
    account: "@BillGates",
  },
  {
    type: "GitHub",
    href: "https://github.com/dotnet",
    account: "dotnet",
  },
  {
    type: "LinkedIn",
    href: "https://www.linkedin.com/in/williamhgates/",
  },
];
