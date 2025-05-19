window.$crisp = [];
window.CRISP_WEBSITE_ID = "8464443b-6dfd-41ed-b94b-4d09b0d4b8f0";
(function () {
  d = document;
  s = d.createElement("script");
  s.src = "https://client.crisp.chat/l.js";
  s.async = 1;
  d.getElementsByTagName("head")[0].appendChild(s);
})();

let icon = document.getElementById("icon-mobile");
let ul = document.getElementById("ul-mobile");

icon.onclick = function () {
  ul.classList.toggle("mobile-nav1");
  
};
