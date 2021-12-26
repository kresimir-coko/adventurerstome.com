import React from 'react';
import {FaFilter} from 'react-icons/fa';
import styles from '../styles/Filter.module.scss';
import Chip from './Chip';

export default function Filter({
	categories,
	mainCategory,
	subCategory,
	setMainCategory,
	setSubCategory,
}: {
	categories: object[];
	mainCategory: string | undefined;
	subCategory: string | undefined;
	setMainCategory: (arg: string) => void;
	setSubCategory: (arg: string) => void;
}) {
	return (
		<div className={styles.filter}>
			<section className={styles.mainCategories}>
				<FaFilter className={styles.filterIcon} />

				{categories.map((category) => (
					<Chip
						category={category}
						key={category.key}
						selected={mainCategory === category.key}
						isSubCategory={false}
						onClick={() => setMainCategory(category.key)}
					/>
				))}
			</section>

			{mainCategory === 'maps' && (
				<section className={styles.subCategories}>
					{categories[0].subCategories.map((category) => (
						<Chip
							category={category}
							key={category.key}
							selected={subCategory === category.key}
							isSubCategory
							onClick={() => {
								if (subCategory !== category.key) {
									setSubCategory(category.key);
								} else {
									setSubCategory(undefined);
								}
							}}
						/>
					))}
				</section>
			)}
		</div>
	);
}
