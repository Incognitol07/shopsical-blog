import Link from 'next/link';
import { User } from '../generated/graphql';
import { DateFormatter } from './date-formatter';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';

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
		<Card className="group relative border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:shadow-glow hover:bg-white/10">
			<CardHeader className="p-6">
				<CardTitle className="text-xl font-bold font-heading leading-tight tracking-tight text-white transition-colors group-hover:text-primary">
					<Link href={postURL} className="hover:underline">{title}</Link>
				</CardTitle>
			</CardHeader>
			<CardContent className="p-6 pt-0">
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
			</CardContent>
		</Card>
	);
};
