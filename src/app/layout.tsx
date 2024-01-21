import "../ui/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Gutter Service",
	description: "Website of company that offers local gutter service",
};

import { inter } from "../ui/fonts";
import { Header } from "@/ui/header/header";
import { Footer } from "@/ui/footer/footer";
import { SocialMedia } from "@/ui/footer/social-media";
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} relative mx-auto flex min-h-screen flex-col justify-between antialiased lg:max-w-7xl`}
			>
				<Header />
				{children}
				<SocialMedia />
				<Footer />
			</body>
		</html>
	);
}
