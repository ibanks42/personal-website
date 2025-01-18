// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

// https://astro.build/config
export default defineConfig({
	vite: {
		ssr: {
			noExternal: ["lucide-react"],
		},
	},
	build: {
		server: "ibanks.dev",
	},
	integrations: [
		react(),
		tailwind({ applyBaseStyles: false }),
		mdx({
			syntaxHighlight: false,
			rehypePlugins: [
				/**
				 * Adds ids to headings
				 */
				rehypeSlug,
				[
					rehypePrettyCode,
					{
						keepBackground: false,
						theme: "material-theme-palenight",
					},
				],
			],
		}),
	],
});
