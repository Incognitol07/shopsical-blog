import Header from './shared/Header';
import Footer from './shared/Footer';
import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div className="min-h-screen bg-background text-foreground flex flex-col">
				<Header />
				<main className="flex-grow pt-24 sm:pt-32">{children}</main>
				<Footer />
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
