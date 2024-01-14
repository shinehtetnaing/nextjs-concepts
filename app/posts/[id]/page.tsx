import SyntaxHighlighter from "react-syntax-highlighter";

// we can keep a large dependency on the server only

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params }: Props) => {
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await response.json();

  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>

      <SyntaxHighlighter className="text-left mt-5">
        {`function() {
    return "Hello World!";
}`}
      </SyntaxHighlighter>
    </main>
  );
};

export default page;
