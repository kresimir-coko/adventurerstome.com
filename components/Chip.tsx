import React from 'react';
import styles from '../styles/Chip.module.scss';

export default function Chip({
	category,
	filterQuery,
	setFilterQuery,
	selected,
	subCategory,
}: {
	category: Object;
	filterQuery: string[];
	setFilterQuery: (arg: string[]) => void;
	selected: boolean;
	subCategory: boolean;
}): JSX.Element {
	return (
		<span
			className={`${styles.chip} ${selected && styles.selected} ${
				subCategory && styles.subCategoryChip
			}`}
			onClick={() => {
				if (!filterQuery.includes(category.key)) {
					setFilterQuery([category.key]);
				} else {
					console.log(
						'else :',
						filterQuery.filter((query) => query !== category.key)
					);
					setFilterQuery(
						filterQuery.filter((query) => query !== category.key)
					);
				}
			}}
		>
			{category.label}
		</span>
	);
}
