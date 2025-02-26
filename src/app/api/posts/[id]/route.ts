import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongodb";
import Post from "../../../lib/models/Posts";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  console.log("Post", Post);

  await connectToDatabase();

  try {
    const post = await Post.findById(id);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }
}
