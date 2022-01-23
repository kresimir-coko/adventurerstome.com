import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../styles/Maps.module.scss';
import path from 'path';
import Filter from '../components/Filter';
import type { Map } from '../types';
import { CLIENT_RENEG_WINDOW } from 'tls';

const fs = require('fs');

export default function maps({
	maps,
	categories
}: {
	maps: Map[];
	categories: string[]
}) {
	const [currentMap, setCurrentMap] = useState(maps[0]);

	return (
		<div className={`main-container ${styles.mapsViewContainer}`}>
			<section className={styles.smallView}>
				<ul>
					{maps.map(
						(map: Map) => (
							<li
								key={map.title}
								onClick={() => setCurrentMap(map)}
							>
								<h3>{map.title}</h3>

								<div className={styles.smallImageContainer}>
									<Image
										alt={map.title}
										height={100}
										layout="responsive"
										src={map.coverImg}
										width={100}
									/>
								</div>
							</li>
						)
					)}
				</ul>
			</section>

			<section className={styles.bigView}>
				<div className={styles.interactive}>
					{/*TODO: change title to slug */}
					<Link href={`/maps/${currentMap.title}`} passHref>
						<button className={styles.viewButton}>
							{'View Post'}
						</button>
					</Link>

					<div className="mapDownloadButtons">
						<span>{'Download'}</span>

						<a href="http://localhost:3000/public/bw/">
							{'Black & White'}
						</a>

						<a href="http://localhost:3000/public/color/">
							{'Color'}
						</a>
					</div>
				</div>

				<div className={styles.bigImageContainer}>
					<Image
						alt={currentMap.title}
						layout="fill"
						objectFit='contain'
						priority
						src={currentMap.coverImg}
					/>
				</div>
			</section>
		</div>
	);
}

export async function getStaticProps() {
	const files = fs.readdirSync(path.join('posts'));

	const posts = files.map((filename: string) => {
		const post = JSON.parse(
			fs.readFileSync(path.join('posts', filename), 'utf-8')
		);

		return post;
	});

	const maps = posts.filter((post: Map) => post.category === 'map');

	const mapCategories: string[] = maps.map((map: Map) => map.subCategory);

	const categories: string[] = mapCategories.filter(
		(category: string, index: number) => mapCategories.indexOf(category) === index);

	return {
		props: {
			maps,
			categories
		},
	};
}
