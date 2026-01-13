import { useState } from 'react';
import { Share2, Twitter, Linkedin, Link as LinkIcon, Check, Facebook, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from '../ui/dropdown-menu';
import { WhatsAppIcon, FacebookIcon, XIcon } from '../icons'; // Assuming these exist as per ShareDialog
import { IconBrandTelegram } from '@tabler/icons-react';

interface ShareButtonsProps {
	url: string;
	title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
	const [copied, setCopied] = useState(false);

	const shareOptions = [
		{
			name: 'Twitter / X',
			icon: <XIcon className="w-4 h-4 mr-2" />,
			action: () => window.open(
				`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
				'_blank',
				'width=550,height=420'
			),
		},
		{
			name: 'Facebook',
			icon: <FacebookIcon className="w-4 h-4 mr-2" />,
			action: () => window.open(
				`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
				'_blank',
				'width=550,height=420'
			),
		},
		{
			name: 'LinkedIn',
			icon: <Linkedin className="w-4 h-4 mr-2" />,
			action: () => window.open(
				`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
				'_blank',
				'width=550,height=420'
			),
		},
		{
			name: 'WhatsApp',
			icon: <WhatsAppIcon className="w-4 h-4 mr-2" />,
			action: () => window.open(
				`https://wa.me/?text=${encodeURIComponent(`${title} \n\n ${url}`)}`,
				'_blank'
			),
		},
		{
			name: 'Telegram',
			icon: <IconBrandTelegram className="w-4 h-4 mr-2" />,
			action: () => window.open(
				`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
				'_blank'
			),
		},
		{
			name: 'Email',
			icon: <Mail className="w-4 h-4 mr-2" />,
			action: () => window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${title}\n\n${url}`)}`,
		},
	];

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
					className="bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors font-sans"
				>
					<Share2 className="w-4 h-4 mr-2" />
					Share
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="bg-white border-slate-200 shadow-lg w-56 font-sans">
				{shareOptions.map((option) => (
					<DropdownMenuItem
						key={option.name}
						onClick={option.action}
						className="text-slate-600 hover:bg-slate-50 hover:text-primary cursor-pointer focus:bg-slate-50 focus:text-primary py-2.5 font-sans"
					>
						{option.icon}
						Share on {option.name}
					</DropdownMenuItem>
				))}
				
				<DropdownMenuSeparator className="bg-slate-100" />
				
				<DropdownMenuItem
					onClick={copyLink}
					className="text-slate-600 hover:bg-slate-50 hover:text-primary cursor-pointer focus:bg-slate-50 focus:text-primary py-2.5 font-medium font-sans"
				>
					{copied ? (
						<>
							<Check className="w-4 h-4 mr-2 text-green-500" />
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
