import React from 'react';
import styles from '../styles/Hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
	return (
		<div className={styles.hero}>
			<div className={styles.heroContent}>
				<div className="half-section">
					<div className={styles.heroText}>
						<h1 className={styles.title}>{"Adventurer's Tome"}</h1>

						<p className={styles.subtitle}>
							{
								'Your source of old-school style maps, weapons and one-page dungeons.'
							}
						</p>

						<Link href="/">
							<a className={styles.cta}>{'Browse maps!'}</a>
						</Link>
					</div>
				</div>

				<div className="half-section"></div>
			</div>
		</div>
	);
}

export default Hero;
