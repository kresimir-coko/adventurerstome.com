import type {NextPage} from 'next';
import Hero from '../components/Hero';
import LandingPostList from '../components/LandingPostList';
import Testimonials from '../components/Testimonials';
import Filter from '../components/Filter';

const Home: NextPage = ({posts, photos}) => {
	return (
		<>
			<Hero />

			<div className="main-container">
				<Testimonials />

				<Filter />

				<LandingPostList posts={posts} images={photos} />
			</div>
		</>
	);
};

export async function getStaticProps() {
	const resPosts = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=12'
	);

	const posts = await resPosts.json();

	const resPhotos = await fetch(
		'https://jsonplaceholder.typicode.com/albums/1/photos'
	);

	const photos = await resPhotos.json();

	return {
		props: {
			posts,
			photos,
		},
	};
}

export default Home;
