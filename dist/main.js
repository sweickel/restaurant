!function(e){var n={};function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(i,a,function(n){return e[n]}.bind(null,a));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var a=(r=i,o=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(c," */")),d=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[t].concat(d).concat([a]).join("\n")}var r,o,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(i)for(var d=0;d<this.length;d++){var r=this[d][0];null!=r&&(a[r]=!0)}for(var o=0;o<e.length;o++){var c=[].concat(e[o]);i&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";n.a=t.p+"e638e90633edea2ea27114a31a6db18f.jpg"},function(e,n,t){var i=t(4),a=t(5);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var d={insert:"head",singleton:!1};i(a,d);e.exports=a.locals||{}},function(e,n,t){"use strict";var i,a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},d=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),r=[];function o(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},i=[],a=0;a<e.length;a++){var d=e[a],c=n.base?d[0]+n.base:d[0],l=t[c]||0,p="".concat(c," ").concat(l);t[c]=l+1;var s=o(p),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==s?(r[s].references++,r[s].updater(m)):r.push({identifier:p,updater:g(m,n),references:1}),i.push(p)}return i}function l(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=t.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var r=d(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var p,s=(p=[],function(e,n){return p[e]=n,p.filter(Boolean).join("\n")});function m(e,n,t,i){var a=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=s(n,a);else{var d=document.createTextNode(a),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(d,r[n]):e.appendChild(d)}}function u(e,n,t){var i=t.css,a=t.media,d=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),d&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,f=0;function g(e,n){var t,i,a;if(n.singleton){var d=f++;t=h||(h=l(n)),i=m.bind(null,t,d,!1),a=m.bind(null,t,d,!0)}else t=l(n),i=u.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var a=o(t[i]);r[a].references--}for(var d=c(e,n),l=0;l<t.length;l++){var p=o(t[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}t=d}}}},function(e,n,t){"use strict";t.r(n);var i=t(0),a=t.n(i),d=t(1),r=t.n(d),o=t(2),c=a()(!1),l=r()(o.a);c.push([e.i,"body {\n  margin: 0px;\n  background-color: rgba(232, 255, 129, 0.65);\n  display: flex;\n  flex-direction: column;\n  min-width: 360px;\n  align-items: center;\n  justify-content: flex-start;\n  font-family: Helvetica, Arial, sans-serif;\n}\n\n#content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\nnav {\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 200px;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.75);\n  color: white;\n  text-shadow: 1px 1px 1px black;\n  z-index: 5;\n}\n\n#nav-left {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 90%;\n}\n\n#nav-links {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 30vw;\n}\n\n#nav-links a {\n  text-decoration: none;\n  font-weight: 900;\n  font-size: 20px;\n  color: white;\n  margin: 5px;\n}\n\n#nav-links a:hover {\n  transform: scale(1.25);\n}\n\n#menu {\n  position: relative;\n  margin: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 90vw;\n  max-width: 600px;\n  height: 600px;\n  background-color: rgba(74, 109, 0, 0.65);\n  border-radius: 5px;\n}\n\n#hero {\n  margin-top: 190px;\n  background-image: url("+l+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 30vh;\n  width: 100vw;\n  border-bottom: 10px groove darkolivegreen;\n  color: beige;\n  text-shadow: 4px 4px 2px black;\n  display: flex;\n  flex-direction: column;\n  font-size: 3.3rem;\n  font-weight: 900;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n#hero p {\n  position: relative;\n  width: 90%;\n}\n\n#spacer {\n  position: relative;\n  display: flex;\n  width: 100vw;\n  min-height: 20vh;\n  height: auto;\n  background-color: rgb(131, 160, 60);\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 10px groove darkolivegreen;\n  margin-bottom: 50px;\n}\n\n#spacer p {\n  font-size: 1.85rem;\n  width: 75%;\n  text-align: center;\n  color: white;\n  font-weight: 800;\n  text-shadow: 2px 2px 2px black;\n}\n\n#menu-button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin: 50px;\n  width: 200px;\n  height: 100px;\n  border-radius: 5px;\n  color: white;\n  font-size: 20px;\n  text-align: center;\n  justify-content: center;\n  background-color: orange;\n  box-shadow: 1px 1px 1px black;\n  font-weight: 900;\n  border: none;\n}\n\n#menu-button:hover {\n  transform: scale(1.05);\n}\n\n#table {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 95%;\n  height: 600px;\n  border-radius: 5px;\n  margin: 5px;\n}\n\n#titleBar {\n  position: relative;\n  align-self: start;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100px;\n  background-color: rgb(0, 87, 4);\n  color: white;\n  text-shadow: 1px 1px 1px black;\n  border-radius: 5px;\n}\n\nh3 {\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  height: 100%;\n  width: 33.3%;\n  font-size: 21px;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  align-items: center;\n}\n\n.activeTab {\n  position: relative;\n  align-self: center;\n  background-color: rgb(131, 160, 60);\n  height: 100%;\n  width: 33.3%;\n  border-radius: 5px;\n  color: white;\n  padding: 5px;\n  padding-top: 0px;\n}\n\n#icon {\n  margin: 20px;\n  width: auto;\n  height: 90%;\n  background-color: none;\n}\n\n#icon:hover {\n  transform: scale(1.05);\n}\n\n#hours {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n#hours p {\n  margin: 5px;\n}\n\n#nav-name {\n  border-top: 1px solid lightgray;\n  padding: 10px;\n  font-size: 18px;\n  font-weight: 800;\n}\n\n#contact {\n  height: auto;\n  align-self: center;\n  height: 30vh;\n  margin: 100px;\n  font-size: 30px;\n  color: white;\n  text-shadow: 2px 2px 2px black;\n  font-weight: 800;\n}\n\n.special {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 19%;\n  width: 100%;\n  color: white;\n  background-color: rgb(0, 87, 4);\n  font-weight: 700;\n  border-radius: 5px;\n}\n\n.special span {\n  position: relative;\n  height: auto;\n  font-size: 24px;\n  text-align: left;\n  text-shadow: 2px 2px 1px black;\n  margin-bottom: 0px;\n}\n\n.special p {\n  font-size: 16px;\n  margin: 10px;\n  color: beige;\n  margin-right: 15px;\n  font-style: italic;\n}\n\n.name {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: left;\n  width: auto;\n  max-width: 75%;\n  margin-left: 15px;\n}\n\n.name p {\n  margin-top: 2px;\n}\n\n@media (max-width: 450px) {\n  body {\n    min-width: 360px;\n  }\n\n  #hero p {\n    font-size: 2rem;\n  }\n\n  #spacer p {\n    font-size: 1.5rem;\n  }\n\n  #titleBar h3 {\n    font-size: 16px;\n  }\n\n  .special {\n    position: relative;\n    font-size: 13px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    height: auto;\n    text-align: center;\n    margin-bottom: 5px;\n    flex-wrap: flex;\n  }\n\n  .name {\n    margin: 0px;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    text-align: center;\n  }\n\n  .special span {\n    position: relative;\n    font-size: 15px;\n    width: 100%;\n    text-align: center;\n  }\n\n  .special p {\n    font-size: 13px;\n    width: 100%;\n    margin-top: 2px;\n  }\n\n  #menu {\n    height: auto;\n    width: 90%;\n  }\n\n  #table {\n    height: auto;\n    width: 95%;\n  }\n\n  #icon {\n    height: 65%;\n  }\n}\n\n@media (max-width: 600px) {\n  #hours {\n    display: none;\n  }\n\n  #nav-links {\n    flex-direction: column;\n  }\n\n  #nav {\n    justify-content: space-evenly;\n  }\n}\n",""]),n.default=c},function(e,n,t){"use strict";t.r(n);t(3);var i=t.p+"739d82a52e32385502f867d291e12ec2.png";const a=()=>{const e=document.querySelector("#table"),n=document.createElement("div"),t=document.createElement("div"),i=document.createElement("span"),a=document.createElement("p"),d=document.createElement("p"),r=document.createElement("div"),o=document.createElement("div"),c=document.createElement("span"),l=document.createElement("p"),p=document.createElement("p"),s=document.createElement("div"),m=document.createElement("div"),u=document.createElement("span"),h=document.createElement("p"),f=document.createElement("p"),g=document.createElement("div"),v=document.createElement("div"),x=document.createElement("span"),b=document.createElement("p"),C=document.createElement("p"),E=document.createElement("div"),L=document.createElement("div"),y=document.createElement("span"),w=document.createElement("p"),T=document.createElement("p");n.classList.add("special"),r.classList.add("special"),s.classList.add("special"),g.classList.add("special"),E.classList.add("special"),t.classList.add("name"),o.classList.add("name"),m.classList.add("name"),v.classList.add("name"),L.classList.add("name"),i.innerHTML='"Hungry Man"',a.innerHTML="3 eggs, Bacon, Sausage, Hash Browns, Toast",d.innerHTML="$7.95",c.innerHTML='"Kinda Hungry Man"',l.innerHTML="3 Eggs, Bacon, Hash Browns, Toast",p.innerHTML="$6.49",u.innerHTML='"Standard Breakfast"',h.innerHTML="2 Eggs, Bacon, Hash Browns, Toast",f.innerHTML="$5.49",x.innerHTML='"Gergich Way"',b.innerHTML="2 Eggs, Bacon, Toast",C.innerHTML="$4.49",y.innerHTML='"Leslie Special"',w.innerHTML="2 Gigantic Waffles",T.innerHTML="$3.99",e.appendChild(n),n.appendChild(t),t.appendChild(i),t.appendChild(a),n.appendChild(d),e.appendChild(r),r.appendChild(o),o.appendChild(c),o.appendChild(l),r.appendChild(p),e.appendChild(s),s.appendChild(m),m.appendChild(u),m.appendChild(h),s.appendChild(f),e.appendChild(g),g.appendChild(v),v.appendChild(x),v.appendChild(b),g.appendChild(C),e.appendChild(E),E.appendChild(L),L.appendChild(y),L.appendChild(w),E.appendChild(T)},d=document.querySelector.bind(document);let r="";const o=()=>{d("#menu-button").style.display="none",d("#menu").style.display="flex",d("#menu-link").href="#spacer",window.scrollTo(d("#spacer"));const e=document.createElement("div"),n=document.createElement("h3"),t=document.createElement("h3"),i=document.createElement("h3"),r=document.createElement("div");n.innerHTML="Specials",n.id="specials",t.innerHTML="Omelettes",t.id="omelettes",i.innerHTML="Sides",i.id="sides",r.id="table",n.addEventListener("click",e=>{c(n),o(),a()}),t.addEventListener("click",e=>{c(t),o(),(()=>{const e=document.querySelector("#table"),n=document.createElement("div"),t=document.createElement("div"),i=document.createElement("span"),a=document.createElement("p"),d=document.createElement("p"),r=document.createElement("div"),o=document.createElement("div"),c=document.createElement("span"),l=document.createElement("p"),p=document.createElement("p"),s=document.createElement("div"),m=document.createElement("div"),u=document.createElement("span"),h=document.createElement("p"),f=document.createElement("p"),g=document.createElement("div"),v=document.createElement("div"),x=document.createElement("span"),b=document.createElement("p"),C=document.createElement("p"),E=document.createElement("div"),L=document.createElement("div"),y=document.createElement("span"),w=document.createElement("p"),T=document.createElement("p");n.classList.add("special"),r.classList.add("special"),s.classList.add("special"),g.classList.add("special"),E.classList.add("special"),t.classList.add("name"),o.classList.add("name"),m.classList.add("name"),v.classList.add("name"),L.classList.add("name"),i.innerHTML='"Ron\'s Omelette"',a.innerHTML="5 eggs, Bacon, Sausage, Ham, Hashbrowns",d.innerHTML="$7.95",c.innerHTML='"Veggie Omelette"',l.innerHTML="Green peppers, onions, garlic, spinach",p.innerHTML="$7.49",u.innerHTML='"Chili Omelette"',h.innerHTML="Covered will delicious chili, cheese, and onions",f.innerHTML="$6.49",x.innerHTML='"Standard Omelette"',b.innerHTML="Bacon and cheese",C.innerHTML="$5.49",y.innerHTML='"Sweet Tooth"',w.innerHTML="Deep fried eggs and bacon, covered with syrup and whipped cream",T.innerHTML="$7.99",e.appendChild(n),n.appendChild(t),t.appendChild(i),t.appendChild(a),n.appendChild(d),e.appendChild(r),r.appendChild(o),o.appendChild(c),o.appendChild(l),r.appendChild(p),e.appendChild(s),s.appendChild(m),m.appendChild(u),m.appendChild(h),s.appendChild(f),e.appendChild(g),g.appendChild(v),v.appendChild(x),v.appendChild(b),g.appendChild(C),e.appendChild(E),E.appendChild(L),L.appendChild(y),L.appendChild(w),E.appendChild(T)})()}),i.addEventListener("click",e=>{c(i),o(),(()=>{const e=document.querySelector("#table"),n=document.createElement("div"),t=document.createElement("div"),i=document.createElement("span"),a=document.createElement("p"),d=document.createElement("p"),r=document.createElement("div"),o=document.createElement("div"),c=document.createElement("span"),l=document.createElement("p"),p=document.createElement("p"),s=document.createElement("div"),m=document.createElement("div"),u=document.createElement("span"),h=document.createElement("p"),f=document.createElement("p"),g=document.createElement("div"),v=document.createElement("div"),x=document.createElement("span"),b=document.createElement("p"),C=document.createElement("p"),E=document.createElement("div"),L=document.createElement("div"),y=document.createElement("span"),w=document.createElement("p"),T=document.createElement("p");n.classList.add("special"),r.classList.add("special"),s.classList.add("special"),g.classList.add("special"),E.classList.add("special"),t.classList.add("name"),o.classList.add("name"),m.classList.add("name"),v.classList.add("name"),L.classList.add("name"),i.innerHTML='"Extra Bacon"',a.innerHTML="1/2 lb",d.innerHTML="$3.99",c.innerHTML='"Extra egg"',l.innerHTML="1 extra egg, cooked as ordered",p.innerHTML="$1.49",u.innerHTML='"Pancakes"',h.innerHTML="4 pancakes with  syrup and powdered sugar",f.innerHTML="$4.49",x.innerHTML='"Hash Browns"',b.innerHTML="Whole side order",C.innerHTML="$5.49",y.innerHTML='"Dessert"',w.innerHTML="Vanilla Ice Cream with Hot Fudge",T.innerHTML="$3.99",e.appendChild(n),n.appendChild(t),t.appendChild(i),t.appendChild(a),n.appendChild(d),e.appendChild(r),r.appendChild(o),o.appendChild(c),o.appendChild(l),r.appendChild(p),e.appendChild(s),s.appendChild(m),m.appendChild(u),m.appendChild(h),s.appendChild(f),e.appendChild(g),g.appendChild(v),v.appendChild(x),v.appendChild(b),g.appendChild(C),e.appendChild(E),E.appendChild(L),L.appendChild(y),L.appendChild(w),E.appendChild(T)})()}),d("#menu").appendChild(e),e.id="titleBar",e.appendChild(n),e.appendChild(t),e.appendChild(i),d("#menu").appendChild(r),c(n),a();const o=()=>{for(let e=r.children.length-1;e>=0;e--)r.removeChild(r.children[e]);d("#menu").appendChild(r)}},c=e=>{"activeTab"!=e.classList&&(""!=r&&r.classList.remove("activeTab"),e.classList.add("activeTab"),r=e)};document.querySelector.bind(document);console.log("app started");const l=document.querySelector.bind(document);window.addEventListener("load",e=>{(()=>{const e=document.getElementById("content"),n=document.createElement("nav"),t=document.createElement("div"),i=document.createElement("img"),a=document.createElement("div"),d=document.createElement("p"),r=document.createElement("p"),o=document.createElement("p"),c=document.createElement("div"),l=document.createElement("a"),p=document.createElement("a"),s=document.createElement("a"),m=document.createElement("div"),u=document.createElement("p"),h=document.createElement("div"),f=document.createElement("p"),g=document.createElement("button"),v=document.createElement("div"),x=document.createElement("div"),b=document.createElement("p");n.id="nav",t.id="nav-left",i.id="icon",i.alt="restaurant logo",i.href="#body",a.id="hours",d.innerHTML="Mon-Fri : 11am-8pm",r.innerHTML="Sat-Sun : 11am-7pm",o.id="nav-name",o.innerHTML="Good Food Diner",c.id="nav-links",l.href="#body",l.innerHTML="Home",g.id="menu-button",g.type="button",g.innerHTML="See Our Menu",p.id="menu-link",p.innerHTML="Menu",p.href="#menu-button",s.href="#contact",s.innerHTML="Contact",m.id="hero",u.innerHTML='"Eat here, or don\'t. We are not beggars."',h.id="spacer",f.innerHTML="We've been here since we've been here, and we'll be here until we are\n  not. We serve exclusively breakfast food.",v.id="menu",v.style.display="none",x.id="contact",b.innerHTML="Contact",e.appendChild(n),n.appendChild(t),t.appendChild(i),t.appendChild(a),a.appendChild(d),a.appendChild(r),a.appendChild(o),n.appendChild(c),c.appendChild(l),c.appendChild(p),c.appendChild(s),e.appendChild(m),m.appendChild(u),e.appendChild(h),h.appendChild(f),e.appendChild(g),e.appendChild(v),e.appendChild(x),x.appendChild(b),window.scrollTo({top:0,behavior:"smooth"}),console.log("hi")})(),l("#menu-button").addEventListener("click",e=>{o(),l("#spacer").scrollIntoView({behavior:"smooth"})}),l("#icon").src=i})}]);