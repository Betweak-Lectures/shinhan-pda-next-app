// src/app/(main)/blog-ssr/[blogId]/page.tsx

export interface BlogDetailPageProps {
  params: Promise<{ blogId: string }>;
}

const url = "https://shinhan-pda-react-router-full-examp.vercel.app/api/posts";

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { blogId } = await params;
  const resp = await fetch(`${url}/${blogId}`);
  const result = await resp.json();
  const blog = result.data.post as {
    id: number;
    title: string;
    content: string;
  };

  return (
    <>
      <div>
        <h1>블로그 상세페이지</h1>
        <div>
          {blog.id} - {blog.title} - {blog.content}
        </div>
      </div>
    </>
  );
}
