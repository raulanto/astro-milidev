import * as url from "node:url";

export type CollectionName = "blog" | "projects" | "talks";


export type GlobalSite = {
  title: string;
  description: string;
  author: string;
  authorPhotoSrc: url;
  logo?: {
    darkThemeSrc?: string;
    lightThemeSrc?: string;
  };
};

export const GLOBAL: GlobalSite = {
  title: "raulantoDev",
  description: "Soy un apasionado por la programación y actualmente me desempeño como desarrollador Full Stack",
  author: "Raul antonio",
  authorPhotoSrc: "https://avatars.githubusercontent.com/u/74162376?v=4",
  logo: {
    darkThemeSrc: "/logo/logo_dark.png",
    lightThemeSrc: "/logo/logo_light.png",
  }
};


type CollectionSite =  {
  pageSize: number;
};

type HomeSite =  {
  blogEntries?: number;
  projectEntries?: number;
  talkEntries?: number;
}

export const HOME: HomeSite = {
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
  pageSize: 10,
  license: {
    name: "CC BY-NC-ND 4.0",
    href: "https://creativecommons.org/licenses/by-nc-nd/4.0",
  },
};

export const PROJECTS: CollectionSite = {
  pageSize: 10,
};

export const TALKS: CollectionSite = {
  pageSize: 10,
};

export const TAGS: CollectionSite = {
  pageSize: 10,
};

type ContactInfo = {
  type: string;
  href: string;
  displayAs?: string;
}

type ContactSite = ContactInfo[]

export const CONTACT: ContactSite = [
  {
    type: "Email",
    href: "mailto:email@example.com",
    displayAs: "email@example.com",
  },
  {
    type: "X",
    href: "https://x.com/raul012333",
    displayAs: "@raulantodev en X",
  },
  {
    type: "GitHub",
    href: "https://github.com/raulanto",
  },
  {
    type: "LinkedIn",
    href: "https://www.linkedin.com/in/williamhgates/",
  },
];
