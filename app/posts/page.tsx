import PostsList from "@/components/posts/PostsList";

const page = async () => {
  // with server components, u can make a fetch call without useEffect
  // this can be closer to actual data source (close to database)

  const response = await fetch(`https://dummyjson.com/posts?limit=3`);
  const data = await response.json();

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-5xl font-semibold mb-7">All posts</h1>

      <PostsList posts={data.posts} />
    </main>
  );
};

export default page;
