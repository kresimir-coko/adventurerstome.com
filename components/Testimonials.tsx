import React from 'react';
import styles from '../styles/Testimonials.module.scss';
import Testimonial from './Testimonial';

function Testimonials() {
	return (
		<div className={styles.testimonials}>
			<Testimonial />

			<Testimonial />

			<Testimonial />
		</div>
	);
}

export default Testimonials;
