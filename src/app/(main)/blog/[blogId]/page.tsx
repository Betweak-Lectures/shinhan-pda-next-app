"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const url = "https://shinhan-pda-react-router-full-examp.vercel.app/api/posts";
export default function BlogDetailPage() {
  const params = useParams<{ blogId: string }>();
  const blogId = params.blogId;
  const [blog, setBlog] = useState<{ id: number; title: string }>({
    id: 0,
    title: "",
  });

  useEffect(() => {
    fetch(`${url}/${blogId}`)
      .then((resp) => resp.json())
      .then((data) => {
        setBlog(data.data.post);
      });
  }, [blogId]);

  return (
    <div>
      <h1>
        {blog.id} - {blog.title}
      </h1>
    </div>
  );
}
