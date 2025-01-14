import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string(),
			date: z.coerce.date(),
			excerpt: z.string(),
			github: z.string().optional(),
			image: z.string().optional(),
			imageHeight: z.number().optional(),
			imageWidth: z.number().optional(),
			tags: z.array(z.string()),
		}),
});

export const collections = {
	projects: projectsCollection,
};
