// utils/slugify.js
export function slugMaker(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\u0980-\u09FF ]+/g, "")
    .replace(/\s+/g, "-");
}
