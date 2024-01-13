import "../ui/globals.css";

import { inter } from "../ui/fonts";
import { Header } from "@/ui/header/header";
import { Footer } from "@/ui/footer/footer";
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} relative mx-auto flex min-h-screen flex-col justify-between antialiased lg:max-w-7xl`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
