import { Feature } from "@/ui/features/feature";
import { PhotoBanner } from "@/ui/photoBanner/photoBanner";

export default function AboutPage() {
	return (
		<section className="mb-12 mt-32 text-center">
			<div className="prose mx-auto w-screen max-w-[90%]">
				<h2 className="">
					Welcome to <span className="font-bold">Gutter Service</span>
					<br /> your trusted partner for top-notch gutter services!
				</h2>
				<p>
					With a commitment to excellence and customer satisfaction, we specialize in providing
					professional gutter solutions for residential and commercial properties. Our skilled team
					is dedicated to ensuring your gutters function flawlessly, protecting your home or
					business from water damage.
				</p>
				<p>
					At <span className="font-bold">Gutter Service</span>, we pride ourselves on quality
					craftsmanship and attention to detail. Whether you need gutter installation, repair, or
					maintenance, we&aposve got you covered. Our experts use the latest techniques and
					high-quality materials to deliver durable and efficient gutter systems that stand the test
					of time.
				</p>
				<p>
					Why choose us? We prioritize customer service, offering timely and reliable solutions
					tailored to your specific needs. Count on us to keep your property safeguarded from
					rainwater and ensure your gutters are in optimal condition.
				</p>
				<p>
					Discover the peace of mind that comes with a well-maintained gutter system. Choose
					<span className="font-bold"> Gutter Service</span> for all your gutter service needs where
					professionalism meets reliability.
				</p>
			</div>
			<PhotoBanner />
			<Feature />
		</section>
	);
}
