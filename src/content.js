const dom = document.querySelector.bind(document);

const loadContent = () => {
  //loads the whole content of the page
  const domContent = document.getElementById("content");
  const navbar = document.createElement("nav");
  const navLeft = document.createElement("div");
  const iconLink = document.createElement("a");
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
  const menuDiv = document.createElement("div");
  const start = document.createElement("button");
  const menu = document.createElement("div");
  const contact = document.createElement("div");
  const contactPhone = document.createElement("div");
  const phone = document.createElement("img");
  const num = document.createElement("p");
  const infoTwo = document.createElement("div");
  const infoNam = document.createElement("p");
  const address = document.createElement("p");

  navbar.id = "nav";
  navLeft.id = "nav-left";
  iconLink.id = "icon-link";
  iconLink.href = "#body";
  icon.id = "icon";
  icon.alt = "restaurant logo";
  hours.id = "hours";
  mon.innerHTML = "Mon-Fri : 11am-8pm";
  sat.innerHTML = "Sat-Sun : 11am-7pm";
  navName.id = "nav-name";
  navName.innerHTML = "Good Food Diner";
  navRight.id = "nav-links";
  home.href = "#body";
  home.innerHTML = "Home";
  menuDiv.id = "menu-div";
  start.id = "menu-button";
  start.type = "button";
  start.innerHTML = "See Our Menu";
  menuLink.id = "menu-link";
  menuLink.innerHTML = "Menu";
  menuLink.href = "#menu-button";
  contactLink.id = "contact-link";
  contactLink.innerHTML = "Contact";
  contactLink.href = "#contact";
  hero.id = "hero";
  motto.innerHTML = `"Eat here, or don't. We are not beggars."`;
  spacer.id = "spacer";
  info.innerHTML = `We've been here since we've been here, and we'll be here until we are
  not. We serve exclusively breakfast food.`;
  menu.id = "menu";
  menu.style.display = "none";
  contact.id = "contact";
  contactPhone.id = "phoneDiv";
  phone.id = "phone";
  phone.alt = "phone icon";
  num.innerHTML = "(555)555-1525";
  infoTwo.id = "address";
  infoNam.id = "address-name";
  infoNam.innerHTML = "Good Food Diner";
  address.innerHTML = "555 E. Lincoln Rd,<br>Warren, MI 48092";

  domContent.appendChild(navbar);
  navbar.appendChild(navLeft);
  navLeft.appendChild(iconLink);
  iconLink.appendChild(icon);
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
  domContent.appendChild(menuDiv);
  menuDiv.appendChild(start);
  menuDiv.appendChild(menu);
  domContent.appendChild(contact);
  contact.appendChild(contactPhone);
  contactPhone.appendChild(phone);
  contactPhone.appendChild(num);
  contact.appendChild(infoTwo);
  infoTwo.appendChild(infoNam);
  infoTwo.appendChild(address);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export { loadContent };
