import Image from "next/image";
import Link from "next/link";
import { Feature } from "@/ui/features/feature";
import { PhotoBanner } from "@/ui/photoBanner/photoBanner";
import { Testimonials } from "@/ui/testimonials/Testimonials";
import { Modal } from "@/ui/Modal";

type SearchParamProps = {
	searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: SearchParamProps) {
	const show = searchParams?.show;

	return (
		<main className="container mx-auto lg:max-w-7xl">
			{show && <Modal />}
			<div className="relative mt-16 h-[280px] md:h-[350px] lg:h-[600px]">
				<Image
					src="/images/main.png"
					alt="Picture of house"
					fill
					sizes="(min-width: 280px) 300px, 100vw"
					style={{
						objectFit: "cover",
						objectPosition: "top",
					}}
				/>
			</div>
			<Feature />
			<Link href="/?show=true">
				<button className="mx-auto mb-5 flex rounded border-0 bg-green-700 px-8 py-2 text-lg text-white hover:bg-green-900 focus:outline-none">
					Contact us
				</button>
			</Link>
			<PhotoBanner />
			<Testimonials />
		</main>
	);
}
