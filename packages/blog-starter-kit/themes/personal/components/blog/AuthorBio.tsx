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
			className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8"
		>
			<div className="flex items-start gap-6">
				<Avatar className="h-20 w-20 border-2 border-white/20">
					<AvatarImage src={profilePicture || ''} alt={name} />
					<AvatarFallback className="bg-blue-500/20 text-blue-300 text-2xl">
						{name.charAt(0)}
					</AvatarFallback>
				</Avatar>

				<div className="flex-1">
					<h3 className="text-xl font-semibold text-white mb-1">Written by {name}</h3>
					<Link 
						href={`https://hashnode.com/@${username}`}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-400 hover:text-blue-300 transition-colors text-sm mb-3 inline-block"
					>
						@{username}
					</Link>
					{bio && (
						<p className="text-white/70 leading-relaxed">{bio}</p>
					)}
				</div>
			</div>
		</motion.div>
	);
}
