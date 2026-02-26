// src/app/(main)/blog-hybrid/page.tsx
import BlogList from "@/features/blogs/components/blog-list";

export default function BlogHybridListPage() {
  // 첫화면은 SSR
  // 그리고 내부적으로 CSR (요청 한 번 더)
  return (
    <div>
      <BlogList />
    </div>
  );
}
