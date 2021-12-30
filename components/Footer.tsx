import React from 'react';
import styles from '../styles/Footer.module.scss';
import {FaArtstation, FaInstagram, FaPatreon, FaTwitter} from 'react-icons/fa';

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContainer}>
				<ul className={styles.footerLinkList}>
					<li>
						<a
							className={styles.footerNavLink}
							href="https://www.artstation.com/adventurerstome"
							rel="noreferrer"
							target="_blank"
						>
							<FaArtstation />
						</a>
					</li>
					<li>
						<a
							className={styles.footerNavLink}
							href="https://www.instagram.com/adventurerstome"
							rel="noreferrer"
							target="_blank"
						>
							<FaInstagram />
						</a>
					</li>
					<li>
						<a
							className={styles.footerNavLink}
							href="https://www.patreon.com/adventurerstome"
							rel="noreferrer"
							target="_blank"
						>
							<FaPatreon />
						</a>
					</li>
					<li>
						<a
							className={styles.footerNavLink}
							href="https://www.twitter.com/adventurerstome"
							rel="noreferrer"
							target="_blank"
						>
							<FaTwitter />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
