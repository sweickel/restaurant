!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",a=e[3];if(!a)return t;if(n&&"function"==typeof btoa){var i=(r=a,o=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(c," */")),d=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[t].concat(d).concat([i]).join("\n")}var r,o,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(a)for(var d=0;d<this.length;d++){var r=this[d][0];null!=r&&(i[r]=!0)}for(var o=0;o<e.length;o++){var c=[].concat(e[o]);a&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";n.a=t.p+"e638e90633edea2ea27114a31a6db18f.jpg"},function(e,n,t){var a=t(4),i=t(5);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var d={insert:"head",singleton:!1};a(i,d);e.exports=i.locals||{}},function(e,n,t){"use strict";var a,i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},d=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),r=[];function o(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},a=[],i=0;i<e.length;i++){var d=e[i],c=n.base?d[0]+n.base:d[0],l=t[c]||0,s="".concat(c," ").concat(l);t[c]=l+1;var p=o(s),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(r[p].references++,r[p].updater(m)):r.push({identifier:s,updater:g(m,n),references:1}),a.push(s)}return a}function l(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=t.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var r=d(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var s,p=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function m(e,n,t,a){var i=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=p(n,i);else{var d=document.createTextNode(i),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(d,r[n]):e.appendChild(d)}}function u(e,n,t){var a=t.css,i=t.media,d=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),d&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var h=null,f=0;function g(e,n){var t,a,i;if(n.singleton){var d=f++;t=h||(h=l(n)),a=m.bind(null,t,d,!1),i=m.bind(null,t,d,!0)}else t=l(n),a=u.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var i=o(t[a]);r[i].references--}for(var d=c(e,n),l=0;l<t.length;l++){var s=o(t[l]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}t=d}}}},function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),d=t(1),r=t.n(d),o=t(2),c=i()(!1),l=r()(o.a);c.push([e.i,"body {\n  margin: 0px;\n  background-color: rgba(232, 255, 129, 0.65);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  font-family: Helvetica, Arial, sans-serif;\n}\n\n#content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\nnav {\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 200px;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.75);\n  color: white;\n  text-shadow: 1px 1px 1px black;\n  z-index: 5;\n}\n\n#nav-left {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 90%;\n}\n\n#nav-links {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 30vw;\n}\n\n#nav-links a {\n  text-decoration: none;\n  font-weight: 900;\n  font-size: 20px;\n  color: white;\n}\n\n#nav-links a:hover {\n  transform: scale(1.25);\n}\n\n#menu {\n  position: relative;\n  margin: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 50vw;\n  height: 600px;\n  background-color: rgba(74, 109, 0, 0.65);\n  border-radius: 5px;\n}\n\n#hero {\n  margin-top: 190px;\n  background-image: url("+l+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 30vh;\n  height: auto;\n  width: 100vw;\n  border-bottom: 10px groove darkolivegreen;\n  color: beige;\n  text-shadow: 4px 4px 2px black;\n  display: flex;\n  font-size: 3.3rem;\n  font-weight: 900;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n#spacer {\n  position: relative;\n  display: flex;\n  width: 100vw;\n  min-height: 20vh;\n  height: auto;\n  background-color: rgb(131, 160, 60);\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 10px groove darkolivegreen;\n  margin-bottom: 50px;\n}\n\n#spacer p {\n  font-size: 1.85rem;\n  width: 75%;\n  text-align: center;\n  color: white;\n  font-weight: 800;\n  text-shadow: 2px 2px 2px black;\n}\n\n#menu-button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin: 50px;\n  width: 200px;\n  height: 100px;\n  border-radius: 5px;\n  color: white;\n  font-size: 20px;\n  text-align: center;\n  justify-content: center;\n  background-color: orange;\n  box-shadow: 1px 1px 1px black;\n  font-weight: 900;\n  border: none;\n}\n\n#menu-button:hover {\n  transform: scale(1.05);\n}\n\n#table {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 95%;\n  height: 600px;\n  border-radius: 5px;\n  margin: 5px;\n}\n\n#titleBar {\n  position: relative;\n  align-self: start;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 100px;\n  height: 100px;\n  background-color: rgb(0, 87, 4);\n  color: white;\n  text-shadow: 1px 1px 1px black;\n}\n\nh3 {\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  height: 100%;\n  width: 33.3%;\n  font-size: 21px;\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  align-items: center;\n}\n\n.activeTab {\n  position: relative;\n  align-self: center;\n  background-color: rgb(131, 160, 60);\n  height: 100%;\n  width: 33.3%;\n  border-radius: 5px;\n  color: white;\n  padding: 5px;\n  padding-top: 0px;\n}\n\n#icon {\n  margin: 20px;\n  width: auto;\n  height: 90%;\n  background-color: none;\n}\n\n#icon:hover {\n  transform: scale(1.05);\n}\n\n#hours {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n#hours p {\n  margin: 5px;\n}\n\n#nav-name {\n  border-top: 1px solid lightgray;\n  padding: 10px;\n  font-size: 18px;\n  font-weight: 800;\n}\n\n#contact {\n  height: auto;\n  align-self: center;\n  height: 30vh;\n  margin: 100px;\n  font-size: 30px;\n  color: white;\n  text-shadow: 2px 2px 2px black;\n  font-weight: 800;\n}\n\n.special {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 15%;\n  width: 100%;\n  color: white;\n  background-color: rgb(0, 87, 4);\n  text-shadow: 2px 2px 1px black;\n  font-weight: 700;\n  border-radius: 5px;\n  margin: 10px;\n}\n\n.special span {\n  position: relative;\n  height: auto;\n  font-size: 22px;\n  font-style: italic;\n  text-align: left;\n}\n\n.special p {\n  font-size: 16px;\n  margin: 10px;\n  color: beige;\n}\n\n.name {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: left;\n  width: auto;\n  max-width: 75%;\n}\n",""]),n.default=c},function(e,n,t){"use strict";t.r(n);t(3);var a=t.p+"739d82a52e32385502f867d291e12ec2.png";const i=document.querySelector.bind(document);let d="";const r=()=>{i("#menu-button").style.display="none",i("#menu").style.display="flex",i("#menu-link").href="#spacer",window.scrollTo(i("#spacer"));const e=document.createElement("div"),n=document.createElement("h3"),t=document.createElement("h3"),a=document.createElement("h3"),d=document.createElement("div");n.innerHTML="Specials",n.id="specials",t.innerHTML="Omelettes",t.id="omelettes",a.innerHTML="Sides",a.id="sides",d.id="table",n.addEventListener("click",e=>{o(n),r(),(()=>{const e=document.querySelector("#table"),n=document.createElement("div"),t=document.createElement("div"),a=document.createElement("span"),i=document.createElement("p"),d=document.createElement("p"),r=document.createElement("div"),o=document.createElement("div"),c=document.createElement("span"),l=document.createElement("p"),s=document.createElement("p"),p=document.createElement("div"),m=document.createElement("div"),u=document.createElement("span"),h=document.createElement("p"),f=document.createElement("p"),g=document.createElement("div"),v=document.createElement("div"),C=document.createElement("span"),E=document.createElement("p"),x=document.createElement("p"),b=document.createElement("div"),L=document.createElement("div"),y=document.createElement("span"),w=document.createElement("p"),T=document.createElement("p");n.classList.add("special"),r.classList.add("special"),p.classList.add("special"),g.classList.add("special"),b.classList.add("special"),t.classList.add("name"),o.classList.add("name"),m.classList.add("name"),v.classList.add("name"),L.classList.add("name"),a.innerHTML='<strong>"Hungry Man"</strong>',i.innerHTML="3 Eggs, Bacon, Sausage, Ham, Hash Browns, Toast",d.innerHTML="$7.95",c.innerHTML='<strong>"Kinda Hungry Man"</strong>',l.innerHTML="3 Eggs, Bacon, Hash Browns, Toast",s.innerHTML="$6.49",u.innerHTML='<strong>"Standard Breakfast"</strong>',h.innerHTML="2 Eggs, Bacon, Hash Browns, Toast",f.innerHTML="$5.49",C.innerHTML='<strong>"Gergich Way"</strong>',E.innerHTML="2 Eggs, Bacon, Toast",x.innerHTML="$4.49",y.innerHTML='<strong>"Leslie Special"</strong>',w.innerHTML="2 Gigantic Waffles",T.innerHTML="$3.99",e.appendChild(n),n.appendChild(t),t.appendChild(a),t.appendChild(i),n.appendChild(d),e.appendChild(r),r.appendChild(o),o.appendChild(c),o.appendChild(l),r.appendChild(s),e.appendChild(p),p.appendChild(m),m.appendChild(u),m.appendChild(h),p.appendChild(f),e.appendChild(g),g.appendChild(v),v.appendChild(C),v.appendChild(E),g.appendChild(x),e.appendChild(b),b.appendChild(L),L.appendChild(y),L.appendChild(w),b.appendChild(T)})()}),t.addEventListener("click",e=>{o(t),r(),(()=>{const e=document.querySelector("#table"),n=document.createElement("div"),t=document.createElement("div"),a=document.createElement("span"),i=document.createElement("p"),d=document.createElement("p"),r=document.createElement("div"),o=document.createElement("div"),c=document.createElement("span"),l=document.createElement("p"),s=document.createElement("p"),p=document.createElement("div"),m=document.createElement("div"),u=document.createElement("span"),h=document.createElement("p"),f=document.createElement("p"),g=document.createElement("div"),v=document.createElement("div"),C=document.createElement("span"),E=document.createElement("p"),x=document.createElement("p"),b=document.createElement("div"),L=document.createElement("div"),y=document.createElement("span"),w=document.createElement("p"),T=document.createElement("p");n.classList.add("special"),r.classList.add("special"),p.classList.add("special"),g.classList.add("special"),b.classList.add("special"),t.classList.add("name"),o.classList.add("name"),m.classList.add("name"),v.classList.add("name"),L.classList.add("name"),a.innerHTML='<strong>"Ron\'s Omelette"</strong>',i.innerHTML="5 eggs, Bacon, Sausage, Ham, Hashbrowns",d.innerHTML="$7.95",c.innerHTML='<strong>"Veggie Omelette"</strong>',l.innerHTML="Green peppers, onions, garlic, spinach",s.innerHTML="$7.49",u.innerHTML='<strong>"Chili Omelette"</strong>',h.innerHTML="Covered will delicious chili, cheese, and onions",f.innerHTML="$6.49",C.innerHTML='<strong>"Standard Omelette"</strong>',E.innerHTML="Bacon and cheese",x.innerHTML="$5.49",y.innerHTML='<strong>"Sweet Tooth"</strong>',w.innerHTML="Deep fried eggs and bacon, covered with syrup and whipped cream",T.innerHTML="$7.99",e.appendChild(n),n.appendChild(t),t.appendChild(a),t.appendChild(i),n.appendChild(d),e.appendChild(r),r.appendChild(o),o.appendChild(c),o.appendChild(l),r.appendChild(s),e.appendChild(p),p.appendChild(m),m.appendChild(u),m.appendChild(h),p.appendChild(f),e.appendChild(g),g.appendChild(v),v.appendChild(C),v.appendChild(E),g.appendChild(x),e.appendChild(b),b.appendChild(L),L.appendChild(y),L.appendChild(w),b.appendChild(T)})()}),a.addEventListener("click",e=>{o(a),r(),(()=>{const e=document.querySelector("#table"),n=document.createElement("div"),t=document.createElement("div"),a=document.createElement("span"),i=document.createElement("p"),d=document.createElement("p"),r=document.createElement("div"),o=document.createElement("div"),c=document.createElement("span"),l=document.createElement("p"),s=document.createElement("p"),p=document.createElement("div"),m=document.createElement("div"),u=document.createElement("span"),h=document.createElement("p"),f=document.createElement("p"),g=document.createElement("div"),v=document.createElement("div"),C=document.createElement("span"),E=document.createElement("p"),x=document.createElement("p"),b=document.createElement("div"),L=document.createElement("div"),y=document.createElement("span"),w=document.createElement("p"),T=document.createElement("p");n.classList.add("special"),r.classList.add("special"),p.classList.add("special"),g.classList.add("special"),b.classList.add("special"),t.classList.add("name"),o.classList.add("name"),m.classList.add("name"),v.classList.add("name"),L.classList.add("name"),a.innerHTML='<strong>"Extra Bacon"</strong>',i.innerHTML="1/2 lb",d.innerHTML="$3.99",c.innerHTML='<strong>"Extra egg"</strong>',l.innerHTML="1 extra egg, cooked as ordered",s.innerHTML="$1.49",u.innerHTML='<strong>"Pancakes"</strong>',h.innerHTML="4 pancakes with  syrup and powdered sugar",f.innerHTML="$4.49",C.innerHTML='<strong>"Hash Browns"</strong>',E.innerHTML="Whole side order",x.innerHTML="$5.49",y.innerHTML='<strong>"Dessert"</strong>',w.innerHTML="Vanilla Ice Cream with Hot Fudge",T.innerHTML="$3.99",e.appendChild(n),n.appendChild(t),t.appendChild(a),t.appendChild(i),n.appendChild(d),e.appendChild(r),r.appendChild(o),o.appendChild(c),o.appendChild(l),r.appendChild(s),e.appendChild(p),p.appendChild(m),m.appendChild(u),m.appendChild(h),p.appendChild(f),e.appendChild(g),g.appendChild(v),v.appendChild(C),v.appendChild(E),g.appendChild(x),e.appendChild(b),b.appendChild(L),L.appendChild(y),L.appendChild(w),b.appendChild(T)})()}),i("#menu").appendChild(e),e.id="titleBar",e.appendChild(n),e.appendChild(t),e.appendChild(a),i("#menu").appendChild(d);const r=()=>{for(let e=d.children.length-1;e>=0;e--)d.removeChild(d.children[e]);i("#menu").appendChild(d)}},o=e=>{"activeTab"!=e.classList&&(""!=d&&d.classList.remove("activeTab"),e.classList.add("activeTab"),d=e)};document.querySelector.bind(document);console.log("app started");const c=document.querySelector.bind(document);window.addEventListener("load",e=>{(()=>{const e=document.getElementById("content"),n=document.createElement("nav"),t=document.createElement("div"),a=document.createElement("img"),i=document.createElement("div"),d=document.createElement("p"),r=document.createElement("p"),o=document.createElement("p"),c=document.createElement("div"),l=document.createElement("a"),s=document.createElement("a"),p=document.createElement("a"),m=document.createElement("div"),u=document.createElement("p"),h=document.createElement("div"),f=document.createElement("p"),g=document.createElement("button"),v=document.createElement("div"),C=document.createElement("div"),E=document.createElement("p");n.id="nav",t.id="nav-left",a.id="icon",a.alt="restaurant logo",a.href="#body",i.id="hours",d.innerHTML="Mon-Fri : 11am-8pm",r.innerHTML="Sat-Sun : 11am-7pm",o.id="nav-name",o.innerHTML="Good Food Diner",c.id="nav-links",l.href="#body",l.innerHTML="Home",g.id="menu-button",g.type="button",g.innerHTML="See Our Menu",s.id="menu-link",s.innerHTML="Menu",s.href="#menu-button",p.href="#contact",p.innerHTML="Contact",m.id="hero",u.innerHTML='"Eat here, or don\'t. We are not beggars."',h.id="spacer",f.innerHTML="We've been here since we've been here, and we'll be here until we are\n  not. We serve exclusively breakfast food.",v.id="menu",v.style.display="none",C.id="contact",E.innerHTML="Contact",e.appendChild(n),n.appendChild(t),t.appendChild(a),t.appendChild(i),i.appendChild(d),i.appendChild(r),i.appendChild(o),n.appendChild(c),c.appendChild(l),c.appendChild(s),c.appendChild(p),e.appendChild(m),m.appendChild(u),e.appendChild(h),h.appendChild(f),e.appendChild(g),e.appendChild(v),e.appendChild(C),C.appendChild(E),window.scrollTo({top:0,behavior:"smooth"}),console.log("hi")})(),c("#menu-button").addEventListener("click",e=>{r(),c("#spacer").scrollIntoView({behavior:"smooth"})}),c("#icon").src=a})}]);