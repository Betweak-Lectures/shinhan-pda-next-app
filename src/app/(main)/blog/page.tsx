"use client";

import Link from "next/link";
// 클라이언트 컴포넌트
// 브라우저에서 실행되는 걸 전제로 선언.

import { useEffect, useState } from "react";
const url = "https://shinhan-pda-react-router-full-examp.vercel.app/api/posts";
export default function BlogPage() {
  const [blogList, setBlogList] = useState<{ id: number; title: string }[]>([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setBlogList(data.data.items);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>블로그 리스트</h1>
      </div>
      <ul>
        {blogList.map((blog) => {
          return (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                {blog.id} - {blog.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
