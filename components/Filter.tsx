import React from 'react';
import {FaFilter} from 'react-icons/fa';
import styles from '../styles/Filter.module.scss';
import Chip from './Chip';

export default function Filter() {
	function handleClick() {
		console.log('clicked');
	}

	return (
		<div className={styles.filter}>
			<section className={styles.mainCategories}>
				<FaFilter className={styles.filterIcon} />

				<Chip label="Maps" onClick={handleClick} />
				<Chip label="Adventures" onClick={handleClick} />
				<Chip label="Weapons" onClick={handleClick} />
				<Chip label="Mechanics" onClick={handleClick} />
			</section>

			<section className={styles.subCategories}>
				<Chip label="Cave" onClick={handleClick} />
				<Chip label="Ruin" onClick={handleClick} />
				<Chip label="Building" onClick={handleClick} />
				<Chip label="Monument" onClick={handleClick} />
			</section>
		</div>
	);
}
