import Image from "next/image";
import { Feature } from "@/ui/features/feature";
import { PhotoBanner } from "@/ui/photoBanner/photoBanner";

export default function Home() {
	return (
		<main className="container mx-auto lg:max-w-7xl">
			<div className="relative h-[280px]  lg:h-[600px]">
				<Image
					src="/images/main.png"
					alt="Picture of house"
					fill={true}
					style={{
						objectFit: "cover",
						objectPosition: "top",
					}}
				/>
			</div>
			<Feature />
			<PhotoBanner />
		</main>
	);
}
