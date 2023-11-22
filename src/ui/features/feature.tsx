import { Hammer, Shovel, Trash2 } from "lucide-react";

export const Feature = () => {
	const features = [
		{
			id: 1,
			heading: "Debris Removal",
			description:
				"The primary goal of gutter cleaning is to remove debris such as leaves, twigs, dirt, and other buildup from the gutters. This prevents clogs and allows water to flow freely.",
			icon: <Trash2 />,
		},
		{
			id: 2,
			heading: "Downspout Cleaning",
			description:
				"Cleaning the downspouts is crucial for ensuring that water is properly directed away from the home foundation. Professionals will clear any obstructions in the downspouts.",
			icon: <Shovel />,
		},
		{
			id: 3,
			heading: "Gutter Inspection",
			description:
				"In addition to cleaning, a thorough inspection of the gutters is often performed. This helps identify any damage, rust, or sagging that may require repairs.",
			icon: <Hammer />,
		},
	];
	return (
		<>
			<section className="">
				<div className="container mx-auto px-5 py-24">
					<div className="mb-20 text-center text-2xl">
						<h2 className="mb-4 font-bold text-green-700">
							Experience a comprehensive gutter cleaning service with our team,
						</h2>
						<p className="text-gray-500s mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
							offering expert debris removal, meticulous downspout cleaning, thorough roof and
							gutter inspections, minor repairs, and a commitment to safety, ensuring your homes
							protection and longevity.
						</p>
						<div className="mt-6 flex flex-col justify-center text-center md:flex-row">
							{features.map((feature) => (
								<div
									key={feature.id}
									className="flex flex-col items-center p-4 text-center md:w-1/3"
								>
									<div className="mb-5 text-green-700">{feature.icon}</div>
									<div className="flex-grow">
										<h2 className="title-font mb-3 text-lg font-bold text-green-700">
											{feature.heading}
										</h2>
										<p className="text-base leading-relaxed">{feature.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<button className="mx-auto mt-16 flex rounded border-0 bg-green-700 px-8 py-2 text-lg text-white hover:bg-green-900 focus:outline-none">
						Contact us
					</button>
				</div>
			</section>
		</>
	);
};
