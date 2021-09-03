gsap.registerPlugin(ScrollTrigger);

gsap.to("#hoursCount", {
	scrollTrigger: {
		trigger: "#hoursCount",
		toggleActions: "restart pause resume none",
		markers: true,
	},
	innerText: 1500,
	duration: 1.5,
	snap: {
		innerText: 10,
	},
});


const section_2 = document.getElementById("section2");
const learnMoreBtn = document.getElementById("learnMore");
learnMoreBtn.addEventListener("click", () => {
	section_2.scrollIntoView({ behavior: "smooth" });
});
learnMoreBtn.addEventListener("mouseover", () => {
	gsap.to(".cursor", {
		scale: 0.5,
		borderRadius:0
	});
});
learnMoreBtn.addEventListener("mouseleave", () => {
	gsap.to(".cursor", {
		scale: 1,
		borderRadius: "50%"
	});
});


const titles = document.querySelectorAll("h1");
titles.forEach(function (title) {
	title.addEventListener("mouseover", () => {
		gsap.to(".cursor", {
			width: 70,
			height: 70,
		});
	});
	title.addEventListener("mouseleave", () => {
		gsap.to(".cursor", {
			width: 20,
			height: 20
		});
	});
});


window.addEventListener("mousemove", (e) => {
	const mouseXpos = e.clientX;
	const mouseYpos = e.clientY;

	gsap.set(".cursor", {
		x: mouseXpos,
		y: mouseYpos,
	});

	gsap.to(".shape", {
		x: mouseXpos,
		y: mouseYpos,
		stagger: -0.1,
	});
});


const section_3 = document.getElementById("section_3")
section_3.addEventListener("mouseover", ()=>{
	gsap.to(".cursor", {
		width:0,
		height:0
	})
})
section_3.addEventListener("mouseleave", ()=>{
	gsap.to(".cursor", {
		width:20,
		height:20
	})
})












