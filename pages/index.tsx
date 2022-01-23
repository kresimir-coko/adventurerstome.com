import Hero from '../components/Hero';
import LandingPostList from '../components/LandingPostList';
import Testimonials from '../components/Testimonials';
import Filter from '../components/Filter';
import {useState} from 'react';
import path from 'path';
import type {Map} from '../types';

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
	posts: Map[];
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

				<LandingPostList
					posts={posts}
					mainCategory={mainCategory}
					subCategory={subCategory}
				/>
			</div>
		</>
	);
}

export const getStaticProps = async () => {
	const files = fs.readdirSync(path.join('posts'));

	const posts = files.map(
		(filename: string) => JSON.parse(
			fs.readFileSync(path.join('posts', filename), 'utf-8')
		)
	);

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
				{
					key: 'wilderness',
					label: 'Wilderness',
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
	];

	return {
		props: {
			categories,
			posts,
		},
	};
};
