import Image from "next/image";
import { Navigation } from "../navigation/navigation";
import { ActiveLink } from "../navigation/activeLink";

export const Header = () => {
	return (
		<header className="fixed top-0 z-10 flex h-20 w-screen justify-between bg-brand-dark py-3 text-white lg:max-w-7xl">
			<ActiveLink
				href="/"
				exact={true}
				className="flex flex-col px-3 text-center font-semibold"
				activeClassName="text-green-500"
			>
				<Image
					src="/images/logo.png"
					alt="Gutter Services Logo"
					width={150}
					height={150}
					className="-ml-6 -mt-14 h-44 w-44 md:-mt-14"
				/>
			</ActiveLink>
			<Navigation />
		</header>
	);
};
