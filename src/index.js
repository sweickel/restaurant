console.log("app started");

import "./style.css";

import "./images/icon.png";

import { loadMenu } from "./menu";

import { loadContent } from "./content";

window.addEventListener("load", (event) => {
  loadContent();
  document.querySelector("#menu-button").addEventListener("click", (event) => {
    loadMenu();
  });
});
