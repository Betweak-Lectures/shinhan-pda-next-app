// src/app/(main)/blog-ssr/page.tsx
import Link from "next/link";

// 서버컴포넌트만이 async function으로 컴포넌트를 정의할 수 있다.
const url = "https://shinhan-pda-react-router-full-examp.vercel.app/api/posts";
export default async function BlogPage() {
  const resp = await fetch(url);
  const data = await resp.json();
  const blogs = data.data.items as { id: number; title: string }[];

  return (
    <div>
      <div>
        <h1>블로그</h1>
        <ul>
          {blogs.map((blog) => {
            return (
              <h1 key={blog.id}>
                <Link href={`/blog-ssr/${blog.id}`}>
                  {blog.id} - {blog.title}
                </Link>
              </h1>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
