import React from 'react';
import styles from '../styles/Admin.module.scss';

function admin() {
	return (
		<div className={styles.adminPage}>
			<a href="/">{'BACK'}</a>
			<form action="POST">
				<h2>{'Post name'}</h2>
				<input type="text" />

				<h2>{'Post description'}</h2>
				<textarea
					name="description"
					id=""
					cols="30"
					rows="10"
				></textarea>

				<h2>{'Upload images'}</h2>
				<input type="file" name="cover" id="" />
				<input type="file" name="color" id="" />
				<input type="file" name="bw" id="" />
			</form>
		</div>
	);
}

export default admin;