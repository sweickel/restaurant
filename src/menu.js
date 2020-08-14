const dom = document.querySelector.bind(document);

const loadMenu = () => {
  dom("#menu-button").style.display = "none";
  dom("#menu").style.display = "flex";
  dom("#menu-link").href = "#menu";
  window.scrollTo(dom("#menu"));
  const titleBar = document.createElement("div");
  const specials = document.createElement("h3");
  const omelettes = document.createElement("h3");
  const sides = document.createElement("h3");
  specials.innerHTML = "Specials";
  omelettes.innerHTML = "Omelettes";
  sides.innerHTML = "Sides";

  dom("#menu").appendChild(titleBar);
  titleBar.id = "titleBar";
  titleBar.appendChild(specials);
  titleBar.appendChild(omelettes);
  titleBar.appendChild(sides);
  dom("#menu").appendChild(dom("#table"));
};

export { loadMenu };
