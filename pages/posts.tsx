import Link from 'next/link';
import React from 'react';

function posts({posts}) {
	return (
		<div>
			{'posts'}
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`/posts/${post.id}`}>
							<a>{post.title}</a>
						</Link>

						<p>{post.body}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default posts;

export async function getStaticProps() {
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=12'
	);

	const posts = await res.json();

	return {
		props: {
			posts,
		},
	};
}
