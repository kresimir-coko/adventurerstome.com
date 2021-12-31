import React from 'react';
import LandingPost from './LandingPost';
import styles from '../styles/LandingPosts.module.scss';

export default function LandingPostList({
	posts,
}: {
	posts: {
		post: {
			category: string;
			date: string;
			excerpt: string;
			subCategory: string;
			thumbnailUrl: string;
			title: string;
		};
		slug: string;
	}[];
}) {
	return (
		<div className={styles.landingPostList}>
			{posts.map((post) => (
				<LandingPost
					post={post.post}
					key={post.slug}
					slug={post.slug}
				/>
			))}
		</div>
	);
}
