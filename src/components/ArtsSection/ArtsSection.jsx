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
	MaskotArt,
	Safe,
	University,
} from "../../assets/optimized";

export default function ArtsSection() {
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
				autoplay
				spaceBetween={0}
				slidesPerView={1}
				scrollbar={false}
				pagination={{ clickable: true }}
				onSwiper={() => {}}
			>
				<SwiperSlide>
					<img src={Foodtruck} alt="Foodtruck" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Extrasense} alt="Extrasense" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={MaskotArt} alt="MaskotArt" />
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
			<div className={styles.content}>
				<div className={styles.text}>
					<h1 className={styles.title}>
						Creating 3D Scenes is My Passion
					</h1>
					<p className={styles.subtitle}>
						I began exploring Blender and was captivated by its
						intuitive interface and ease of use. That is how
						modeling became my favorite hobby.
					</p>
				</div>
			</div>
		</section>
	);
}
