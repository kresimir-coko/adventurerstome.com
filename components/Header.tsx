import React from 'react';
import styles from '../styles/Header.module.scss';
import Image from 'next/image';
import logo from '../public/logo.png';
import Link from 'next/link';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<div className={styles.imageContainer}>
					<Link href="/">
						<Image src={logo} alt="logo" />
					</Link>
				</div>

				<nav className={styles.nav}>
					<ul className={styles.navList}>
						<li className={styles.navItem}>
							<Link href="/">
								<a className={styles.navLink}>Home</a>
							</Link>
						</li>

						<li className={styles.navItem}>
							<Link href="/maps">
								<a className={styles.navLink}>Maps</a>
							</Link>
						</li>

						<li className={styles.navItem}>
							<Link href="/items">
								<a className={styles.navLink}>Items</a>
							</Link>
						</li>

						<li className={styles.navItem}>
							<Link href="/one-page-dungeons">
								<a className={styles.navLink}>
									One Page Dungeons
								</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
