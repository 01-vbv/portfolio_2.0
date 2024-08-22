const container = document.getElementById("container");
const hamburger_icon_div = document.getElementById("hamburger-icon");
const hamburger_list_items = document.querySelectorAll("#hamburger-list a li");
const section_div = document.querySelectorAll(".section");

let flag = true;

// ########################################## Custom JS #############################################

const navBarOptionSelection = function (index) {
  for (let i = 0; i < hamburger_list_items.length; i++) {
    if (i == index) {
      hamburger_list_items[index].style.backgroundColor = "red";
      continue;
    }
    hamburger_list_items[i].style.backgroundColor = "";
  }
};

// ##############################################  ANIMATION #########################################

// Animation function
const animateOnScroll = function (animation, element, speed = 100, offset = 0) {
  let scrollPercentage = window.scrollY - element.offsetTop;
  animation.seek(((scrollPercentage + offset) / speed) * animation.duration);
};

// Hamburger animation handler

// Initial animation
anime({
  targets: ".hamburger-list-class",
  height: {
    value: "0",
    duration: 1000,
    easing: "easeInOutSine",
  },
  translateX: "120%",
});

hamburger_icon_div.addEventListener("click", () => {
  container.classList.add("blur-lg");
  if (flag) {
    anime({
      targets: ".hamburger-list-class",
      height: {
        value: (el) => el.scrollHeight,
        easing: "easeInOutSine",
      },
      translateX: 0,
      duration: 1200,
    });
    anime({
      targets: "#hamburger-icon i",
      rotate: "90",
    });
  } else {
    container.classList.remove("blur-lg");
    anime({
      targets: ".hamburger-list-class",
      height: {
        value: "0",
        duration: 400,
        easing: "easeInOutSine",
      },
      translateX: "120%",
      duration: 1000,
    });
    anime({
      targets: "#hamburger-icon i",
      rotate: "0",
    });
  }
  flag = !flag;
});

//solar animation

// Planets
anime({
  targets: ".planets",
  rotate: 360,
  duration: 12000,
  easing: "linear",
  loop: true,
});

// Stars
anime({
  targets: ".stars i",
  textShadow: [
    {
      value: ["1px 1px 8px rgb(255,255,255) ,-1px -1px 8px rgb(255,255,255)"],
      delay: 0,
      endDelay: 0,
    },
  ],
  easing: "linear",
  direction: "alternate",
  loop: true,
});

// Earth
anime({
  targets: "#earth",
  rotate: 360,
  easing: "linear",
  duration: 16000,
  loop: true,
});

// Description Animation
let textWrapper1 = document.querySelector(".description .letters-1");
textWrapper1.innerHTML = textWrapper1.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
let textWrapper2 = document.querySelector(".description .letters-2");
textWrapper2.innerHTML = textWrapper2.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
let textWrapper3 = document.querySelector(".description .letters-3");
textWrapper3.innerHTML = textWrapper3.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".description .letters-1  .letter",
    translateY: [100, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    color: "red",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i,
  })
  .add({
    targets: ".description .letters-1 .letter",
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i,
  })
  .add({
    targets: ".description .letters-2 .letter",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    color: "#188cd9",
    delay: (el, i) => 300 + 30 * i,
  })
  .add({
    targets: ".description .letters-2 .letter",
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i,
  })
  .add({
    targets: ".description .letters-3 .letter",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    color: "#11d1d1",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i,
  })
  .add({
    targets: ".description .letters-3 .letter",
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i,
  });

// ## About Section Animation ##

const aboutAnimation = anime({
  targets: "#about-section p, #about-section h1",
  translateY: [250, 10],
  opacity: [0, 1],
  elasticity: 200,
  easing: "easeInOutSine",
  autoplay: false,
});

let ball1Animation;
let ball2Animation;
let ball3Animation;
let ball4Animation;

ball1Animation = anime({
  targets: "#ball-1",
  translateX: [-50, 60],
  translateY: [0, 75],
  opacity: [0, 1],
  easing: "easeInOutSine",
  autoplay: false,
});
ball2Animation = anime({
  targets: "#ball-2",
  translateX: [-50, -160],
  translateY: [0, 75],
  opacity: [0, 1],
  easing: "easeInOutSine",
  autoplay: false,
});
ball3Animation = anime({
  targets: "#ball-3",
  translateX: [-50, -150],
  translateY: [0, 480],
  opacity: [0, 1],
  easing: "easeInOutSine",
  autoplay: false,
});
ball4Animation = anime({
  targets: "#ball-4",
  translateX: [-50, 120],
  translateY: [0, 450],
  opacity: [0, 1],
  easing: "easeInOutSine",
  autoplay: false,
});

// ## Skill Section

// Moonlight
var moonlightAnimation = anime({
  targets: "#moonlight",
  duration: 3000,
  width: "100%",
  height: "100%",
  easing: "easeOutQuad",
  autoplay: false,
});

// ##############################################   EVENTS  ##########################################

//On scroll event
hamburger_list_items[0].style.backgroundColor = "red";
let vh = Math.floor(window.innerHeight);

window.onscroll = function (e) {
  if (section_div[0].getBoundingClientRect().top >= -10) {
    navBarOptionSelection(0);
  } else if (section_div[1].getBoundingClientRect().top >= -10) {
    navBarOptionSelection(1);
  } else if (section_div[2].getBoundingClientRect().top >= -10) {
    navBarOptionSelection(2);
  } else if (section_div[3].getBoundingClientRect().top >= -10) {
    navBarOptionSelection(3);
  } else if (section_div[4].getBoundingClientRect().top >= -10) {
    navBarOptionSelection(4);
  } else if (section_div[5].getBoundingClientRect().top >= -10) {
    navBarOptionSelection(5);
  } else if (section_div[6].getBoundingClientRect().top >= -10) {
    navBarOptionSelection(6);
  }

  //animation on scroll
  animateOnScroll(
    aboutAnimation,
    document.getElementById("about-section"),
    500,
    600
  );

  //balls animation
  if (!window.matchMedia("(min-width: 1024px)").matches) {
    animateOnScroll(
      ball1Animation,
      document.getElementById("ball-1"),
      600,
      600
    );
    animateOnScroll(
      ball2Animation,
      document.getElementById("ball-2"),
      600,
      600
    );
    animateOnScroll(
      ball3Animation,
      document.getElementById("ball-3"),
      600,
      600
    );
    animateOnScroll(
      ball4Animation,
      document.getElementById("ball-4"),
      600,
      600
    );
  }
  // moonlight animation
  animateOnScroll(
    moonlightAnimation,
    document.getElementById("moonlight"),
    600,
    600
  );
};
