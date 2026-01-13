import Header from './shared/Header';
import Footer from './shared/Footer';
import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';
import { useEffect, useState } from 'react';

type Props = {
	children: React.ReactNode;
};

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
			
			<div className="min-h-screen bg-background text-foreground flex flex-col relative z-10 selection:bg-primary selection:text-white">
				<Header />
				<main className="flex-grow pt-24 sm:pt-32 pb-16">{children}</main>
				<Footer />
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
