import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  imageAlt: { type: String },
});

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
export default Post;
