import { z, defineCollection } from "astro:content";

const hookCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.date(),
	}),
});

export const collections = {
	react: hookCollection,
	svelte: hookCollection,
};
