import { type CollectionEntry, getCollection } from "astro:content";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { CollectionName } from "@consts";
import { GLOBAL } from "@consts";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return date.toISOString().split("T")[0];
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export async function getFilteredCollectionEntries<T extends CollectionName>(
  collectionName: T,
  pagination?: {
    page: number;
    pageSize: number;
  },
): Promise<{
  entries: CollectionEntry<T>[];
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
    nextPage?: number;
    prevPage?: number;
  };
}> {
  const data = (await getCollection(collectionName))
    .filter((post) => !post.data.draft)
    .sort(
      (a, b) =>
        (b.data.lastUpdateDate ?? b.data.date).getTime() -
        (a.data.lastUpdateDate ?? a.data.date).getTime(),
    );

  const totalCount = data.length;

  if (pagination) {
    const { page, pageSize } = pagination;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedEntries = data.slice(start, end);
    const pageCount = Math.ceil(totalCount / pageSize);
    const nextPage = page < pageCount ? page + 1 : undefined;
    const prevPage = page > 1 ? page - 1 : undefined;

    return {
      entries: paginatedEntries,
      pagination: {
        page,
        pageSize,
        pageCount,
        totalCount,
        nextPage,
        prevPage,
      },
    };
  }

  return { entries: data };
}

export async function getNavigationEntries<T extends CollectionName>(
  collectionName: T,
  referenceSlug: string | undefined,
): Promise<{ nextPost?: CollectionEntry<T>; prevPost?: CollectionEntry<T> }> {
  if (!referenceSlug) {
    return {};
  }

  const { entries } = await getFilteredCollectionEntries(collectionName);
  const currentIndex = entries.findIndex(
    (entry) => entry.slug === referenceSlug,
  );

  return {
    nextPost: entries[currentIndex + 1],
    prevPost: entries[currentIndex - 1],
  };
}
