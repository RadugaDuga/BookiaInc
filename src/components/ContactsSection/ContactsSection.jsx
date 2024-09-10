import {
	DiscordIcon,
	GithubIcon,
	GmailIcon,
	LinkedInIcon,
} from "../../assets/icons";
import { Favicon } from "../../assets/optimized";
import styles from "./ContactsSection.module.css";

export default function ContactsSection() {
	return (
		<section
			className={styles.container}
			id="contacts-section"
			style={{ overflow: "hidden" }}
		>
			<div className={styles.content} data-scroll data-scroll-speed="-5">
				<header className={styles.header}>
					<h1>Contact me using the links below</h1>
				</header>

				<div className={styles.footerInner}>
					<div className={styles.footerColumn}>
						<img
							src={Favicon}
							alt="BookiaInc Logo"
							className={styles.logo}
						/>

						<div>
							<span>Bookia.Inc</span>
							<div>© 2021. All rights reserved.</div>
						</div>
					</div>
					<div className={styles.footerColumn}>
						<h2 className={styles.columnTitle}>Contacts</h2>
						<ul className={styles.contactList}>
							<li>
								<LinkedInIcon />
								<a
									href="https://www.linkedin.com/in/georgi-bukia/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Georgi B.
								</a>
							</li>
							<li>
								<GithubIcon />
								<a
									href="https://github.com/RadugaDuga"
									target="_blank"
									rel="noopener noreferrer"
								>
									RadugaDuga
								</a>
							</li>
							<li>
								<GmailIcon />
								<a
									href="mailto: giorg.ibukia@geolab.edu.ge"
									target="_blank"
									rel="noopener noreferrer"
								>
									giorg.ibukia@geolab.edu.ge
								</a>
							</li>
							<li>
								<DiscordIcon />
								<a
									href="https://discord.gg/XS6Xydpz"
									target="_blank"
									rel="noopener noreferrer"
								>
									Klarence B.
								</a>
							</li>
						</ul>
					</div>
					<div className={styles.footerColumn}>
						<h2 className={styles.columnTitle}>Used Libraries</h2>
						<ul className={styles.libraryList}>
							<li>
								<a
									href="https://greensock.com/gsap/"
									target="_blank"
									rel="noopener noreferrer"
								>
									GSAP 3
								</a>
							</li>
							<li>
								<a
									href="https://swiperjs.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Swiper.js
								</a>
							</li>
							<li>
								<a
									href="https://dixonandmoe.com/rellax/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Rellax.js
								</a>
							</li>
							<li>
								<a
									href="https://jquery.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									jQuery
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
