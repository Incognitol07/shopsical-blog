import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="border-t border-white/10 pt-10 pb-10 text-center text-sm text-neutral-400">
			&copy; {new Date().getFullYear()} {publication.title}
		</footer>
	);
};
