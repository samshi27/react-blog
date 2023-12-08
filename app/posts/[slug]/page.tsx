import getPostMetadata from "@/components/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

const getPostContent = (slug: any) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="prose">
      <div className="my-8 text-center">
        <h1 className="text-2xl font-medium m-0 text-slate-600">
          {post.data.title}
        </h1>
        <p className="text-slate-400 m-1 text-sm">{post.data.date}</p>
      </div>
      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
