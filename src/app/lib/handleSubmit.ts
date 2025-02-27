import { useRouter } from "next/navigation";

export function useHandleSubmit() {
  const router = useRouter();

  async function handleSubmit(
    e: React.FormEvent,
    form: {
      title: string;
      content: string;
      image: string;
      imageAlt: string;
    }
  ) {
    e.preventDefault();

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/");
    }
  }

  return { handleSubmit };
}
