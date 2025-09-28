import { Navigation } from "../navigation/navigation";
import { ActiveLink } from "../navigation/activeLink";

export const Header = () => {
	return (
		<header className="bg-brand-dark fixed top-0 z-10 flex h-16 w-screen justify-between py-3 text-white lg:max-w-7xl">
			<ActiveLink
				href="/"
				exact={true}
				className="flex flex-col px-3 text-center font-semibold"
				activeClassName="text-green-500"
			>
				<span>Gutter</span>
				<span>Service</span>
			</ActiveLink>
			<Navigation />
		</header>
	);
};
