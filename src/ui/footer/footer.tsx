import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
	return (
		<footer className="bg-gray-900 py-8 text-gray-300">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					<div>
						<h3 className="text-lg font-semibold text-white">Gutter Services Co.</h3>
						<p className="mt-4 text-sm">
							Providing professional gutter cleaning, installation, and maintenance services to keep
							your home protected.
						</p>
					</div>

					<div>
						<h3 className="text-lg font-semibold text-white">Our Services</h3>
						<ul className="mt-4 space-y-2">
							<li>
								<a href="#" className="hover:underline">
									Gutter Cleaning
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Gutter Installation
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Gutter Repair
								</a>
							</li>
							<li>
								<a href="#" className="hover:underline">
									Gutter Guard Installation
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold text-white">Contact Us</h3>
						<ul className="mt-4 space-y-2">
							<li>1234 Gutter St, Edinburgh</li>
							<li>Email: support@gutterservices.com</li>
							<li>Phone: (555) 123-4567</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold text-white">Follow Us</h3>
						<div className="mt-4 flex space-x-4">
							<a
								href="https://facebook.com"
								className="text-gray-400 hover:text-white"
								aria-label="Facebook"
							>
								<Facebook size={24} />
							</a>
							<a
								href="https://twitter.com"
								className="text-gray-400 hover:text-white"
								aria-label="Twitter"
							>
								<Twitter size={24} />
							</a>
							<a
								href="https://instagram.com"
								className="text-gray-400 hover:text-white"
								aria-label="Instagram"
							>
								<Instagram size={24} />
							</a>
							<a
								href="https://linkedin.com"
								className="text-gray-400 hover:text-white"
								aria-label="LinkedIn"
							>
								<Linkedin size={24} />
							</a>
						</div>
					</div>
				</div>

				<div className="mt-8 border-t border-gray-700 pt-8 text-center">
					<p className="text-sm">
						&copy; {new Date().getFullYear()} Gutter Services Co. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
