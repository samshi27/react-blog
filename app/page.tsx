import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetadata";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview
      key={post.slug}
      title={post.title}
      date={post.date}
      subtitle={post.subtitle}
      slug={post.slug}
    ></PostPreview>
    // or you can use the spread operator as {...post}
    // writing key as an attribute is required
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  );
};

export default HomePage;
