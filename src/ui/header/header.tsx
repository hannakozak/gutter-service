import { Navigation } from "../navigation/navigation";

export const Header = () => {
	return (
		<header className="fixed top-0 z-10 flex h-16 w-screen justify-between bg-gray-900 py-3 text-white lg:max-w-7xl">
			<div className="flex flex-col">
				<span>Gutter</span>
				<span>Service</span>
			</div>
			<Navigation />
		</header>
	);
};
