import { addArticle } from "@/lib/actions";
import SubmitBtn from "./SubmitBtn";

const AddArticleForm = () => {
  return (
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

      <SubmitBtn />
    </form>
  );
};

export default AddArticleForm;
