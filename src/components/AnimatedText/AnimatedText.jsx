import gsap from "gsap";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import "./AnimatedText.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocomotiveScroll } from "react-locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

function AnimatedText() {
	const text = useRef();
	const { scroll } = useLocomotiveScroll(); // Получаем scroll из контекста
	useEffect(() => {
		if (text?.current && scroll?.el) {
			const myText = new SplitType(text.current);
			console.log(myText);

			ScrollTrigger.create({
				trigger: text.current,
				scroller: scroll.el,
				start: "60% 50%",
				end: "60% 50%",
				scrub: true,
				markers: true,
				animation: gsap.to(".char", {
					y: 0,
					stagger: 0.05,
					duration: 0.1,
				}),
			});
		}
	}, [text.current, scroll]);

	return <div ref={text}>Georgii Bukia</div>;
}
export default AnimatedText;
