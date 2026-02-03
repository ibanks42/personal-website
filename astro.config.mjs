import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
		ssr: {
			noExternal: ["lucide-react"],
		},
	},
	build: {
		server: "ibanks.dev",
	},
	integrations: [
		react(),
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
