"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Our custom button component

interface Slide {
	id: number;
	name: string;
	tagline: string;
	description: string;
}

interface DemoSliderProps {
	data: Slide[];
}

export const Carousel: React.FC<DemoSliderProps> = ({ data }) => {
	return (
		<section className="w-full">
			<div className=" h-screen">
				<ul className="h-full w-full">
					<Swiper
						speed={500}
						pagination={{ type: "bullets", clickable: true }}
						autoplay={true}
						loop={true}
						modules={[Autoplay, Navigation, Pagination]}
					>
						{data.map(({ id, name, tagline, description }) => (
							<SwiperSlide key={id}>
								<div className="relative mx-auto w-3/4 text-center ">
									<div className="p-5 text-center">
										{tagline && (
											<h2 className="text-md p-5 font-semibold text-gray-900">{tagline}</h2>
										)}
										<p className="text-gray-900">{description}</p>
										<p className="mb-5 p-5 text-gray-900">{name}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</ul>
			</div>
		</section>
	);
};
