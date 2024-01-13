import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export const SocialMedia = () => {
	return (
		<section className="bg-gray-800 text-white">
			<div className="container mb-6 px-6 pt-6">
				<div className="mb-6 flex justify-center gap-2">
					<div className=" flex h-10 w-10 items-center justify-center rounded-full border-2 hover:bg-gray-900">
						<Facebook />
					</div>
					<div className=" flex h-10 w-10 items-center justify-center rounded-full border-2 hover:bg-gray-900">
						<Twitter />
					</div>
					<div className=" flex h-10 w-10 items-center justify-center rounded-full border-2 hover:bg-gray-900">
						<Instagram />
					</div>
					<div className=" flex h-10 w-10 items-center justify-center rounded-full border-2 hover:bg-gray-900">
						<Linkedin />
					</div>
					<div className=" flex h-10 w-10 items-center justify-center rounded-full border-2 hover:bg-gray-900">
						<Youtube />
					</div>
				</div>
			</div>
		</section>
	);
};
