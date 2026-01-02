import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "John Maliwa | Portofolio",

    description:
		"My name is John Maliwa, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Negeri Malang.",

    author: "Alvalen Shafelbilyunazra",
    siteUrl: "https://www.John Maliwa.my.id",
    applicationName: "John Maliwa",

    keywords: [
		"John Maliwa",
		"alvalen",
		"alvalen shafel",
		"shafel",
		"alvalen shafelbilyunazra",
		"alvalen shafel bilyunazra",
		"bloodfallen",
		"alvalen porto",
		"alvalen um",
	],

    openGraph: {
		type: "website",
		url: "https://www.John Maliwa.my.id",
		title: "John Maliwa | Portofolio",
		site_name: "John Maliwa | Portofolio",
		description: "My name is John Maliwa, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "John Maliwa Portofolio",
			},
		],
		site_name: "John Maliwa | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
