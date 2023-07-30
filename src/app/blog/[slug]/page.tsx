import Cursor from '@/components/general/Cursor'
import React from 'react'
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getMetaData from '../../../../lib/md/getMetaData';

const getPostContent = (slug: string) => {
  const folder = "blogs/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const slugs : Array<string> = [];
  const blogs = getMetaData("blogs/");
  const devlogs = getMetaData("devlogs/");
  blogs.map((blog) => {
    slugs.push(blog.slug);
  })
  devlogs.map((logs)=>{
    slugs.push(logs.slug);
  })
  return slugs.map((slug) => ({
    slug: slug,
  }));
};


const BlogPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <main className='w-full h-auto px-5 md:mt-20 sm:mt-16 xs:mt-14 xxs:mt-12 md:mb-20 sm:mb-16 xs:mb-14 xxs:mb-12'>
      <Cursor />
      <div className='max-w-[70rem] h-auto mx-auto'>
        <div className='lg:max-w-[70rem] h-auto md:max-w-[45rem] sm:max-w-[35rem] max-w-[25rem] mx-auto'>
            <h1 className='text-transparent animate-fade-down animate-duration-1000 animate-ease-out text-center md:text-3xl sm:text-2xl xxs:text-xl text-lg font-black bg-clip-text bg-gradient-to-r from-text_left via-text_middle to-text_right'>{post.data.title}</h1>
            <h2 className='text-[#5D5D5D] animate-fade-down animate-duration-1050 animate-ease-out font-extrabold md:text-xl sm:text-lg xxs:text-base text-sm text-center'>{post.data.date}</h2>

            <section className='animate-fade-up animate-delay-500 animate-ease-in lg:mx-64 md:mx-36 sm:mx-14 md:mt-20 sm:mt-16 xs:mt-14 xxs:mt-12'>
              <article className="prose">
                <Markdown>{post.content}</Markdown>
              </article>
            </section>
        </div>
      </div>
    </main>
  )
}

export default BlogPage