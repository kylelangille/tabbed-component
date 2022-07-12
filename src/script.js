"use strict";

//Grabbing elements
const tabs = document.querySelectorAll(".tab");
const tabContainer = document.querySelector(".tab-container");
const tabContent = document.querySelectorAll(".content");

//Main functionality
tabContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab");
  console.log(clicked);

  //Guard clause
  if (!clicked) return;

  // Hide content
  tabs.forEach((tab) => tab.classList.remove("tab-active"));
  tabContent.forEach((c) => c.classList.remove("content-active"));

  // Activate tab
  clicked.classList.add("tab-active");

  //Activate content
  document
    .querySelector(`.content-${clicked.dataset.tab}`)
    .classList.add("content-active");
});
