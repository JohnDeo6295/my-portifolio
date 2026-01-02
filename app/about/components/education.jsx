"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGraduationCap,
	faChalkboardTeacher,
	faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

/* ---------- Wrapper ---------- */
function Wrapper({ children }) {
	return (
		<div className="mx-auto container p-10 grid grid-cols-1 my-10">
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, type: "spring" }}>
				{children}
			</motion.div>
		</div>
	);
}

/* ---------- Data ---------- */
const educationData = [
	{
		period: "2022 – Present",
		institution: "Mbeya University of Science and Technology (MUST)",
		program: "Diploma in Mechanical Engineering",
		description:
			"Focused on mechanical systems design, manufacturing processes, thermodynamics, and applied engineering practices aligned with Tanzania’s industrial development.",
		image: "/image/must.jpg",
	},
	{
		period: "2024 – Present",
		institution: "University of Dar es Salaam (UDSM)",
		program: "Industrial Engineering (Practical Training & Academic Programs)",
		description:
			"Advanced exposure to industrial systems optimization, production planning, quality control, operations research, and real-world industrial problem-solving.",
		image: "/image/udsm.jpg",
	},
];

const trainingData = [
	{
		name: "IPF Softwares",
		focus: "Software Development & Digital Systems Training",
	},
	{
		name: "UDICTI",
		focus: "Innovation, ICT Skills & Digital Transformation",
	},
	{
		name: "UDIEMSO",
		focus: "Entrepreneurship, Engineering & Management Seminars",
	},
	{
		name: "StartHub Africa",
		focus: "Startup Incubation, Innovation & Business Development",
	},
	{
		name: "Huawei Academy",
		focus: "ICT, Networking, Cloud Computing & Digital Skills",
	},
];

/* ---------- Page ---------- */
export default function Education() {
	return (
		<Wrapper>
			<section className="space-y-14">
				{/* Header */}
				<motion.div
					className="text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tight">
						Education & Training
					</h1>
					<p className="text-gray-600 max-w-2xl mx-auto mt-2">
						My academic background, professional training, and capacity-building
						experiences within Tanzania’s education and innovation ecosystem.
					</p>
				</motion.div>

				{/* Education Section */}
				<div className="space-y-10">
					<h2 className="text-2xl font-semibold flex items-center gap-3">
						<FontAwesomeIcon icon={faGraduationCap} />
						Formal Education
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{educationData.map((edu, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2 }}
								className="bg-white/40 backdrop-blur-md rounded-2xl shadow p-6 space-y-4">
								<div className="relative h-48 rounded-xl overflow-hidden">
									<Image
										src={edu.image}
										alt={edu.institution}
										fill
										className="object-cover"
									/>
								</div>

								<div>
									<span className="text-sm text-gray-500">{edu.period}</span>
									<h3 className="text-lg font-semibold">
										{edu.institution}
									</h3>
									<p className="font-medium text-gray-700">
										{edu.program}
									</p>
									<p className="text-gray-600 mt-2 text-justify">
										{edu.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Trainings & Seminars */}
				<div className="space-y-6">
					<h2 className="text-2xl font-semibold flex items-center gap-3">
						<FontAwesomeIcon icon={faChalkboardTeacher} />
						Seminars, Trainings & Events
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{trainingData.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ delay: index * 0.1 }}
								className="bg-white/30 backdrop-blur-md rounded-xl p-5 shadow hover:shadow-lg transition">
								<div className="flex items-start gap-3">
									<FontAwesomeIcon
										icon={faCertificate}
										className="text-lg mt-1"
									/>
									<div>
										<h3 className="font-semibold">{item.name}</h3>
										<p className="text-sm text-gray-600">
											{item.focus}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</Wrapper>
	);
}
