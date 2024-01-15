"use client";

import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-zinc-900 disabled:bg-zinc-500 transition text-white rounded py-2 px-3"
    >
      Submit new post
    </button>
  );
};

export default SubmitBtn;
