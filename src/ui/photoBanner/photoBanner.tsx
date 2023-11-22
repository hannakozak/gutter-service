import Image from "next/image";

export const PhotoBanner = () => {
	return (
		<section className="mb-24 flex flex-col items-center justify-between md:flex-row">
			<div className="relative m-6 h-[250px] w-[400px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] lg:h-[380px]">
				<Image
					src="/images/gutter-a.png"
					alt="Gutter cleaning"
					fill={true}
					style={{
						objectFit: "cover",
						objectPosition: "top",
					}}
				/>
			</div>
			<div className="relative m-6 h-[250px] w-[400px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] lg:h-[380px]">
				<Image
					src="/images/gutter-b.png"
					alt="Gutter cleaning"
					fill={true}
					style={{
						objectFit: "cover",
						objectPosition: "top",
					}}
				/>
			</div>
			<div className="relative m-6 h-[250px] w-[400px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] xl:h-[380px]">
				<Image
					src="/images/gutter-c.png"
					alt="Gutter cleaning"
					fill={true}
					style={{
						objectFit: "cover",
						objectPosition: "top",
					}}
				/>
			</div>
		</section>
	);
};
