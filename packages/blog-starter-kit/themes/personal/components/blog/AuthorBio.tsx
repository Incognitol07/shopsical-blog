import { motion } from 'framer-motion';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface AuthorBioProps {
	name: string;
	username: string;
	profilePicture?: string | null;
	bio?: string;
}

export function AuthorBio({ name, username, profilePicture, bio }: AuthorBioProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
		>
			<div className="flex items-start gap-6">
				<Avatar className="h-20 w-20 border border-slate-200">
					<AvatarImage src={profilePicture || ''} alt={name} />
					<AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
						{name.charAt(0)}
					</AvatarFallback>
				</Avatar>

				<div className="flex-1">
					<h3 className="text-xl font-bold text-foreground mb-1">Written by {name}</h3>
					<Link 
						href={`https://hashnode.com/@${username}`}
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:text-primary-dark transition-colors text-sm mb-3 inline-block font-medium"
					>
						@{username}
					</Link>
					{bio && (
						<p className="text-muted-foreground leading-relaxed">{bio}</p>
					)}
				</div>
			</div>
		</motion.div>
	);
}
