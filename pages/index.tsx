import Hero from '../components/Hero';
import LandingPostList from '../components/LandingPostList';
import Testimonials from '../components/Testimonials';
import Filter from '../components/Filter';
import {useState} from 'react';
import path from 'path';

const fs = require('fs');

export default function Home({
	categories,
	posts,
}: {
	categories: {
		key: string;
		label: string;
		subCategories?: [{key: string; label: string}];
	}[];
	posts: {
		post: {
			category: string;
			date: string;
			excerpt: string;
			subCategory: string;
			thumbnailUrl: string;
			title: string;
		};
		slug: string;
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

				<LandingPostList posts={posts} />
			</div>
		</>
	);
}

export const getStaticProps = async () => {
	const files = fs.readdirSync(path.join('posts'));

	const posts = files.map((filename: string) => {
		const post = JSON.parse(
			fs.readFileSync(path.join('posts', filename), 'utf-8')
		);

		return {
			post,
			slug: filename.split('.')[0],
		};
	});

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
		},
	};
};
