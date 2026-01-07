export const addPublicationJsonLd = (publication: any, seoConfig?: any) => {
	// Use provided config or fallback to publication data
	const config = seoConfig || {
		site: {
			url: publication.url,
			baseUrl: 'https://shopsical.com',
			name: publication.title,
			description: publication.descriptionSEO,
		},
		organization: {
			name: publication.title,
			legalName: publication.title,
			email: '',
			supportUrl: '',
		},
		social: {},
		assets: {
			logo: publication.preferences?.logo,
		},
	};

	// Organization Schema
	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': `${config.site.baseUrl}/#organization`,
		name: config.organization.name,
		legalName: config.organization.legalName,
		url: config.site.baseUrl,
		logo: {
			'@type': 'ImageObject',
			url: `${config.site.baseUrl}${config.assets.logo}`,
			width: 600,
			height: 60,
		},
		description: config.organization.description || config.site.description,
		email: config.organization.email,
		sameAs: Object.values(config.social).filter(Boolean),
		contactPoint: config.organization.email ? {
			'@type': 'ContactPoint',
			email: config.organization.email,
			contactType: 'customer support',
			url: config.organization.supportUrl,
		} : undefined,
	};

	// WebSite Schema with Search Action
	const websiteSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${config.site.url}/#website`,
		url: config.site.url,
		name: config.site.name,
		description: publication.descriptionSEO || config.site.description,
		publisher: {
			'@id': `${config.site.baseUrl}/#organization`,
		},
		potentialAction: {
			'@type': 'SearchAction',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: `${config.site.url}?q={search_term_string}`,
			},
			'query-input': 'required name=search_term_string',
		},
		inLanguage: 'en-US',
	};

	// Blog Schema
	const blogSchema = {
		'@context': 'https://schema.org',
		'@type': 'Blog',
		'@id': publication.url || config.site.url,
		mainEntityOfPage: publication.url || config.site.url,
		name: publication.title || config.site.name,
		description: publication.descriptionSEO || config.site.description,
		publisher: {
			'@type': 'Organization',
			'@id': `${config.site.baseUrl}/#organization`,
			name: config.organization.name,
			logo: {
				'@type': 'ImageObject',
				url: `${config.site.baseUrl}${config.assets.logo}`,
			},
		},
		inLanguage: 'en-US',
	};

	return [organizationSchema, websiteSchema, blogSchema];
};
