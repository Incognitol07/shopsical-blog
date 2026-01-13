import { addPublicationJsonLd } from '@starter-kit/utils/seo/addPublicationJsonLd';
import request from 'graphql-request';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SEO_CONFIG } from '../lib/seo-config';
import { useEffect, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { Container } from '../components/container';
import { AppProvider } from '../components/contexts/appContext';
import { Layout } from '../components/layout';
import { MagazineCard } from '../components/ui/MagazineCard';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/button';
import { Loader2 } from 'lucide-react';
import {
	MorePostsByPublicationDocument,
	MorePostsByPublicationQuery,
	MorePostsByPublicationQueryVariables,
	PageInfoFragment,
	PostFragment,
	PostsByPublicationDocument,
	PostsByPublicationQuery,
	PostsByPublicationQueryVariables,
	PublicationFragment,
} from '../generated/graphql';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

type Props = {
	publication: PublicationFragment;
	initialPosts: PostFragment[];
	initialPageInfo: PageInfoFragment;
};

export default function Index({ publication, initialPosts, initialPageInfo }: Props) {
	const [posts, setPosts] = useState<PostFragment[]>(initialPosts);
	const [pageInfo, setPageInfo] = useState<Props['initialPageInfo']>(initialPageInfo);
	const [loadedMore, setLoadedMore] = useState(false);
	const [loading, setLoading] = useState(false);

	const loadMore = async () => {
		setLoading(true);
		const data = await request<MorePostsByPublicationQuery, MorePostsByPublicationQueryVariables>(
			GQL_ENDPOINT,
			MorePostsByPublicationDocument,
			{
				first: 20,
				host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
				after: pageInfo.endCursor,
			},
		);
		setLoading(false);
		if (!data.publication) {
			return;
		}
		const newPosts = data.publication.posts.edges.map((edge) => edge.node);
		setPosts([...posts, ...newPosts]);
		setPageInfo(data.publication.posts.pageInfo);
		setLoadedMore(true);
	};

	return (
		<AppProvider publication={publication}>
			<Layout>
				<Head>
					<title>{SEO_CONFIG.site.title} | Social Commerce Insights & Updates</title>
					<meta name="description" content={SEO_CONFIG.site.description} />
					<link rel="canonical" href={SEO_CONFIG.site.url} />
					<meta property="og:type" content={SEO_CONFIG.openGraph.type} />
					<meta property="og:url" content={SEO_CONFIG.site.url} />
					<meta property="og:site_name" content={SEO_CONFIG.openGraph.siteName} />
					<meta property="og:image" content={publication.ogMetaData?.image || `${SEO_CONFIG.site.baseUrl}${SEO_CONFIG.assets.ogImageDefault}`} />
					<meta name="twitter:card" content={SEO_CONFIG.twitter.card} />
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(addPublicationJsonLd(publication, SEO_CONFIG)),
						}}
					/>
				</Head>

				<Container className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
					<div className="py-10">
						<SectionHeader 
							title="The Shopsical blog" 
							description="Latest updates, stories, and guides from the Shopsical team." 
						/>
						
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
							{posts.map((post, index) => (
								<MagazineCard key={post.id} post={post} variant="standard" />
							))}
						</div>

						{/* Load More */}
						<div className="mt-16 flex justify-center">
							{!loadedMore && pageInfo.hasNextPage && pageInfo.endCursor && (
								<Button 
									onClick={loadMore} 
									disabled={loading}
									size="lg"
									className="px-8 py-6 rounded-full text-base font-semibold"
								>
									{loading ? (
										<>
											<Loader2 className="mr-2 h-4 w-4 animate-spin" />
											Loading...
										</>
									) : (
										'Load More Stories'
									)}
								</Button>
							)}
							{loadedMore && pageInfo.hasNextPage && pageInfo.endCursor && (
								<Waypoint onEnter={loadMore} bottomOffset={'10%'} />
							)}
						</div>
					</div>
				</Container>
			</Layout>
		</AppProvider>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const data = await request<PostsByPublicationQuery, PostsByPublicationQueryVariables>(
		GQL_ENDPOINT,
		PostsByPublicationDocument,
		{
			first: 20,
			host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
		},
	);

	const publication = data.publication;
	if (!publication) {
		return {
			notFound: true,
		};
	}
	const initialPosts = (publication.posts.edges ?? []).map((edge) => edge.node);

	return {
		props: {
			publication,
			initialPosts,
			initialPageInfo: publication.posts.pageInfo,
		},
		revalidate: 1,
	};
};
