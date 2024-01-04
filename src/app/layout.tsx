import "../ui/globals.css";

import { inter } from "../ui/fonts";
import { Header } from "@/ui/header/header";
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} relative  mx-auto antialiased lg:max-w-7xl`}>
				<Header />
				{children}
				<footer className="bg-gray-900  text-white">
					<div className="container mx-auto">
						<p className="text-center">&copy; 2023 All rights reserved.</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
