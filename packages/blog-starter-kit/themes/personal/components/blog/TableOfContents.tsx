import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

interface TocItem {
	id: string;
	title: string;
	level: number;
	slug: string;
	parentId?: string | null;
}

interface TableOfContentsProps {
	items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
	const [activeId, setActiveId] = useState<string>('');

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
			{ rootMargin: '-80px 0px -80% 0px' }
		);

		items.forEach((item) => {
			const element = document.getElementById(item.slug);
			if (element) {
				observer.observe(element);
			}
		});

		return () => observer.disconnect();
	}, [items]);

	if (items.length === 0) return null;

	const scrollToHeading = (slug: string) => {
		const element = document.getElementById(slug);
		if (element) {
			const offset = 100;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			});
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
			className="sticky top-24 hidden lg:block"
		>
			<div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6">
				<h3 className="text-lg font-semibold text-white mb-4">Table of Contents</h3>
				<ScrollArea className="h-[calc(100vh-300px)]">
					<nav>
						<ul className="space-y-2">
							{items.map((item) => (
								<li
									key={item.id}
									style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
								>
									<button
										onClick={() => scrollToHeading(item.slug)}
										className={`
											text-left w-full text-sm transition-all duration-200 py-1.5 px-3 rounded-lg
											flex items-center gap-2 group
											${
												activeId === item.slug
													? 'text-blue-400 bg-blue-500/10 font-medium'
													: 'text-white/60 hover:text-white/90 hover:bg-white/5'
											}
										`}
									>
										<ChevronRight
											className={`w-3 h-3 transition-transform ${
												activeId === item.slug ? 'rotate-90' : ''
											}`}
										/>
										<span className="line-clamp-2">{item.title}</span>
									</button>
								</li>
							))}
						</ul>
					</nav>
				</ScrollArea>
			</div>
		</motion.div>
	);
}
