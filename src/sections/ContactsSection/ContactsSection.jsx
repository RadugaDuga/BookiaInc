import { useTranslation } from "react-i18next";
import { DiscordIcon, GmailIcon, LinkedInIcon, Logo } from "../../assets/icons";
import { PixelAvatar } from "../../assets/optimized";
import styles from "./ContactsSection.module.css";

export default function ContactsSection() {
	const { t } = useTranslation();
	const contacts = [
		{
			icon: <LinkedInIcon />,
			link: "https://www.linkedin.com/in/georgi-bukia/",
			text: "Georgi B.",
		},
		{
			icon: <GmailIcon />,
			link: "mailto: giorg.ibukia@geolab.edu.ge",
			text: "@bookiainc",
		},
		{
			icon: <DiscordIcon />,
			link: "https://discord.gg/XS6Xydpz",
			text: "Klarence B.",
		},
	];

	const libraries = [
		{
			name: "GSAP 3",
		},
		{
			name: "React Js",
		},
		{
			name: "Rellax.js",
		},
		{
			name: "Locomotive",
		},
		{
			name: "Swiper",
		},
	];

	return (
		<section className={styles.section} id="contacts-section">
			<div className={styles.wrapper} data-scroll data-scroll-speed="-4">
				<header className={styles.header}>
					<div className={styles.avatarWrapper}>
						<img
							src={PixelAvatar}
							alt="Pixel Avatar"
							className={styles.avatar}
						/>
					</div>
					<h1 className={styles.title}>{t("contacts.title")}</h1>
				</header>

				<footer className={styles.footer}>
					<div className={styles.brand}>
						<div className={styles.brand__wrapper}>
							<Logo />
							<div className={styles.copyright}>
								<span>Bookia.Inc</span>
								<div>© 2025. All rights reserved.</div>
							</div>
						</div>
					</div>

					<div className={styles.contacts}>
						<h2 className={styles.subtitle}>
							{t("contacts.contacts")}
						</h2>
						<ul className={styles.list}>
							{contacts.map((contact, index) => (
								<li key={index}>
									{contact.icon}
									<a
										href={contact.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										{contact.text}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className={styles.libraries}>
						<h2 className={styles.subtitle}>
							{t("contacts.usedLibraries")}
						</h2>
						<ul className={styles.list}>
							{libraries.map((library, index) => (
								<li key={index}>
									<p>{library.name}</p>
								</li>
							))}
						</ul>
					</div>
				</footer>
			</div>
		</section>
	);
}
