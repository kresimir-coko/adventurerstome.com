import React from 'react';
import {FaFilter} from 'react-icons/fa';
import styles from '../styles/Filter.module.scss';
import Chip from './Chip';

export default function Filter({
	categories,
	filterQuery,
	handleQueryChange,
}: {
	categories: object[];
	filterQuery: string[];
	handleQueryChange: any;
}) {
	return (
		<div className={styles.filter}>
			<section className={styles.mainCategories}>
				<FaFilter className={styles.filterIcon} />

				{categories.map((category) => (
					<Chip
						category={category}
						filterQuery={filterQuery}
						key={category.key}
						setFilterQuery={handleQueryChange}
						selected={filterQuery.includes(category.key)}
						subCategory={false}
					/>
				))}
			</section>

			{filterQuery.includes('maps') && (
				<section className={styles.subCategories}>
					{categories[0].subCategories.map((subCategory) => (
						<Chip
							category={subCategory}
							filterQuery={filterQuery}
							key={subCategory.key}
							selected={filterQuery.includes(subCategory.key)}
							subCategory
							setFilterQuery={() =>
								handleQueryChange([
									...filterQuery,
									subCategory.key,
								])
							}
						/>
					))}
				</section>
			)}
		</div>
	);
}
