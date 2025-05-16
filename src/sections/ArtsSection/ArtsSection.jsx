import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
	Thumbs,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./ArtsSection.module.css";
import {
	Cafe,
	Extrasense,
	Foodtruck,
	Safe,
	University,
} from "../../assets/optimized";

import { MaskotArt } from "../../assets/fullsize";

import { useTranslation } from "react-i18next";
import WithFadeIn from "../../components/WithFadeIn";

export default function ArtsSection() {
	const { t } = useTranslation();

	return (
		<section className={styles.container} id="arts-section">
			<Swiper
				className={styles.swiper}
				modules={[
					Thumbs,
					Navigation,
					Pagination,
					Scrollbar,
					A11y,
					Autoplay,
				]}
				loop
				autoplay={{ delay: 10000 }}
				spaceBetween={0}
				slidesPerView={1}
				scrollbar={false}
				pagination={{ clickable: true }}
				onSwiper={() => {}}
			>
				<SwiperSlide>
					<img src={MaskotArt} alt="MaskotArt" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Foodtruck} alt="Foodtruck" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Extrasense} alt="Extrasense" />
				</SwiperSlide>

				<SwiperSlide>
					<img src={Safe} alt="Safe" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Cafe} alt="Cafe" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={University} alt="University" />
				</SwiperSlide>
			</Swiper>

			<div className={styles.text}>
				<h1 className={styles.title}>
					<WithFadeIn>{t("arts.title")}</WithFadeIn>
				</h1>
				<h2 className={styles.subtitle}>
					<WithFadeIn>{t("arts.description")}</WithFadeIn>
				</h2>
			</div>
		</section>
	);
}
