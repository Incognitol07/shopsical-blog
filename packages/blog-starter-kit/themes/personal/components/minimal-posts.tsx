import { motion, Variants } from 'framer-motion';
import { PostFragment } from '../generated/graphql';
import { MinimalPostPreview } from './minimal-post-preview';

type Props = {
	posts: PostFragment[];
	context: 'home' | 'series' | 'tag';
};

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 100,
			damping: 10,
		},
	},
};

export const MinimalPosts = ({ posts }: Props) => {
	return (
		<motion.section
			className="flex w-full flex-col items-stretch gap-10 lg:max-w-lg"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{posts.map((post) => (
				<motion.div key={post.id} variants={itemVariants}>
					<MinimalPostPreview
						title={post.title}
						date={post.publishedAt}
						author={{
							name: post.author.name,
						}}
						slug={post.slug}
						commentCount={post.comments?.totalDocuments}
					/>
				</motion.div>
			))}
		</motion.section>
	);
};
