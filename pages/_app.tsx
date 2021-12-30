import '../styles/globals.scss';
import type {AppProps} from 'next/app';
import Layout from '../components/layout';

function MyApp({Component, pageProps}: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;

// todo:
// - keep posts for a combo of all posts
// - add markup for /about
// - fix design of testimonials
