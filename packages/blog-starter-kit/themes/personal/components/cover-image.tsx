import Image from 'next/image';
import Link from 'next/link';

type Props = {
	title: string;
	src: string;
	slug?: string;
	priority?: boolean;
};

export const CoverImage = ({ title, src, slug, priority = false }: Props) => {
	const postURL = `/${slug}`;

	const image = (
		<div className="relative overflow-hidden rounded-2xl pt-[52.5%]">
			<Image
				src={src}
				alt={`Cover Image for ${title}`}
				className="w-full object-cover transition-transform duration-500 hover:scale-105 border border-white/10"
				fill
				unoptimized
				priority={priority}
			/>
		</div>
	);
	return (
		<div className="sm:mx-0">
			{slug ? (
				<Link href={postURL} aria-label={title}>
					{image}
				</Link>
			) : (
				image
			)}
		</div>
	);
};
