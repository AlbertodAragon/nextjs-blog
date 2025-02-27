"use client";
import { useState } from "react";
import { useHandleSubmit } from "../lib/handleSubmit";

export default function NewPostPage() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    image: "",
    imageAlt: "",
  });

  const { handleSubmit } = useHandleSubmit();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create a New Post</h1>
      <form onSubmit={(e) => handleSubmit(e, form)}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="Alt Image"
          value={form.imageAlt}
          onChange={(e) => setForm({ ...form, imageAlt: e.target.value })}
          required
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
