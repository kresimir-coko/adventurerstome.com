import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import styles from '../styles/Testimonials.module.scss';

function Testimonial() {
	return (
		<div className={styles.testimonial}>
			<section className={styles.imageSection}>
				<Image
					src={logo}
					alt="Adventurer's Tome"
					width={100}
					height={100}
				/>
			</section>

			<section className={styles.contentSection}>
				<h3>Testimonial #1</h3>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Enim earum soluta voluptate ipsum obcaecati incidunt.
				</p>
			</section>
		</div>
	);
}

export default Testimonial;
