import styles from '../../styles/Map.module.scss';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import Link from 'next/link';
import matter from 'gray-matter';
import path from 'path';
import {serialize} from 'next-mdx-remote/serialize';
import {MDXRemote} from 'next-mdx-remote';

const fs = require('fs');

export default function Maps({posts, slug}: {posts: any; slug: string}) {
	const isFirstMap = false; // todo: fix logic
	const isLastMap = false; // todo: fix logic

	return (
		<div className={`${styles.mapContainer} main-container`}>
			<section
				className={`${styles.mapMainSection} ${
					isFirstMap ? styles.firstMap : ''
				} ${isLastMap ? styles.lastMap : ''}`}
			>
				{!isFirstMap && (
					<div className={styles.mapNavigation}>
						<Link href={`/maps`} passHref>
							{/* todo: fix logic */}
							<FaChevronLeft size={42} />
						</Link>
					</div>
				)}

				<div className={styles.map}>
					{/* <h1 className={styles.heading}>{post.title}</h1> */}

					<img
						src="https://c10.patreonusercontent.com/3/eyJxIjoxMDAsIndlYnAiOjB9/patreon-media/p/post/51259883/8054c1f4358a4883ab00d82a6e5c1e14/1.png?token-time=1641600000&token-hash=o2pch9BB3qooXu_UAr3U6CY9503qMb-ovJKCBRWEcSk%3D"
						alt=""
					/>
				</div>

				{!isLastMap && (
					<div className={styles.mapNavigation}>
						<Link href={`/maps`}>
							{/* todo: fix logic */}
							<FaChevronRight size={42} />
						</Link>
					</div>
				)}
			</section>

			<section className={styles.mapMetadata}>
				<div className={styles.mapCategories}>
					<span className="chip">{'#map'}</span>
					<span className="chip">{'#ruin'}</span>
				</div>

				<div className="mapDownloadButtons">
					<span>{'Download'}</span>

					<button>{'Black & White'}</button>

					<button>{'Color'}</button>
				</div>

				<div className={styles.mapDate}>
					<span>{'Posted on 27th December 2021'}</span>
				</div>
			</section>

			<section className={styles.mapContent}>
				<p className={styles.mapLore}>
					{`Lore: Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veritatis voluptatibus beatae, similique repudiandae
					perferendis quas magnam et nulla odio atque quis cum
					excepturi minus aperiam nesciunt sapiente at iusto sed.
					
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veritatis voluptatibus beatae, similique repudiandae
					perferendis quas magnam et nulla odio atque quis cum
					excepturi minus aperiam nesciunt sapiente at iusto sed`}
				</p>

				<p className={styles.mapNote}>
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
	const files = fs.readdirSync(path.join('posts'));

	const paths = files.map((filename: string) => ({
		params: {
			slug: filename.replace('.mdx', ''),
		},
	}));

	return {paths, fallback: false};
}

export const getStaticProps = async ({
	params: {slug},
}: {
	params: {
		slug: string;
	};
}) => {
	const files = fs.readdirSync(path.join('posts'));

	const posts = files.map((filename: string) => {
		const post = JSON.parse(
			fs.readFileSync(path.join('posts', filename), 'utf-8')
		);

		console.log('post: ', post);

		return {
			post,
			slug: filename.split('.')[0],
		};
	});

	return {
		props: {
			posts,
			slug,
		},
	};
};