// utils/slugify.ts
export const slugify = (text: string): string =>
    text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, '-');
