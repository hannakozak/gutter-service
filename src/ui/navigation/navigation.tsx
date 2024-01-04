"use client";
import { type UrlObject } from "url";
import { type Route } from "next";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ActiveLink } from "./activeLink";

type NavLinksProps = {
	href: Route<string> | UrlObject;
	label: string;
	exact: boolean;
};

const navLinks: NavLinksProps[] = [
	{ href: "/", label: "Home", exact: true },
	{ href: "/contact", label: "Contact", exact: false },
];
export const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<nav className="relative z-10">
				<button
					onClick={() => setIsOpen(!isOpen)}
					type="button"
					className="absolute right-3 h-10 w-10 justify-end rounded-lg p-2 text-end text-sm focus:outline-none focus:ring-2 lg:hidden"
				>
					<span className="sr-only">Open main menu</span>
					<Menu className={` fill-current ${isOpen ? "hidden" : "block"}`} />
					<X className={`fill-current ${isOpen ? "block" : "hidden"}`} />
				</button>
				<div className={`block w-full flex-grow lg:flex lg:w-auto ${isOpen ? "block" : "hidden"}`}>
					<ul className="lg:w-500 mx-auto ml-[-60px] flex w-screen flex-col bg-gray-900  lg:w-auto lg:flex-row lg:place-items-center">
						{navLinks.map(({ href, label, exact }) => (
							<li key={label} className="block py-2 pl-3 pr-4" onClick={() => setIsOpen(!isOpen)}>
								<ActiveLink
									href={href}
									exact={exact}
									className="font-semibold text-white hover:border-b-2 hover:border-b-white"
									activeClassName="text-white border-b-2 border-b-white"
								>
									{label}
								</ActiveLink>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</>
	);
};
