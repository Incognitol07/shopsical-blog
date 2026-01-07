import { useState } from 'react';
import { Share2, Twitter, Linkedin, Link as LinkIcon, Check } from 'lucide-react';
import { Button } from '../ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface ShareButtonsProps {
	url: string;
	title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
	const [copied, setCopied] = useState(false);

	const shareOnTwitter = () => {
		window.open(
			`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
			'_blank',
			'width=550,height=420'
		);
	};

	const shareOnLinkedIn = () => {
		window.open(
			`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
			'_blank',
			'width=550,height=420'
		);
	};

	const copyLink = async () => {
		try {
			await navigator.clipboard.writeText(url);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="sm"
					className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"
				>
					<Share2 className="w-4 h-4 mr-2" />
					Share
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="bg-black/90 backdrop-blur-md border-white/10">
				<DropdownMenuItem
					onClick={shareOnTwitter}
					className="text-white hover:bg-white/10 cursor-pointer"
				>
					<Twitter className="w-4 h-4 mr-2" />
					Share on Twitter
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={shareOnLinkedIn}
					className="text-white hover:bg-white/10 cursor-pointer"
				>
					<Linkedin className="w-4 h-4 mr-2" />
					Share on LinkedIn
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={copyLink}
					className="text-white hover:bg-white/10 cursor-pointer"
				>
					{copied ? (
						<>
							<Check className="w-4 h-4 mr-2 text-green-400" />
							Link copied!
						</>
					) : (
						<>
							<LinkIcon className="w-4 h-4 mr-2" />
							Copy link
						</>
					)}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
