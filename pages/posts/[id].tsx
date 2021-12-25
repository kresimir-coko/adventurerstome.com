import styles from '../../styles/Post.module.scss';

export default function Post({post}) {
	return (
		<div className="main-container">
			<div className={styles.post}>
				<h1 className={styles.heading}>{post.title}</h1>

				<img
					src="https://c10.patreonusercontent.com/3/eyJxIjoxMDAsIndlYnAiOjB9/patreon-media/p/post/51259883/8054c1f4358a4883ab00d82a6e5c1e14/1.png?token-time=1641600000&token-hash=o2pch9BB3qooXu_UAr3U6CY9503qMb-ovJKCBRWEcSk%3D"
					alt=""
				/>

				<p className={styles.body}>{post.body}</p>
			</div>
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
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
	);

	const post = await res.json();

	return {props: {post}};
}
