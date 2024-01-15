"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

export const addArticle = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  await prisma.article.create({
    data: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
    },
  });

  revalidatePath("/articles");
};
