import Header from './shared/Header';
import Footer from './shared/Footer';
import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import DarkVeil from './ui/DarkVeil';
import ImageTrail from './ui/ImageTrail';
import { FloatingElement } from './ui/FloatingElement';

type Props = {
	children: React.ReactNode;
};

const trailImages = [
	"https://i.ibb.co/k2Pg92yD/excited-african-woman-holding-shopping-bags-mobile-phone-min.jpg",
	"https://i.ibb.co/qLy4H2P8/full-shot-woman-online-shopping-concept-min.jpg",
	"https://i.ibb.co/SDT9B44M/secure-online-transactions-privacy-assurance-privacy-assurance-online-transactions-339391-58503-min.jpg",
	"https://i.ibb.co/dw2FBBBM/surprised-screaming-african-american-girl-red-hoodie-with-big-colorful-bags-ring-lamp-271445-898.jpg",
	"https://i.ibb.co/21wVjdTr/online-shopping-concept-min.jpg",
	"https://i.ibb.co/RpJzWJkW/medium-shot-women-clothes-shopping-min.jpg",
	"https://i.ibb.co/zTYp8V0f/13-min.jpg",
	"https://i.ibb.co/JWYpZ8JF/closeup-shot-two-pretty-afro-american-girls-using-their-phones-while-holding-shopping-bags-min.jpg",
	"https://i.ibb.co/sXYQnrH/closeup-shot-beautiful-young-african-women-with-shopping-bags-1-min.jpg",
	"https://i.ibb.co/W8nmLjC/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone-min.jpg",
];

export const Layout = ({ children }: Props) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	return (
		<>
			<Meta />
			<Scripts />
			{/* Animated Background Container */}
			<motion.div
				initial={{ opacity: 0, scale: 1.1 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 2, ease: "easeOut" }}
				className="fixed inset-0 z-0 pointer-events-none"
				style={{ minHeight: "100vh" }}
			>
				<DarkVeil
					hueShift={10}
					speed={0.3}
					noiseIntensity={0.02}
					warpAmount={0.1}
				/>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
					className="absolute w-full h-[40%] lg:h-[75%] z-[100]"
				>
					<ImageTrail items={trailImages} variant={2} />
				</motion.div>
				<div className="absolute inset-0 z-[50] pointer-events-none">
					{[...Array(isMobile ? 3 : 6)].map((_, i) => (
						<FloatingElement
							key={i}
							delay={i * 0.5}
							amplitude={isMobile ? 10 + i * 3 : 15 + i * 5}
							duration={3 + i * 0.5}
						>
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 0.6, scale: 1 }}
								transition={{ delay: 2 + i * 0.2, duration: 0.8 }}
								className={`absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/20 rounded-full blur-sm`}
								style={{
									left: `${20 + i * (isMobile ? 20 : 15)}%`,
									top: `${30 + i * (isMobile ? 15 : 10)}%`,
								}}
							/>
						</FloatingElement>
					))}
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 2 }}
					className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-[10] pointer-events-none"
				/>
			</motion.div>

			<div className="min-h-screen bg-transparent text-foreground flex flex-col relative z-10">
				<Header />
				<main className="flex-grow pt-24 sm:pt-32">{children}</main>
				<Footer />
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
