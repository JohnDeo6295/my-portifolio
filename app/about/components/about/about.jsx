"use client";

import Image from "next/image";
import Card from "./spotify/card";
import { motion } from "framer-motion";
import Hr from "@/components/Hr";

/* ------------------ Animations ------------------ */
const imageAnim = {
	hidden: { opacity: 0, scale: 0.6 },
	visible: { opacity: 1, scale: 1 },
};

function Title() {
	return (
		<div className="mt-10 flex flex-col items-center w-full pl-10 md:pl-32">
			<div className="flex flex-col my-5 self-start">
				<Hr variant="long" />
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />

			<div className="relative mx-auto container grid grid-cols-1 md:grid-cols-2 gap-4 px-10 mb-10">
				{/* ------------------ Images Section ------------------ */}
				<div className="flex justify-center items-start flex-col mb-5">
					<div className="relative w-full aspect-square">
						{/* Image 1 */}
						<div className="absolute top-28 left-10 w-[50%] aspect-square grayscale hover:grayscale-0 transition-all duration-300">
							<motion.div
								variants={imageAnim}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								className="relative w-full h-full"
							>
								<Image
									src="/image/me1.jpg"
									alt="John Maliwa portrait"
									fill
									priority
									sizes="(max-width: 768px) 100vw, 50vw"
									className="object-cover rounded-xl"
								/>
							</motion.div>
						</div>

						{/* Image 2 */}
						<div className="absolute top-16 right-28 w-[30%] aspect-square grayscale hover:grayscale-0 transition-all duration-300">
							<motion.div
								variants={imageAnim}
								initial="hidden"
								whileInView="visible"
								transition={{ delay: 0.3 }}
								viewport={{ once: true }}
								className="relative w-full h-full"
							>
								<Image
									src="/image/me2.jpg"
									alt="John Maliwa working"
									fill
									sizes="(max-width: 768px) 60vw, 30vw"
									className="object-cover rounded-xl"
								/>
							</motion.div>
						</div>

						{/* Image 3 */}
						<div className="absolute bottom-16 right-20 w-[40%] aspect-square grayscale hover:grayscale-0 transition-all duration-300">
							<motion.div
								variants={imageAnim}
								initial="hidden"
								whileInView="visible"
								transition={{ delay: 0.5 }}
								viewport={{ once: true }}
								className="relative w-full h-full"
							>
								<Image
									src="/image/me3.jpg"
									alt="John Maliwa profile"
									fill
									sizes="(max-width: 768px) 80vw, 40vw"
									className="object-cover rounded-xl"
								/>
							</motion.div>
						</div>
					</div>
				</div>

				{/* ------------------ Text Content ------------------ */}
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{ opacity: 0, x: 200 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
				>
					<h2 className="text-2xl font-bold tracking-wider mb-3">
						John Maliwa
					</h2>

					<p className="text-gray-600 text-justify text-lg leading-relaxed">
						👋 Hey! I&rsquo;m{" "}
						<span className="text-black font-medium">John Maliwa</span>, an
						<span className="text-black font-medium">
							{" "}
							Industrial & Mechanical Engineer 🔧
						</span>{" "}
						with a strong passion for
						<span className="text-black font-medium">
							{" "}
							full-stack development 💻
						</span>{" "}
						and
						<span className="text-black font-medium">
							{" "}
							mechanical & product design using SolidWorks 🛠️.
						</span>
						<br />
						<br />
						I&rsquo;m also a{" "}
						<span className="text-black font-medium">
							Co-Founder at Disihub Tech 🚀
						</span>
						, where we build innovative digital products, web & mobile
						applications, and scalable systems.
						<br />
						<br />
						In today&rsquo;s fast-evolving tech landscape 🌍, I believe in being a
						<span className="text-black font-medium">
							{" "}
							lifelong learner 📚
						</span>{" "}
						and continuously pushing boundaries.
					</p>

					<Card />
				</motion.div>
			</div>
		</>
	);
}
