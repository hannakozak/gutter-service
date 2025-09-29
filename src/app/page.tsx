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
		<main className="mx-auto w-screen lg:max-w-7xl">
			{show && <Modal />}
			<div className=" px-4pt-20 flex min-h-screen flex-col justify-center bg-brand-dark bg-roof bg-cover bg-center bg-no-repeat pl-3 text-white sm:px-6 lg:px-20">
				<h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
					Welcome to <br />
					Gutter Services
				</h1>
				<p className="max-w-xs  sm:text-lg md:mb-6 md:max-w-md lg:text-xl">
					Protect your home <br />
					our expert gutter solutions.
				</p>
				<Link href="/?show=true">
					<button className="mb-5 mt-6 rounded bg-brand-green px-6 py-2 text-base text-white hover:bg-green-900 focus:outline-none sm:mt-6 sm:px-8 sm:py-3 sm:text-lg lg:px-10 lg:py-4 lg:text-xl">
						Contact us
					</button>
				</Link>
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
