import React from 'react';
import styles from '../styles/LandingPosts.module.scss';

function LandingPost() {
	return (
		<div className={styles.landingPost}>
			<h3 className={styles.postHeading}>{'Landing Post'}</h3>

			<p className={styles.postExcerpt}>
				{
					'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, tempore ipsam, accusamus maxime, earum incidunt quaerat deleniti sint dolore tenetur provident autem! Molestias tenetur mollitia laboriosam cum in sunt temporibus.'
				}
			</p>
		</div>
	);
}

export default LandingPost;
