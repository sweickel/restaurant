const dom = document.querySelector.bind(document);
let shown = "";

import { tabOne } from "./specials";

import { tabTwo } from "./omelettes";

import { tabThree } from "./sides";

const loadMenu = () => {
  dom("#menu-button").style.display = "none";
  dom("#menu").style.display = "flex";
  dom("#menu-link").href = "#spacer";
  window.scrollTo(dom("#spacer"));
  const titleBar = document.createElement("div");
  const specials = document.createElement("h3");
  const omelettes = document.createElement("h3");
  const sides = document.createElement("h3");
  const table = document.createElement("div");
  specials.innerHTML = "Specials";
  specials.id = "specials";
  omelettes.innerHTML = "Omelettes";
  omelettes.id = "omelettes";
  sides.innerHTML = "Sides";
  sides.id = "sides";
  table.id = "table";

  specials.addEventListener("click", (event) => {
    active(specials);
    clearTable();
    tabOne();
  });

  omelettes.addEventListener("click", (event) => {
    active(omelettes);
    clearTable();
    tabTwo();
  });

  sides.addEventListener("click", (event) => {
    active(sides);
    clearTable();
    tabThree();
  });

  dom("#menu").appendChild(titleBar);
  titleBar.id = "titleBar";
  titleBar.appendChild(specials);
  titleBar.appendChild(omelettes);
  titleBar.appendChild(sides);
  dom("#menu").appendChild(table);

  const clearTable = () => {
    const tableLength = table.children.length;
    for (let i = tableLength - 1; i >= 0; i--) {
      table.removeChild(table.children[i]);
    }
    dom("#menu").appendChild(table);
  };
};

const active = (el) => {
  if (el.classList != "activeTab") {
    if (shown != "") {
      shown.classList.remove("activeTab");
    }
    el.classList.add("activeTab");
    shown = el;
  }
};

//activeTab class

export { loadMenu, active };
