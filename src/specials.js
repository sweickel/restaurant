const tabOne = () => {
  const table = document.querySelector("#table");
  const s1 = document.createElement("div");
  const a1 = document.createElement("div");
  const n1 = document.createElement("span");
  const d1 = document.createElement("p");
  const p1 = document.createElement("p");
  const s2 = document.createElement("div");
  const a2 = document.createElement("div");
  const n2 = document.createElement("span");
  const d2 = document.createElement("p");
  const p2 = document.createElement("p");
  const s3 = document.createElement("div");
  const a3 = document.createElement("div");
  const n3 = document.createElement("span");
  const d3 = document.createElement("p");
  const p3 = document.createElement("p");
  const s4 = document.createElement("div");
  const a4 = document.createElement("div");
  const n4 = document.createElement("span");
  const d4 = document.createElement("p");
  const p4 = document.createElement("p");
  const s5 = document.createElement("div");
  const a5 = document.createElement("div");
  const n5 = document.createElement("span");
  const d5 = document.createElement("p");
  const p5 = document.createElement("p");
  s1.classList.add("special");
  s2.classList.add("special");
  s3.classList.add("special");
  s4.classList.add("special");
  s5.classList.add("special");

  a1.classList.add("name");
  a2.classList.add("name");
  a3.classList.add("name");
  a4.classList.add("name");
  a5.classList.add("name");

  n1.innerHTML = '"Hungry Man"';
  d1.innerHTML = "3 eggs, Bacon, Sausage, Hash Browns, Toast";
  p1.innerHTML = "$7.95";
  n2.innerHTML = '"Kinda Hungry Man"';
  d2.innerHTML = "3 Eggs, Bacon, Hash Browns, Toast";
  p2.innerHTML = "$6.49";
  n3.innerHTML = '"Standard Breakfast"';
  d3.innerHTML = "2 Eggs, Bacon, Hash Browns, Toast";
  p3.innerHTML = "$5.49";
  n4.innerHTML = '"Gergich Way"';
  d4.innerHTML = "2 Eggs, Bacon, Toast";
  p4.innerHTML = "$4.49";
  n5.innerHTML = '"Leslie Special"';
  d5.innerHTML = "2 Gigantic Waffles";
  p5.innerHTML = "$3.99";

  table.appendChild(s1);
  s1.appendChild(a1);
  a1.appendChild(n1);
  a1.appendChild(d1);
  s1.appendChild(p1);
  table.appendChild(s2);
  s2.appendChild(a2);
  a2.appendChild(n2);
  a2.appendChild(d2);
  s2.appendChild(p2);
  table.appendChild(s3);
  s3.appendChild(a3);
  a3.appendChild(n3);
  a3.appendChild(d3);
  s3.appendChild(p3);
  table.appendChild(s4);
  s4.appendChild(a4);
  a4.appendChild(n4);
  a4.appendChild(d4);
  s4.appendChild(p4);
  table.appendChild(s5);
  s5.appendChild(a5);
  a5.appendChild(n5);
  a5.appendChild(d5);
  s5.appendChild(p5);
};

export { tabOne };
