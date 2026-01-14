import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { Poppins, Sora } from 'next/font/google';
import { useEffect } from 'react';
import '../styles/index.css';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['100', '200', '300', '400', '500', '600', '700', '800'] });
const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	weight: ['400', '500', '600'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// Apply fonts to body to ensure Portals (Dialogs, Dropdowns) capture the variables
		document.body.classList.add(sora.variable, poppins.variable, 'font-sans');

		(window as any).adjustIframeSize = (id: string, newHeight: string) => {
			const i = document.getElementById(id);
			if (!i) return;
			// eslint-disable-next-line radix
			i.style.height = `${parseInt(newHeight)}px`;
		};
	}, []);
	return (
		<ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
			<main>
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}
