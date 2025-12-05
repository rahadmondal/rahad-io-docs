import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postDerictory = path.join(process.cwd(), "docs", "javascript");

export const getDocument = () => {
  const fileNames = fs.readdirSync(postDerictory);
  const allDocuments = fileNames.map((filename) => {
    const id = filename.replace(".md", "");
    const fullpath = path.join(postDerictory, filename);
    const fileContents = fs.readFileSync(fullpath, "utf-8");
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });

  return allDocuments;
};
