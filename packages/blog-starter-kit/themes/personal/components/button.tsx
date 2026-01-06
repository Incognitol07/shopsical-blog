type Props = {
	label: string;
	type?: string;
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
	type,
	icon,
	className,
	secondaryIcon,
	href,
	rel,
	as,
	target,
	onClick,
}: Props) => {
	let buttonClassName: string;

	switch (type) {
		case 'outline':
			buttonClassName =
				'text-neutral-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white backdrop-blur-md';
			break;

		case 'primary':
			buttonClassName =
				'text-white bg-primary hover:bg-pink-600 border border-transparent shadow-[0_0_10px_rgba(255,51,204,0.3)] hover:shadow-[0_0_20px_rgba(255,51,204,0.6)]';
			break;

		case 'outline-dark':
			buttonClassName =
				'text-white bg-transparent hover:bg-white/10 hover:text-white border border-white/20';
			break;

		default:
			buttonClassName =
				'text-white bg-primary hover:bg-pink-600 border border-transparent shadow-[0_0_10px_rgba(255,51,204,0.3)] hover:shadow-[0_0_20px_rgba(255,51,204,0.6)]';
	}

	if (as === 'a') {
		return (
			<a
				href={href}
				rel={rel}
				target={target}
				className={`flex flex-row items-center justify-start gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 md:px-6 md:py-3 md:text-base ${buttonClassName} ${
					secondaryIcon ? `md:justify-between` : `md:justify-center`
				}  ${className}`}
			>
				<div className="flex flex-row items-center gap-2">
					{icon && <div className="shrink-0">{icon}</div>}
					{label || null}
				</div>
				{secondaryIcon && <div className="shrink-0">{secondaryIcon}</div>}
			</a>
		);
	}

	return (
		<button
			onClick={onClick}
			className={`flex flex-row items-center justify-start gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 md:px-6 md:py-3 md:text-base ${buttonClassName} ${
				secondaryIcon ? `md:justify-between` : `md:justify-center`
			}  ${className}`}
		>
			<div className="flex flex-row items-center gap-2">
				{icon && <div className="shrink-0">{icon}</div>}
				{label || null}
			</div>
			{secondaryIcon && <div className="shrink-0">{secondaryIcon}</div>}
		</button>
	);
};
