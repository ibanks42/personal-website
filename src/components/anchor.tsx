import { cn } from "@/lib/utils";

export function Anchor({
	...props
}: React.DetailedHTMLProps<
	React.AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
> & { href: string }) {
	return (
		<a
			{...props}
			className={cn(
				"font-medium underline underline-offset-4",
				props.className,
			)}
		>
			{props.children}
		</a>
	);
}
