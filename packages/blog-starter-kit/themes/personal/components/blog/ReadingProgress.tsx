import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ReadingProgressProps {
	target?: React.RefObject<HTMLElement>;
}

export function ReadingProgress({ target }: ReadingProgressProps) {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const updateProgress = () => {
			const element = target?.current || document.documentElement;
			const totalHeight = element.scrollHeight - element.clientHeight;
			const windowScrollTop = target?.current 
				? element.scrollTop 
				: window.pageYOffset || document.documentElement.scrollTop;

			if (totalHeight > 0) {
				setProgress((windowScrollTop / totalHeight) * 100);
			}
		};

		const scrollElement = target?.current || window;
		scrollElement.addEventListener('scroll', updateProgress as any);
		updateProgress();

		return () => {
			scrollElement.removeEventListener('scroll', updateProgress as any);
		};
	}, [target]);

	return (
		<motion.div
			className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
			style={{ scaleX: progress / 100 }}
			initial={{ scaleX: 0 }}
			animate={{ scaleX: progress / 100 }}
			transition={{ duration: 0.1 }}
		/>
	);
}
