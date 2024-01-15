import { addArticle } from "@/lib/actions";

const page = () => {
  // api route
  //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();

  //     const formData = new FormData(e.currentTarget);

  //     fetch("/api/articles", {
  //       method: "POST",
  //       body: formData,
  //     });
  //   };

  return (
    <main className="text-center pt-16 px-5">
      <form
        action={addArticle}
        // onSubmit={handleSubmit}
        className="flex flex-col rounded max-w-[500px] my-10 mx-auto space-y-2"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border rounded h-10 px-3"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="border rounded p-3"
          rows={5}
          required
        />
        <button
          type="submit"
          className="bg-zinc-900 disabled:bg-zinc-500 transition text-white rounded py-2 px-3"
        >
          Submit new post
        </button>
        {/* <SubmitBtn /> */}
      </form>
    </main>
  );
};

export default page;
