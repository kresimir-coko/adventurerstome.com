import React from 'react';
import LandingPost from './LandingPost';
import styles from '../styles/LandingPosts.module.scss';

export default function LandingPostList({
	posts,
	mainCategory,
	subCategory,
}: {
	posts: {
		category: string;
		coverImg: string;
		date: string;
		downloadBlackAndWhiteUrl: string;
		downloadColorUrl: string;
		excerpt: string;
		lore: string;
		note: string;
		subCategory: string;
		thumbnailUrl: string;
		title: string;
	}[];
	mainCategory?: string;
	subCategory?: string;
}) {
	mainCategory = mainCategory?.slice(0, -1);

	if (mainCategory) {
		posts = posts.filter((post) => post.category === mainCategory);

		if (subCategory) {
			posts = posts.filter((post) => post.subCategory === subCategory);
		}
	}

	return (
		<div className={styles.landingPostList}>
			{posts.map((post) => (
				<LandingPost post={post} key={post.title} slug={post.title} />
			))}
		</div>
	);
}
