import Link from 'next/link';
import { User } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Author = Pick<User, 'name'>;

type Props = {
	title: string;
	date: string;
	author: Author;
	slug: string;
	commentCount: number;
};

export const MinimalPostPreview = ({ title, date, slug, commentCount }: Props) => {
	const postURL = `/${slug}`;

	return (
		<section className="group relative flex flex-col items-start gap-2 rounded-2xl border border-white/5 bg-card-dark p-6 transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 hover:shadow-glow hover:bg-white/5">
			<h2 className="text-xl font-bold font-heading leading-tight tracking-tight text-white transition-colors group-hover:text-primary">
				<Link href={postURL}>{title}</Link>
			</h2>
			<p className="flex flex-row items-center gap-2 text-sm text-neutral-400">
				<Link href={postURL}>
					<DateFormatter dateString={date} />
				</Link>
				{commentCount > 0 && (
					<>
						<span>&middot;</span>
						<Link href={postURL}>
							{commentCount} comments
						</Link>
					</>
				)}
			</p>
		</section>
	);
};
