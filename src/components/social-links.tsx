import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FileUser, Github, SquareArrowOutUpRight } from "lucide-react";

export function SocialLinks() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="w-[110.417px]">
					<SquareArrowOutUpRight />
					Links
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="space-y-1">
				<a
					href="https://github.com/ibanks42"
					target="_blank"
					rel="noreferrer"
					className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground"
				>
					<Github />
					Github
				</a>
				<a
					href="https://docs.google.com/document/d/1789ct2_nWSpoktThmK1pzzb-dAXPhjrXekIVT6c2tv8"
					target="_blank"
					rel="noreferrer"
					className="relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground"
				>
					<FileUser />
					Resume
				</a>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
