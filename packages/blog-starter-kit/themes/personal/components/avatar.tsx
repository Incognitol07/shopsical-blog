import { resizeImage } from '@starter-kit/utils/image';
import { DEFAULT_AVATAR } from '../utils/const';
import { Avatar as UiAvatar, AvatarImage, AvatarFallback } from './ui/avatar';

type Props = {
	username: string;
	name: string;
	picture: string;
	size: number;
};

export const Avatar = ({ username, name, picture, size }: Props) => {
	return (
		<div className="flex items-center gap-2">
			<a href={`https://hashnode.com/@${username}`} target="_blank" rel="noopener noreferrer">
				<UiAvatar className={size ? `w-${size} h-${size}` : 'h-8 w-8'}>
					<AvatarImage
						src={resizeImage(picture, { w: 160, h: 160, c: 'face' }, DEFAULT_AVATAR)}
						alt={name}
					/>
					<AvatarFallback>{name.charAt(0)}</AvatarFallback>
				</UiAvatar>
			</a>
			<div className="text-base font-bold text-slate-600 dark:text-neutral-300">
				<a href={`https://hashnode.com/@${username}`} target="_blank" rel="noopener noreferrer">
					{name}
				</a>
			</div>
		</div>
	);
};
