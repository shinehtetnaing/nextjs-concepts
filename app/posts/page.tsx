import PostsList from "@/components/posts/PostsList";
import { Suspense } from "react";

const page = async () => {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-5xl font-semibold mb-7">All posts</h1>

      <Suspense fallback="Loading...">
        <PostsList />
      </Suspense>
    </main>
  );
};

export default page;
