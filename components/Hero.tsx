import React from 'react';
import styles from '../styles/Hero.module.scss';
import Image from 'next/image';
import logo from '../public/logo.png';

function Hero() {
	return (
		<div className={styles.hero}>
			<div className={styles.heroContent}>
				<div className="half-section">
					<Image src={logo} />

					<h1>{"Adventurer's Tome"}</h1>

					<p>
						{
							'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eos dicta qui praesentium voluptatum distinctio impedit, dolorum.'
						}
					</p>

					<a className="hero-cta">{'Browse maps!'}</a>
				</div>

				<div className="half-section">
					<img src="https://dummyimage.com/890x960/fff/aaa" />
				</div>
			</div>
		</div>
	);
}

export default Hero;
