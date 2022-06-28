import React from 'react';
import styles from '../styles/MapDownloadButtons.module.scss';

type Props = {
	bwURL: string;
	colorURL: string;
	layout: 'horizontal' | 'vertical';
};

const MapDownloadButtons = (props: Props) => {
	return (
		<div
			className={`${styles.mapDownloadButtons} ${
				props.layout ? styles.vertical : styles.horizontal
			}`}
		>
			<span>{'Download'}</span>

			<div className={styles.buttonContainer}>
				<button>
					<a href={props.bwURL}>{'Black & White'}</a>
				</button>

				<button>
					<a href={props.colorURL}>{'Color'}</a>
				</button>
			</div>
		</div>
	);
};

export default MapDownloadButtons;
