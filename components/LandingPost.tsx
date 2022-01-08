import Link from 'next/link';
import React from 'react';
import styles from '../styles/LandingPosts.module.scss';

export default function LandingPost({
	post,
	slug,
}: {
	post: {
		category: string;
		date: string;
		excerpt: string;
		subCategory: string;
		thumbnailUrl: string;
		title: string;
	};
	slug: string;
}): JSX.Element {
	return (
		<Link href={`/maps/${slug}`}>
			<div className={styles.landingPost}>
				<header>
					<h2 className={styles.postHeading}>{post.title}</h2>
				</header>

				<img
					alt={post.title}
					className={styles.postImage}
					src={post.thumbnailUrl}
				/>

				<footer>
					<section>
						<ul className={styles.postCategoriesContainer}>
							<li className={styles.postCategory}>
								<Link href={`/${post.category}`}>
									<a>{post.category}</a>
								</Link>
							</li>

							{post.subCategory && (
								<li className={styles.postCategory}>
									<Link href={`/${post.subCategory}`}>
										<a>{post.subCategory}</a>
									</Link>
								</li>
							)}
						</ul>

						<span className={styles.postDate}>{post.date}</span>
					</section>

					<section>
						<p className={styles.postExcerpt}>{post.excerpt}</p>
					</section>
				</footer>
			</div>
		</Link>
	);
}
