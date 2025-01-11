import { exec } from "node:child_process";
import * as glob from "glob";

const patterns = ["./**/*.{js,ts,jsx,tsx,json,astro}"];

const batchSize = 50; // Adjust the batch size if needed

const options = {
	ignore: ["node_modules/**", ".git/**", "./src/components/ui/**", "dist/**"],
};

const files = patterns.flatMap((pattern) => glob.sync(pattern, options));

const runBatch = (fileBatch, callback) => {
	const lint = `./node_modules/@biomejs/biome/bin/biome check --formatter-enabled=true --linter-enabled=true --organize-imports-enabled=true --write "${fileBatch.join('" "')}"`;

	exec(lint, (error, stdout, stderr) => {
		if (error) {
			console.error(`Error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.error(`Stderr: ${stderr}`);
			return;
		}
		console.log(stdout);
		callback();
	});
};

const processFilesInBatches = (files) => {
	if (files.length === 0) {
		return;
	}

	const batch = files.slice(0, batchSize);
	const remaining = files.slice(batchSize);

	runBatch(batch, () => processFilesInBatches(remaining));
};

processFilesInBatches(files);
