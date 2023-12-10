"use client";

import { Carousel } from "./Carousel";
import { feedbacks } from "@/data/testimonials";

export const Testimonials = () => (
	<>
		<h2 className="title-font mb-3 px-5 text-center text-lg font-bold text-gray-900">
			It is not just us. Here is what others have to say about us ...
		</h2>

		<Carousel data={feedbacks} />
	</>
);
