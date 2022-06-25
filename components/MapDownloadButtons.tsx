import React from 'react';
import styles from '../styles/MapDownloadButtons.module.scss';

type Props = {
	bwURL: string;
	colorURL: string;
	layout: 'horizontal' | 'vertical';
};

const MapDownloadButtons = (props: Props) => {
	return (
		<div className={`${styles.mapDownloadButtons} ${props.layout}`}>
			<span>{'Download'}</span>

			<button>
				<a href={props.bwURL}>{'Black & White'}</a>
			</button>

			<button>
				<a href={props.colorURL}>{'Color'}</a>
			</button>
		</div>
	);
};

export default MapDownloadButtons;
