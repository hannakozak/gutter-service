import Image from "next/image";

export const PhotoBanner = () => {
	return (
		<section className="flex flex-col items-center justify-between px-3 md:flex-row">
			<div className="relative m-6 h-[250px] w-[300px] text-center shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:w-[400px] lg:h-[380px]">
				<Image
					src="/images/gutter-a.png"
					alt="Gutter cleaning"
					quality={100}
					fill
					sizes="100vw"
					style={{
						objectFit: "cover",
					}}
				/>
			</div>
			<div className="relative m-6 h-[250px] w-[300px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:w-[400px] lg:h-[380px]">
				<Image
					src="/images/gutter-b.png"
					alt="Gutter cleaning"
					fill
					sizes="100vw"
					style={{
						objectFit: "cover",
					}}
				/>
			</div>
			<div className="relative m-6 h-[250px] w-[300px]  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:w-[400px] lg:h-[380px]">
				<Image
					src="/images/gutter-c.png"
					alt="Gutter cleaning"
					fill
					sizes="100vw"
					style={{
						objectFit: "cover",
					}}
				/>
			</div>
		</section>
	);
};
