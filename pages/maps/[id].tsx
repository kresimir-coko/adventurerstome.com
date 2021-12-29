import styles from '../../styles/Map.module.scss';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import Link from 'next/link';

export default function Maps({map, maps}) {
	const isFirstMap = map.id === maps[0].id;
	const isLastMap = map.id === maps.length;

	console.log('isFirstMap:', isFirstMap);
	console.log('isLastMap: ', isLastMap);

	return (
		<div className={`${styles.mapContainer} main-container`}>
			<section
				className={`${styles.mapMainSection} ${
					isFirstMap ? styles.firstMap : ''
				} ${isLastMap ? styles.lastMap : ''}`}
			>
				{!isFirstMap && (
					<div className={styles.mapNavigation}>
						<Link href={`/maps/${map.id - 1}`}>
							<FaChevronLeft size={42} />
						</Link>
					</div>
				)}

				<div className={styles.map}>
					<h1 className={styles.heading}>{map.title}</h1>

					<img
						src="https://c10.patreonusercontent.com/3/eyJxIjoxMDAsIndlYnAiOjB9/patreon-media/p/post/51259883/8054c1f4358a4883ab00d82a6e5c1e14/1.png?token-time=1641600000&token-hash=o2pch9BB3qooXu_UAr3U6CY9503qMb-ovJKCBRWEcSk%3D"
						alt=""
					/>
				</div>

				{!isLastMap && (
					<div className={styles.mapNavigation}>
						<Link href={`/maps/${map.id + 1}`}>
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
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=12'
	);
	const maps = await res.json();

	const paths = maps.map((map) => ({
		params: {id: map.id.toString()},
	}));

	return {paths, fallback: false};
}

export async function getStaticProps({params}) {
	const mapResponse = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
	);

	const map = await mapResponse.json();

	const mapsResponse = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=12`
	);

	const maps = await mapsResponse.json();

	return {props: {map, maps}};
}
