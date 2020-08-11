console.log("app started");

import { loadContent } from "./content";

window.addEventListener("load", (event) => {
  loadContent();
});
