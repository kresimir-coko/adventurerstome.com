import Link from 'next/link';
import Image from 'next/image';
import React, {useState} from 'react';
import styles from '../styles/Maps.module.scss';
import path from 'path';

const fs = require('fs');

export default function maps({
	maps,
}: {
	maps: {
		category: string;
		coverImg: string;
		date: string;
		downloadBlackAndWhiteUrl: string;
		downloadColorUrl: string;
		excerpt: string;
		lore: string;
		note: string;
		subCategory: string;
		thumbnailUrl: string;
		title: string;
	}[];
}) {
	const [currentMap, setCurrentMap] = useState(maps[0]);

	return (
		<div className={`main-container ${styles.mapsViewContainer}`}>
			<section className={styles.smallView}>
				<ul>
					{maps.map(
						(map: {
							category: string;
							coverImg: string;
							date: string;
							downloadBlackAndWhiteUrl: string;
							downloadColorUrl: string;
							excerpt: string;
							lore: string;
							note: string;
							subCategory: string;
							thumbnailUrl: string;
							title: string;
						}) => (
							<li
								key={map.title}
								onClick={() => setCurrentMap(map)}
							>
								<h4>{map.title}</h4>

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
					<Link href={`/maps/${currentMap.title}`}>
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
						height={100}
						layout="responsive"
						src={currentMap.coverImg}
						width={100}
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

	const maps = posts.filter((post: any) => post.category === 'map');

	return {
		props: {
			maps,
		},
	};
}
