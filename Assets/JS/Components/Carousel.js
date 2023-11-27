let SliderIndex = 1;

ShowSliders(SliderIndex);

// Next Prev Controls
function PlusSliders(n) {
  ShowSliders(SliderIndex += n);
}

function CurrentSliders(n) {
  ShowSliders(SliderIndex = n);
}

function ShowSliders(n) {
  let i;
  let Sliders = document.getElementsByClassName("carousel_slide");
  let dots = document.getElementsByClassName("dot");

  if (n < 1) {
    SliderIndex = Sliders.length;
  }

  if (n > Sliders.length) {
    SliderIndex = 1;
  }

  for (i = 0; i < Sliders.length; i++) {
    Sliders[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  Sliders[SliderIndex - 1].style.display = "block";
  dots[SliderIndex - 1].className += " active";
}

// Auto slide every 3 seconds (3000 milliseconds)
let autoSlideInterval = setInterval(function () {
  PlusSliders(1); // Move to the next slide
}, 7000);

// Clear the autoSlideInterval when the user interacts with the slider
let sliderContainer = document.getElementsByClassName("carousel_container")[0]; // Replace with the actual container class or ID
sliderContainer.addEventListener("mouseover", function () {
  clearInterval(autoSlideInterval);
});

sliderContainer.addEventListener("mouseout", function () {
  autoSlideInterval = setInterval(function () {
    PlusSliders(1); // Move to the next slide
  }, 7000);
});




// Team Slider 
let TeamIndex = 1;

// Fix the typo in the function call
ShowTeam(TeamIndex);

// Next Prev Controls
function PlusTeam(n) {
  ShowTeam((TeamIndex += n));
}
function ShowTeam(n) {
  let i;
  let Teams = document.getElementsByClassName("team_container");

  if (n < 1) {
    TeamIndex = Teams.length;
  }

  if (n > Teams.length) {
    TeamIndex = 1;
  }

  for (i = 0; i < Teams.length; i++) {
    Teams[i].style.display = "none";
  }

  Teams[TeamIndex - 1].style.display = "block";
}

// Auto slide every 7 seconds (7000 milliseconds)
let autoSlideInterval2 = setInterval(function () {
  // Fix the function name
  PlusTeam(1); // Move to the next slide
}, 7000);

// Clear the autoSlideInterval when the user interacts with the slider
let TeamContainer = document.getElementsByClassName("team_slider")[0];

TeamContainer.addEventListener("mouseover", function () {
  clearInterval(autoSlideInterval2);
});

TeamContainer.addEventListener("mouseout", function () {
  // Fix the function name
  autoSlideInterval2 = setInterval(function () {
    PlusTeam(1); // Move to the next slide
  }, 7000);
});
