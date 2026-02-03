import { buttonVariants } from "@/components/ui/button";
import { FileUser, Github } from "lucide-react";

export function SocialLinks() {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<a
				href="https://github.com/ibanks42"
				target="_blank"
				rel="noreferrer"
				className={buttonVariants({ variant: "outline", size: "sm" })}
			>
				<Github />
				GitHub
			</a>
			<a
				href="https://docs.google.com/document/d/1789ct2_nWSpoktThmK1pzzb-dAXPhjrXekIVT6c2tv8"
				target="_blank"
				rel="noreferrer"
				className={buttonVariants({ variant: "outline", size: "sm" })}
			>
				<FileUser />
				Resume
			</a>
		</div>
	);
}
