import Link from 'next/link';
import React from 'react';
import styles from '../styles/Maps.module.scss';

export default function maps({maps}: {maps: any}) {
	return (
		<div className={`main-container ${styles.mapsViewContainer}`}>
			<section className={styles.smallView}>
				<ul>
					{maps.map((map: any) => (
						<li key={map.id}>
							<h4>{'Cathedral of the Silver King'}</h4>

							<img
								src="https://c10.patreonusercontent.com/3/eyJxIjoxMDAsIndlYnAiOjB9/patreon-media/p/post/51259883/8054c1f4358a4883ab00d82a6e5c1e14/1.png?token-time=1641600000&token-hash=o2pch9BB3qooXu_UAr3U6CY9503qMb-ovJKCBRWEcSk%3D"
								alt=""
							/>
						</li>
					))}
				</ul>
			</section>

			<section className={styles.bigView}>
				<div className={styles.interactive}>
					<Link href="/maps">
						<button className={styles.viewButton}>
							{'View Post'}
						</button>
					</Link>

					<div className="mapDownloadButtons">
						<span>{'Download'}</span>

						<button>{'Black & White'}</button>

						<button>{'Color'}</button>
					</div>
				</div>
				<img
					src="https://c10.patreonusercontent.com/3/eyJxIjoxMDAsIndlYnAiOjB9/patreon-media/p/post/51259883/8054c1f4358a4883ab00d82a6e5c1e14/1.png?token-time=1641600000&token-hash=o2pch9BB3qooXu_UAr3U6CY9503qMb-ovJKCBRWEcSk%3D"
					alt=""
				/>
			</section>
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=12'
	);

	const maps = await res.json();

	return {
		props: {
			maps,
		},
	};
}
