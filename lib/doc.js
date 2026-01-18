import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import { slugMaker } from "./slugMaker";

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

// export const getContent = async (id, lastPath) => {
//   const postDirectory = path.join(process.cwd(), "docs", lastPath ?? "");

//   if (!fs.existsSync(postDirectory)) {
//     return notFound();
//   }

//   const fullPath = path.join(postDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf-8");
//   const matterResult = matter(fileContents);

//   const processData = await remark().use(html).process(matterResult?.content);

//   const contentHtml = processData.toString();
//   return {
//     id,
//     contentHtml,
//     ...matterResult.data,
//   };
// };

export const getContent = async (id, lastPath) => {
  console.log(lastPath);
  const postDirectory = path.join(process.cwd(), "docs", lastPath ?? "");

  if (!fs.existsSync(postDirectory)) {
    return notFound();
  }

  const fullPath = path.join(postDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);

  const processData = await remark().use(html).process(matterResult.content);
  let contentHtml = processData.toString();

  const headings = [];

  // h2, h3 ধরছি (চাও তো h1 যোগ করো)
  contentHtml = contentHtml.replace(
    /<(h[2-3])>(.*?)<\/\1>/g,
    (match, tag, text) => {
      const cleanText = text.replace(/<[^>]+>/g, "");
      const id = slugMaker(cleanText);

      headings.push({
        id,
        text: cleanText,
        level: tag, // h2 / h3
      });

      return `<${tag} id="${id}">${text}</${tag}>`;
    }
  );

  return {
    id,
    contentHtml,
    headings,
    ...matterResult.data,
  };
};
