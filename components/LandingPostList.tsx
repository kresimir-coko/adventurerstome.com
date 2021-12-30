import React from 'react';
import LandingPost from './LandingPost';
import styles from '../styles/LandingPosts.module.scss';

export default function LandingPostList({
	posts,
	images,
}: {
	posts: {
		body: string;
		id: number;
		title: string;
	}[];
	images: {
		thumbnailUrl: string;
	}[];
}) {
	return (
		<div className={styles.landingPostList}>
			{posts.map((post, index) => (
				<LandingPost
					body={post.body}
					id={post.id}
					photo={images[index].thumbnailUrl}
					key={post.id}
					title={post.title}
				/>
			))}
		</div>
	);
}
