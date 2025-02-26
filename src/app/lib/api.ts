export async function getPostById(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    if (!res.ok) {
      throw new Error("Post not found");
    }
    const post = await res.json();
    return post;
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unknown error occurred" };
  }
}
