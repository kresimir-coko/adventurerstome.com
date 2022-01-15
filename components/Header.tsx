import React from 'react';
import styles from '../styles/Header.module.scss';
import Image from 'next/image';
import logo from '../public/logo.png';
import Link from 'next/link';
import {useRouter} from 'next/router';

function Header() {
	const router = useRouter();

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
								<a
									className={`${styles.navLink} ${
										router.pathname === '/maps'
											? styles.active
											: ''
									}`}
								>
									{'Maps'}
								</a>
							</Link>
						</li>

						<li className={styles.navItem}>
							<Link href="/items">
								<a
									className={`${styles.navLink} ${
										router.pathname === '/items'
											? styles.active
											: ''
									}`}
								>
									{'Items'}
								</a>
							</Link>
						</li>

						<li className={styles.navItem}>
							<Link href="/dungeons">
								<a
									className={`${styles.navLink} ${
										router.pathname === '/dungeons'
											? styles.active
											: ''
									}`}
								>
									{'Dungeons'}
								</a>
							</Link>
						</li>

						<li className={styles.navItem}>
							<Link href="/about">
								<a
									className={`${styles.navLink} ${
										router.pathname === '/about'
											? styles.active
											: ''
									}`}
								>
									{'About'}
								</a>
							</Link>
						</li>

						<li className={styles.navItem}>
							<a
								className={styles.navLink}
								target={'_blank'}
								href="https://www.patreon.com/adventurerstome"
								rel="noreferrer"
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
