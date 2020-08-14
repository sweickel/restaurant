const loadContent = () => {
  //loads the whole content of the page
  const domContent = document.getElementById("content");
  const navbar = document.createElement("nav");
  const navLeft = document.createElement("div");
  const icon = document.createElement("img");
  const hours = document.createElement("div");
  const mon = document.createElement("p");
  const sat = document.createElement("p");
  const navName = document.createElement("p");
  const navRight = document.createElement("div");
  const home = document.createElement("a");
  const menuLink = document.createElement("a");
  const contactLink = document.createElement("a");
  const hero = document.createElement("div");
  const motto = document.createElement("p");
  const spacer = document.createElement("div");
  const info = document.createElement("p");
  const menu = document.createElement("div");
  const table = document.createElement("div");
  const contact = document.createElement("div");
  const conHead = document.createElement("p");

  navbar.id = "nav";
  navLeft.id = "nav-left";
  icon.id = "icon";
  icon.src = "./739d82a52e32385502f867d291e12ec2.png";
  icon.alt = "restaurant logo";
  hours.id = "hours";
  mon.innerHTML = "Mon-Fri : 11am-8pm";
  sat.innerHTML = "Sat-Sun : 11am-7pm";
  navName.id = "nav-name";
  navName.innerHTML = "Good Food Diner";
  navRight.id = "nav-links";
  home.href = "#body";
  home.innerHTML = "Home";
  menuLink.href = "#menu";
  menuLink.innerHTML = "Menu";
  contactLink.href = "#contact";
  contactLink.innerHTML = "Contact";
  hero.id = "hero";
  motto.innerHTML = `"Eat here, or don't. We are not beggars."`;
  spacer.id = "spacer";
  info.innerHTML = `We've been here since we've been here, and we'll be here until we are
  not. We serve exclusively breakfast food.`;
  menu.id = "menu";
  table.id = "table";
  contact.id = "contact";
  conHead.innerHTML = "Contact";

  domContent.appendChild(navbar);
  navbar.appendChild(navLeft);
  navLeft.appendChild(icon);
  navLeft.appendChild(hours);
  hours.appendChild(mon);
  hours.appendChild(sat);
  hours.appendChild(navName);
  navbar.appendChild(navRight);
  navRight.appendChild(home);
  navRight.appendChild(menuLink);
  navRight.appendChild(contactLink);
  domContent.appendChild(hero);
  hero.appendChild(motto);
  domContent.appendChild(spacer);
  spacer.appendChild(info);
  domContent.appendChild(menu);
  menu.appendChild(table);
  domContent.appendChild(contact);
  contact.appendChild(conHead);

  console.log("hi");
};

export { loadContent };
