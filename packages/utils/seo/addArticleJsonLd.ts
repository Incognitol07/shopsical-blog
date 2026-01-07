export const addArticleJsonLd = (publication: any, post: any, seoConfig?: any) => {
	const tags = (post.tags ?? []).map((tag: any) => tag.name);

	// Use provided config or fallback to publication data
	const config = seoConfig || {
		site: {
			url: publication.url,
			baseUrl: 'https://shopsical.com',
			name: publication.title,
		},
		organization: {
			name: publication.title,
		},
		assets: {
			logo: publication.preferences?.logo,
		},
		openGraph: {
			imageWidth: 1200,
			imageHeight: 630,
		},
	};

	// Article Schema
	const articleSchema = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		'@id': post.url,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': post.url,
		},
		headline: post.title,
		name: post.title,
		description: post.seo?.description || post.brief || post.subtitle,
		image: post.coverImage?.url ? {
			'@type': 'ImageObject',
			url: post.coverImage.url,
			width: config.openGraph.imageWidth,
			height: config.openGraph.imageHeight,
		} : undefined,
		datePublished: post.publishedAt,
		dateModified: post.updatedAt || post.publishedAt,
		author: {
			'@type': 'Person',
			'@id': `https://hashnode.com/@${post.author?.username}`,
			name: post.author?.name,
			url: `https://hashnode.com/@${post.author?.username}`,
			image: post.author?.profilePicture ? {
				'@type': 'ImageObject',
				url: post.author.profilePicture,
			} : undefined,
		},
		publisher: {
			'@type': 'Organization',
			'@id': `${config.site.baseUrl}/#organization`,
			name: config.organization.name,
			logo: {
				'@type': 'ImageObject',
				url: `${config.site.baseUrl}${config.assets.logo}`,
				width: 600,
				height: 60,
			},
		},
		url: post.url,
		keywords: tags.join(', '),
		articleSection: tags.length > 0 ? tags[0] : 'Blog',
		inLanguage: 'en-US',
		isPartOf: {
			'@type': 'Blog',
			'@id': config.site.url,
			name: config.site.name,
		},
		wordCount: post.readTimeInMinutes ? post.readTimeInMinutes * 200 : undefined, // Approximate
		timeRequired: post.readTimeInMinutes ? `PT${post.readTimeInMinutes}M` : undefined,
	};

	// BreadcrumbList Schema
	const breadcrumbSchema = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: config.site.baseUrl,
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'Blog',
				item: config.site.url,
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: post.title,
				item: post.url,
			},
		],
	};

	return [articleSchema, breadcrumbSchema];
};
