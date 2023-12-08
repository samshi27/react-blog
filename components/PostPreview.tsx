import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <Link href={`/posts/${props.slug}`}>
      <div className="border border-violet-200 p-4 rounded-md shadow-md bg-white">
        <p className="text-sm text-slate-400">{props.date}</p>
        <h2 className="font-bold text-violet-600">{props.title}</h2>
        <p className="text-slate-700 mt-3">{props.subtitle}</p>
      </div>
    </Link>
  );
};

export default PostPreview;
