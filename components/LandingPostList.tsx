import React from 'react';
import LandingPost from './LandingPost';
import styles from '../styles/LandingPosts.module.scss';

function LandingPostList() {
	return (
		<div className={styles.landingPostList}>
			<LandingPost />
			<LandingPost />
			<LandingPost />
			<LandingPost />
		</div>
	);
}

export default LandingPostList;
