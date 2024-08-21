const container = document.getElementById("container");
const hamburger_icon_div = document.getElementById("hamburger-icon");
const hamburger_icon = document.querySelector("#hamburger-icon i");
const hamburger_list = document.getElementById("hamburger-list");
const hamburger_list_items = document.querySelectorAll("#hamburger-list a li");
const section_div = document.querySelectorAll(".section");
const clipImage = document.querySelector(".profile-image");
const about_section = document.getElementById("about-section");
let flag = true;

const animateOnScroll = function (animation, element, speed = 100, offset = 0) {
  let scrollPercentage = window.scrollY - element.offsetTop;
  animation.seek(((scrollPercentage + offset) / speed) * animation.duration);
};

hamburger_icon_div.addEventListener("click", () => {
  container.classList.add("blur-lg");
  if (flag) {
    anime({
      targets: hamburger_list,
      height: {
        value: (el) => el.scrollHeight,
        duration: 400,
        easing: "easeInOutSine",
      },
      translateX: 0,
      duration: 1000,
    });
    anime({
      targets: hamburger_icon,
      rotate: "90",
    });
  } else {
    container.classList.remove("blur-lg");
    anime({
      targets: hamburger_list,
      height: {
        value: "0", // 28 - 20 = '8px'
        duration: 400,
        easing: "easeInOutSine",
      },
      translateX: "120%",
      duration: 1000,
    });
    anime({
      targets: hamburger_icon,
      rotate: "0",
    });
  }
  flag = !flag;
});

hamburger_list_items[0].style.backgroundColor = "red";
let vh = Math.floor(window.innerHeight);

//On scroll event
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

  animateOnScroll(aboutSectionAnimation, about_section, 200, 400);
  animateOnScroll(ballsAnimation, about_section, 200, 400);

  console.log(
    window.scrollY -
      document.querySelector(".balls").getBoundingClientRect().top
  );

  if (
    window.scrollY -
      document.querySelector(".balls").getBoundingClientRect().top ==
    window.scrollY
  ) {
    anime({
      targets: ".balls",
      translateY: -10,
      delay: function (el, i) {
        return i * 100;
      },
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
    });
  }
};

const navBarOptionSelection = function (index) {
  for (let i = 0; i < hamburger_list_items.length; i++) {
    if (i == index) {
      hamburger_list_items[index].style.backgroundColor = "red";
      continue;
    }
    hamburger_list_items[i].style.backgroundColor = "";
  }
};

anime({
  targets: hamburger_list,
  height: {
    value: "0",
    duration: 1000,
    easing: "easeInOutSine",
  },
  translateX: "120%",
});

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

//  solar animation
anime({
  targets: ".planets",
  rotate: 360,
  duration: 12000,
  easing: "linear",
  loop: true,
});

anime({
  targets: ".stars i",
  // rotate: 360,
  // duration: 12000,
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

// about section
//About section
const aboutSectionAnimation = anime({
  targets: [".anim-on-scroll"],
  translateY: -156,
  opacity: [0, 1],
  easing: "linear",
  autoplay: false,
});

const ballsAnimation = anime({
  targets: [".balls"],
  opacity: [0, 0.8],
  easing: "linear",
  autoplay: false,
  direction: "alternate",
});
