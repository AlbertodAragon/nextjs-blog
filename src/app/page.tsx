import Link from "next/link";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();

  return (
    <div>
      <h1>Blog</h1>
      {posts.length === 0 ? <p>No posts available.</p> : null}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          padding: "20px",
        }}
      >
        {posts.map((post: any) => (
          <Link
            href={`/posts/${post._id}`}
            key={post._id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                cursor: "pointer",
              }}
            >
              <h2>{post?.title}</h2>
              <p>{post.content.slice(0, 100)}...</p>
            </div>
          </Link>
        ))}

        <Link href="/new">
          <button>Create New Post</button>
        </Link>
      </div>
    </div>
  );
}
