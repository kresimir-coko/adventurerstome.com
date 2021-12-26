import Hero from '../components/Hero';
import LandingPostList from '../components/LandingPostList';
import Testimonials from '../components/Testimonials';
import Filter from '../components/Filter';
import {useState} from 'react';

export default function Home({categories, posts, photos}) {
	const [filterQuery, setFilterQuery] = useState([]);

	return (
		<>
			<Hero />

			<div className="main-container">
				<Testimonials />

				<Filter
					categories={categories}
					filterQuery={filterQuery}
					handleQueryChange={setFilterQuery}
				/>

				<LandingPostList posts={posts} images={photos} />
			</div>
		</>
	);
}

export async function getStaticProps() {
	const resPosts = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=12'
	);

	const posts = await resPosts.json();

	const resPhotos = await fetch(
		'https://jsonplaceholder.typicode.com/albums/1/photos'
	);

	const photos = await resPhotos.json();

	const categories = [
		{
			key: 'maps',
			label: 'Maps',
			subCategories: [
				{
					key: 'cave',
					label: 'Cave',
				},
				{
					key: 'ruin',
					label: 'Ruin',
				},
				{
					key: 'building',
					label: 'Building',
				},
				{
					key: 'monument',
					label: 'Monument',
				},
			],
		},
		{
			key: 'adventures',
			label: 'Adventures',
		},
		{
			key: 'weapons',
			label: 'Weapons',
		},
		{
			key: 'mechanics',
			label: 'Mechanics',
		},
	];

	return {
		props: {
			categories,
			posts,
			photos,
		},
	};
}
