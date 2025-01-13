import OpenDeckClient from "@/assets/opendeck-client.jpg";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Anchor } from "./anchor";

export function ProjectCards() {
	const cards = [
		{
			name: "OpenDeck",
			description: (
				<div className="flex flex-col gap-4">
					<div>
						A Stream Deck alternative that allows the use of JS/TS scripting via{" "}
						<Anchor href="https://bun.sh">bun</Anchor>
					</div>
					<p>
						<img src={OpenDeckClient.src} alt="opendeck client" />
					</p>
					<div className="flex flex-col gap-2">
						<h3 className="text-2xl font-semibold">Introduction</h3>
						<p>
							Starting off with this project, I knew I wanted a language and
							tech stack that could cross-compile to most systems, especially
							Raspberry Pi, as this is where the client would be running. I
							investigated numerous ways to do this, including: Flutter, Rust
							with <Anchor href="https://tauri.app">Tauri</Anchor>, C# with{" "}
							<Anchor href="https://dotnet.microsoft.com/en-us/apps/maui">
								MAUI
							</Anchor>
							, and Go with <Anchor href="https://wails.io">Wails</Anchor> or{" "}
							<Anchor href="https://fyne.io">Fyne</Anchor>.
							<p>
								I have a soft spot in my heart for C#, and while MAUI leaves a
								lot to be desired, I was willing to tough it out. But
								ultimately, even though the name is{" "}
								<em>Multi-platform App UI</em>, it doesn't even support Linux,
								let alone RaspberryPI.
							</p>
							<p>
								The next option being Rust, and something I have some experience
								with, <Anchor href="https://tauri.app">Tauri</Anchor>. While
								this was somewhat appealing, unfortunately this didn't quite fit
								my use case as the ability to cross-compile to ARM for my RPI
								was{" "}
								<Anchor href="https://v2.tauri.app/distribute/appimage/#appimages-for-arm-based-devices">
									not supported
								</Anchor>
								. There was a workaround with Github Actions, or compiling
								directly on my RPI, but I didn't want to deal with the hassle of
								copying the files to my RPI every time, or committing every
								change to Git, or even waiting on the limited power of the RPI
								to compile.
							</p>
							<p>
								The next option was{" "}
								<Anchor href="https://wails.io">Wails</Anchor>. Once again this
								was a similar issue. I could cross-compile with Github Actions,
								but this would be too time-consuming and it also doesn't support
								mobile. The ability to run the client on a mobile phone is
								appealing, even if I wasn't sure thats where the project would
								go.
							</p>
							<p>
								Flutter seemed like a good option, but I didn't really want to
								learn flutter at the time. I wanted to continue with a language
								like Go, or Rust. And I could be wrong but from the digging I
								did into it's viability, it seemed like the cross-compilation
								route would once again involve Github Actions.
							</p>
							<p>
								Ultimately I settled on Go with{" "}
								<Anchor href="https://fyne.io">Fyne</Anchor>. Now, building UIs
								with it does seem a little counter-intuitive to what I am used
								to (HTML and some WinForms with C# back in my high school days),
								but the existence of{" "}
								<Anchor href="https://github.com/fyne-io/fyne-cross">
									fyne-cross
								</Anchor>{" "}
								was a <b>huge</b> selling point.
							</p>
						</p>
						<p className="pt-24">To be continued...</p>
					</div>
				</div>
			),
			github: "https://github.com/ibanks42/opendeck",
		},
	];

	return (
		<div className="flex flex-col gap-4">
			{cards.map((c) => (
				<Card key={c.name}>
					<CardHeader>
						<CardTitle>{c.name}</CardTitle>
						<CardDescription>
							<Anchor href={c.github}>{c.github}</Anchor>
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p>{c.description}</p>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
