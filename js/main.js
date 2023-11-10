const underline_header = document.querySelectorAll(".animated")

// console.log(underline_header);

underline_header.forEach((e) => {
  console.log(e);
  console.log(e.nextElementSibling);
  e.addEventListener("mouseenter", () => {

    e.nextElementSibling.classList.add('fade');

  })
  e.addEventListener("mouseleave", () => {

    e.nextElementSibling.classList.remove('fade');

  })
})


const coverScrolldown = [
  {transform: "translateY(-100px)"},
  {transform: "translateY(0px)"}
];
const textScrollup = [
  {transform: "translateY(0px)"},
  {transform: "translateY(-20px)"}
];

const coverScrollDuration = {
  duration: 300
};


let done = false;

window.onscroll = function () {
  slidecover()
};

function slidecover() {

  if (document.documentElement.scrollTop > 0 && !done) {
    document.querySelector(".nav-menu").animate(textScrollup, coverScrollDuration);
    document.querySelector(".cover").style.display = "inline";
    document.querySelector(".cover").style.position = "fixed";
    document.querySelector(".cover").animate(coverScrolldown, coverScrollDuration);

    done = true;
  }
}

// setInterval(() => {
//   if (done) {
//     console.log("1");
//     document.querySelector("#cover").addEventListener("animationend", () => {
//       document.querySelector("#cover").style.boxShadow = "none";
//     })
//   }
// }, 1);

