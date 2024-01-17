import { Post } from "@/types";
import Link from "next/link";

type Props = {
  posts: Post[];
};

// ({ posts }: Props)

const PostsList = async () => {
  // with server components, u can make a fetch call without useEffect
  // this can be closer to actual data source (close to database)

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(`https://dummyjson.com/posts?limit=3`);
  const data = await response.json();

  return (
    <ul>
      {data.posts.map((post: Post) => (
        <li key={post.id} className="max-w-[400px] mb-3 mx-auto">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
