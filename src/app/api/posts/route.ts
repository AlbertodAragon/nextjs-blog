import { NextResponse } from "next/server";
import { connectToDatabase } from "../../lib/mongodb";
import Post from "../../lib/models/Posts";

export async function GET() {
  try {
    await connectToDatabase();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  await connectToDatabase();

  try {
    const { title, content, image } = await req.json();
    const newPost = new Post({ title, content, image });

    await newPost.save();

    return NextResponse.json(
      { message: "Post created", post: newPost },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
