import "../ui/globals.css";

import { inter } from "../ui/fonts";
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} mx-auto  antialiased lg:max-w-7xl`}>
				<header className="h-16 bg-gray-900 text-white">
					<div className="flex flex-col">
						<span>Gutter</span>
						<span>Service</span>
					</div>
				</header>
				{children}
				<footer className=" bg-gray-900  text-white  ">
					<div className="container mx-auto">
						<p className="text-center">&copy; 2023 All rights reserved.</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
