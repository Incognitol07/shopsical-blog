import { Button as UiButton } from './ui/button';

type Props = {
	label: string;
	type?: 'primary' | 'outline' | 'outline-dark';
	icon?: React.ReactNode;
	className?: string;
	secondaryIcon?: React.ReactNode;
	href?: string;
	onClick?: () => void;
	as?: string;
	rel?: string;
	target?: string;
};

export const Button = ({
	label,
	type = 'primary',
	icon,
	className,
	secondaryIcon,
	href,
	rel,
	as,
	target,
	onClick,
}: Props) => {
	const mapTypeToVariant = (type: string): "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined => {
		switch (type) {
			case 'primary':
				return 'default';
			case 'outline':
				return 'outline';
			case 'outline-dark':
				return 'ghost'; // Mapping outline-dark to ghost for now, or outline with overriding class
			default:
				return 'default';
		}
	};

	const variant = mapTypeToVariant(type);
	
	// Custom styling to match previous 'outline-dark' if ghost isn't sufficient, 
	// but trying to stick to standard variants where possible.
	// For 'outline-dark', the previous style was transparent with white border.
	// 'outline' is border-input.
	
	const content = (
		<div className="flex flex-row items-center gap-2">
			{icon && <div className="shrink-0">{icon}</div>}
			{label}
			{secondaryIcon && <div className="shrink-0">{secondaryIcon}</div>}
		</div>
	);

	if (as === 'a' || href) {
		return (
			// @ts-ignore
			<UiButton
				variant={variant}
				className={`${className} ${type === 'outline-dark' ? 'border-white/20 text-white hover:bg-white/10' : ''}`}
				asChild
			>
				<a href={href} rel={rel} target={target}>
					{content}
				</a>
			</UiButton>
		);
	}

	return (
		// @ts-ignore
		<UiButton
			variant={variant}
			className={`${className} ${type === 'outline-dark' ? 'border-white/20 text-white hover:bg-white/10' : ''}`}
			onClick={onClick}
		>
			{content}
		</UiButton>
	);
};
