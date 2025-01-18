import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbPage,
} from "./ui/breadcrumb";

const AppBreadcrumb = ({ url, title }: { url: URL; title?: string }) => {
	if (!url || url.pathname === "/") {
		return null;
	}

	const { pathname } = url;
	const splitUrl = pathname.split("/").filter((p) => p !== "");

	function getUrlOfItem(item: string) {
		return `/${splitUrl.slice(0, splitUrl.indexOf(item) + 1).join("/")}`;
	}

	function getItemCapitalized(item: string) {
		const spaced = item.split(" ");
		let capitalized = "";
		for (let i = 0; i < spaced.length; i++) {
			if (!spaced[i]) continue;
			capitalized += spaced[i].at(0)?.toUpperCase() + spaced[i].slice(1);
		}
		return capitalized;
	}

	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Home</BreadcrumbLink>
					<BreadcrumbSeparator />
				</BreadcrumbItem>
				{splitUrl.map((item, index) => (
					<div className="flex flex-row items-center gap-1" key={item}>
						<BreadcrumbItem>
							{index === splitUrl.length - 1 ? (
								<BreadcrumbPage>
									{title ?? getItemCapitalized(item)}
								</BreadcrumbPage>
							) : (
								<BreadcrumbLink href={getUrlOfItem(item)}>
									{getItemCapitalized(item)}
								</BreadcrumbLink>
							)}
						</BreadcrumbItem>
						{index !== splitUrl.length - 1 && <BreadcrumbSeparator />}
					</div>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export default AppBreadcrumb;
