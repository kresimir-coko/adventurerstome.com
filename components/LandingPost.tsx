import Link from 'next/link';
import React from 'react';
import styles from '../styles/LandingPosts.module.scss';

function LandingPost({
	body,
	id,
	title,
	photo,
}: {
	body: string;
	id: number;
	title: string;
	photo: string;
}): JSX.Element {
	return (
		<Link href={`/maps/${id}`}>
			<div className={styles.landingPost} id={`post${id}`}>
				<header>
					<h2 className={styles.postHeading}>{title}</h2>
				</header>

				<img alt={title} className={styles.postImage} src={photo} />

				<footer>
					<section>
						<ul className={styles.postCategoriesContainer}>
							<li className={styles.postCategory}>
								<Link href="/map">
									<a>map</a>
								</Link>
							</li>

							<li className={styles.postCategory}>
								<Link href="/map">
									<a>cave</a>
								</Link>
							</li>
						</ul>

						<span className={styles.postDate}>{'27.12.1993.'}</span>
					</section>

					<section>
						<p className={styles.postExcerpt}>{body}</p>
					</section>
				</footer>
			</div>
		</Link>
	);
}

export default LandingPost;
