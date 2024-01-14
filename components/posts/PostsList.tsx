import { Post } from "@/types";
import Link from "next/link";

type Props = {
  posts: Post[];
};

const PostsList = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="max-w-[400px] mb-3 mx-auto">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
