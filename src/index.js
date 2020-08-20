console.log("app started");
const dom = document.querySelector.bind(document);

import "./style.css";

import Icon from "./images/icon.png";

import { loadMenu } from "./menu";

import { loadContent } from "./content";

window.addEventListener("load", (event) => {
  loadContent();
  dom("#menu-button").addEventListener("click", (event) => {
    loadMenu();
    dom("#spacer").scrollIntoView({
      behavior: "smooth",
    });
  });
  dom("#icon").src = Icon;
});
