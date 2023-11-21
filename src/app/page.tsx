import Image from "next/image";

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
		</main>
	);
}
