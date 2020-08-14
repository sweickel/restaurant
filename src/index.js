console.log("app started");

import "./style.css";

import { loadContent } from "./content";

window.addEventListener("load", (event) => {
  loadContent();
});
