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



var skewSetter = gsap.quickSetter(".section", "skewY", "deg");
var proxy = { skew: 0 };

ScrollTrigger.create({
	onUpdate: (self) => {
		const skew = self.getVelocity() / -2000;
		console.log(skew);
		if(Math.abs(skew) > Math.abs(proxy.skew)){
			proxy.skew = skew;
			gsap.to(proxy, {
				skew:0,
				duration:1, 
				ease: "power3", overwrite:true, onUpdate:()=> {skewSetter(proxy.skew)}
			})
		}
	},
});


gsap.set(".section", {transformOrigin:"center center", force3D:true})





const locoScroll = new LocomotiveScroll({
	el: document.querySelector("body"),
	smooth: true,
	scrollFromAnywhere: true
})


locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".global-wrapper", {
	scrollTop(value) {
	  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
	}, // we don't have to define a scrollLeft because we're only scrolling vertically.
	getBoundingClientRect() {
	  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
	},
	// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
	pinType: document.querySelector(".global-wrapper").style.transform ? "transform" : "fixed"
  });







// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();