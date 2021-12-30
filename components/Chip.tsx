import React, {MouseEventHandler} from 'react';
import styles from '../styles/Chip.module.scss';

export default function Chip({
	category,
	onClick,
	selected,
	isSubCategory,
}: {
	category: {
		key: string;
		label: string;
		subCategories?: [{key: string; label: string}];
	};
	onClick: MouseEventHandler<HTMLSpanElement>;
	selected: boolean;
	isSubCategory: boolean;
}): JSX.Element {
	return (
		<span
			className={`chip ${selected ? styles.selected : ''} ${
				isSubCategory ? styles.subCategoryChip : ''
			}`}
			onClick={onClick}
		>
			{category.label}
		</span>
	);
}
