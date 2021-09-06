gsap.registerPlugin(ScrollTrigger);



const section_2 = document.getElementById("section2");
const learnMoreBtn = document.getElementById("learnMore");

learnMoreBtn.addEventListener("mouseover", (e) => {
	gsap.set(".cursor", {
		scale: 0,
	});
});
learnMoreBtn.addEventListener("mouseleave", () => {
	gsap.set(".cursor", {
		scale: 1,
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
			height: 20,
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
		stagger: -0.01,
	});
});



const section_3 = document.getElementById("section_3");
section_3.addEventListener("mouseover", () => {
	gsap.set(".cursor", {
		scale: 0,
	});
});
section_3.addEventListener("mouseleave", () => {
	gsap.set(".cursor", {
		scale: 1,
	});
});



$("#container").mouseleave(function (e) {
	TweenMax.to(".btn", 0.3, { scale: 1, x: 0, y: 0 });
});

$("#container").mouseenter(function (e) {
	TweenMax.to(".btn", 0.3, { scale: 1.1 });
});

$("#container").mousemove(function (e) {
	callParallax(e);
});

function callParallax(e) {
	parallaxIt(e, ".btn", 50);
}

function parallaxIt(e, target, movement) {
	const $this = $("#container");
	const relX = e.pageX - $this.offset().left;
	const relY = e.pageY - $this.offset().top;

	TweenMax.to(target, 0.3, {
		x: ((relX - $this.width() / 1.5) / $this.width()) * movement,
		y: ((relY - $this.height() / 1) / $this.height()) * movement,
	});
}



// ? __________________ L O K O M O T I V E   S C R O L L ____________________

const locoScroll = new LocomotiveScroll({
    el: document.querySelector('#global-wrapper'),
    smooth: true,
    lerp: 0.07,
    getDirection: true,
    smoothMobile: false,
    scrollFromAnywhere: false,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy('#global-wrapper', {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
    },
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();




// ? __________________ S K E W   A D D I N G  ____________________

var skewSetter = gsap.quickSetter(".section", "skewY", "deg");
var proxy = { skew: 0 };

ScrollTrigger.create({
	scroller:"#global-wrapper",
	trigger: '.root',
	onUpdate: (self) => {
		const skew = self.getVelocity() / -1000;
		console.log(skew);
		if (Math.abs(skew) > Math.abs(proxy.skew)) {
			proxy.skew = skew;
			gsap.to(proxy, {
				skew: 0,
				duration: 0.5,
				ease: "power3",
				overwrite: true,
				onUpdate: () => {
					skewSetter(proxy.skew);
				},
			});
		}
	}
	
});

gsap.set(".section", { transformOrigin: "center center", force3D: true });




// ? __________________ C U S T O M   A N I M A T I O N S  ____________________

const counterAnimation = gsap.timeline({ defaults: { ease: "none" } }).to("#hoursCount", {
	innerText: 1500,
	duration: 1.5,
	snap: {
		innerText: 10,
	},
});

ScrollTrigger.create({
	trigger: "#section2",
	toggleActions: "restart pause resume none",
	markers: true,
	start: 300,
	end: 0,
	scroller: "#global-wrapper",
	animation: counterAnimation,
});










