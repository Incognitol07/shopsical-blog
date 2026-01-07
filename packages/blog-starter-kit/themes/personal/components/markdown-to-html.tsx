import { useEmbeds } from '@starter-kit/utils/renderer/hooks/useEmbeds';
import { markdownToHtml } from '@starter-kit/utils/renderer/markdownToHtml';
import { memo } from 'react';

type Props = {
	contentMarkdown: string;
};

const MarkdownContent = ({ contentMarkdown }: Props) => {
	const content = markdownToHtml(contentMarkdown);
	useEmbeds({ enabled: true });

	return (
		<div
			className="hashnode-content-style w-full"
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	);
};

export const MarkdownToHtml = memo(MarkdownContent);
