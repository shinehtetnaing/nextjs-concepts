import AddArticleForm from "@/components/articles/AddArticleForm";
import prisma from "@/lib/db";
import Link from "next/link";

const page = async () => {
  const articles = await prisma.article.findMany();

  return (
    <main className="text-center pt-16 px-5">
      {/* <div className="flex justify-end">
        <Link href="/articles/new">
          <button className="py-2 px-2 bg-slate-950 hover:bg-slate-800 mb-5 rounded-md text-white">
            New
          </button>
        </Link>
      </div> */}

      <AddArticleForm />
      <h1 className="text-5xl font-semibold mb-7">All articles</h1>

      <ul>
        {articles.map((article) => (
          <li key={article.id} className="max-w-[400px] mb-3 mx-auto">
            <Link href={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default page;
