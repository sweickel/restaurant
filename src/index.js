console.log("app started");

import "./style.css";

import "./images/icon.png";

import { loadContent } from "./content";

window.addEventListener("load", (event) => {
  loadContent();
});
