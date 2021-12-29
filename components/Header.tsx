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
						<a>
							<Image src={logo} alt="logo" />
						</a>
					</Link>
				</div>

				<nav className={styles.nav}>
					<ul className={styles.navList}>
						<li className={styles.navItem}>
							<Link href="/maps">
								<a className={styles.navLink}>{'Maps'}</a>
							</Link>
						</li>

						<li className={styles.navItem}>
							<Link href="/posts">
								<a className={styles.navLink}>
									{'Items & One-page dungeons'}
								</a>
							</Link>
						</li>

						<li className={styles.navItem}>
							<Link href="/posts">
								<a className={styles.navLink}>
									{'About the Tome'}
								</a>
							</Link>
						</li>

						<li className={styles.navItem}>
							<a
								className={styles.navLink}
								target={'_blank'}
								href="https://www.patreon.com/adventurerstome"
							>
								Patreon
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
