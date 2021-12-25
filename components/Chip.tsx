import React from 'react';
import styles from '../styles/Chip.module.scss';

export default function Chip({
	label,
	onClick,
}: {
	label: string;
	onClick: () => void;
}): JSX.Element {
	return (
		<span className={styles.chip} onClick={onClick}>
			{label}
		</span>
	);
}
