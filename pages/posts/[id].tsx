import styles from '../../styles/Post.module.scss';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import Link from 'next/link';

export default function Post({post, posts}) {
	const isFirstPost = post.id === posts[0].id;
	const isLastPost = post.id === posts.length;

	return (
		<div className={`${styles.postContainer} main-container`}>
			<section
				className={`${styles.postMainSection} ${
					isFirstPost && styles.firstPost
				} ${isLastPost && styles.lastPost}`}
			>
				{!isFirstPost && (
					<div className={styles.postNavigation}>
						<Link href={`/posts/${post.id - 1}`}>
							<FaChevronLeft size={42} />
						</Link>
					</div>
				)}

				<div className={styles.post}>
					<h1 className={styles.heading}>{post.title}</h1>

					<img
						src="https://c10.patreonusercontent.com/3/eyJxIjoxMDAsIndlYnAiOjB9/patreon-media/p/post/51259883/8054c1f4358a4883ab00d82a6e5c1e14/1.png?token-time=1641600000&token-hash=o2pch9BB3qooXu_UAr3U6CY9503qMb-ovJKCBRWEcSk%3D"
						alt=""
					/>
				</div>

				{!isLastPost && (
					<div className={styles.postNavigation}>
						<Link href={`/posts/${post.id + 1}`}>
							<FaChevronRight size={42} />
						</Link>
					</div>
				)}
			</section>

			<section className={styles.postMetadata}>
				<div className={styles.postCategories}>
					<span className="chip">{'#map'}</span>
					<span className="chip">{'#ruin'}</span>
				</div>

				<div className={styles.postDownloadButtons}>
					<span>{'Download'}</span>

					<button>{'Black & White'}</button>

					<button>{'Color'}</button>
				</div>

				<div className={styles.postDate}>
					<span>{'Posted on 27th December 2021'}</span>
				</div>
			</section>

			<section className={styles.postContent}>
				<p className={styles.postLore}>
					{`Lore: Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veritatis voluptatibus beatae, similique repudiandae
					perferendis quas magnam et nulla odio atque quis cum
					excepturi minus aperiam nesciunt sapiente at iusto sed.
					
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veritatis voluptatibus beatae, similique repudiandae
					perferendis quas magnam et nulla odio atque quis cum
					excepturi minus aperiam nesciunt sapiente at iusto sed`}
				</p>

				<p className={styles.postNote}>
					{`Resolutions: Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veritatis voluptatibus beatae, similique repudiandae
					perferendis quas magnam et nulla odio atque quis cum
					excepturi minus aperiam nesciunt sapiente at iusto sed.`}
				</p>
			</section>
		</div>
	);
}

export async function getStaticPaths() {
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=12'
	);
	const posts = await res.json();

	const paths = posts.map((post) => ({
		params: {id: post.id.toString()},
	}));

	return {paths, fallback: false};
}

export async function getStaticProps({params}) {
	const postResponse = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
	);

	const post = await postResponse.json();

	const postsResponse = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=12`
	);

	const posts = await postsResponse.json();

	return {props: {post, posts}};
}
