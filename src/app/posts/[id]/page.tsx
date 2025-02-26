import { notFound } from "next/navigation";
import Image from "next/image";
import { getPostById } from "../../lib/api";

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = await getPostById(id);

  console.log("post", post);

  if (!post || post.error) {
    return notFound();
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{post.title}</h1>
      {post.image && (
        <Image src={post.image} width={500} height={500} alt={post.imageAlt} />
      )}
      <p>{post.content}</p>
    </div>
  );
}
