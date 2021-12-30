import Hero from '../components/Hero';
import LandingPostList from '../components/LandingPostList';
import Testimonials from '../components/Testimonials';
import Filter from '../components/Filter';
import {useState} from 'react';

export default function Home({
	categories,
	posts,
	photos,
}: {
	categories: {
		key: string;
		label: string;
		subCategories?: [{key: string; label: string}];
	}[];
	posts: {
		body: string;
		id: number;
		title: string;
	}[];
	photos: {
		thumbnailUrl: string;
	}[];
}) {
	const [mainCategory, setMainCategory] = useState();
	const [subCategory, setSubCategory] = useState();

	return (
		<>
			<Hero />

			<div className="main-container">
				<Testimonials />

				<Filter
					categories={categories}
					mainCategory={mainCategory}
					setMainCategory={setMainCategory}
					setSubCategory={setSubCategory}
					subCategory={subCategory}
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
