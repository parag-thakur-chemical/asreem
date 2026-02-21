import Image from "next/image";

export default function IndustryAcademia() {
	return (
		<section className="w-full py-10 bg-blue-50">
			<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 sm:px-8">
				<div className="flex-shrink-0">
					<Image
						src="/industry-academia.jpg"
						alt="Industry-Academia Interaction Session"
						width={500}
						height={333}
						className="rounded-xl shadow-lg object-cover"
						priority
					/>
				</div>
				<div className="flex-1">
					<h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Industry-Academia Interaction Session</h2>
					<h3 className="text-2xl font-semibold text-green-700 mb-3">Industry-Academia Synergy for Green Energy & Environmental Solutions</h3>
					<p className="text-gray-800  mb-2 text-justify">
						The Industry-Academia Interaction Session is a unique platform designed to foster collaboration between leading professionals from industry and academia. This session aims to bridge the gap between research and real-world applications, enabling participants to share insights, challenges, and innovative solutions for a sustainable future.
					</p>
					<p className="text-gray-700 text-justify">
						The focus of this session is <span className="font-bold text-green-800">Industry-Academia Synergy for Green Energy & Environmental Solutions</span>. Experts from both sectors will engage in meaningful dialogue, exchange ideas, and explore opportunities for joint ventures, research partnerships, and technology transfer. Join us to be a part of this dynamic interaction and contribute to shaping the future of green energy and environmental sustainability.
					</p>
				</div>
			</div>
		</section>
	);
}
