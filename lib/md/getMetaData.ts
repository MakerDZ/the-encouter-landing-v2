import fs from "fs";
import matter from "gray-matter";
import { MetaData } from "./type/metaData";

const getMetaData = (Folder: string): MetaData[] => {
  const folder = Folder;
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      author: matterResult.data.author,
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
      thumbnail: matterResult.data.thumbnail,
      slug: fileName.replace(".md", ""),
    };
  });
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
};

export default getMetaData;
