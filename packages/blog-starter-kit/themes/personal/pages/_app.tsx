import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { Poppins, Sora } from 'next/font/google';
import { useEffect } from 'react';
import '../styles/index.css';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['400', '500', '600', '700', '800'] });
const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	weight: ['400', '500', '600'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		(window as any).adjustIframeSize = (id: string, newHeight: string) => {
			const i = document.getElementById(id);
			if (!i) return;
			// eslint-disable-next-line radix
			i.style.height = `${parseInt(newHeight)}px`;
		};
	}, []);
	return (
		<ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
			<main className={`${sora.variable} ${poppins.variable} font-sans`}>
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}
