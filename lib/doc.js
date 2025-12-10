import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export const getDocument = (lastPath) => {
  const postDirectory = path.join(process.cwd(), "docs", lastPath ?? "");

  if (!fs.existsSync(postDirectory)) {
    return notFound();
  }

  const fileNames = fs.readdirSync(postDirectory);

  const mdFiles = fileNames.filter((file) => file.endsWith(".md"));

  if (mdFiles.length === 0) {
    return notFound();
  }

  const allDocuments = mdFiles.map((filename) => {
    const id = filename.replace(".md", "");
    const fullPath = path.join(postDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(fileContents);

    return {
      id,
      ...data,
    };
  });

  const sortedDocs = allDocuments.sort(
    (a, b) => (a.order ?? 999) - (b.order ?? 999)
  );

  return sortedDocs;
};

export const getContent = (id, lastPath) => {
  const postDirectory = path.join(process.cwd(), "docs", lastPath ?? "");

  if (!fs.existsSync(postDirectory)) {
    return notFound();
  }

  const fullPath = path.join(postDirectory, `${id}.md`);

  console.log(fullPath);
};
