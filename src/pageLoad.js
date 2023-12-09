//main Color #F7F7FF
//Secondary Color #A69658
//Accent Color #EA526F

import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
import { reload } from "./reload.js";
export function pageLoad() {
  const body = document.body;
  body.style =
    "height = 100vh; width = 100vw; background-color:#F7F7FF; font-family: 'Quicksand', sans-serif;";
  const content = document.getElementById("content");
  content.style =
    "display:flex;flex-direction:column; height:100vh; width:100vw; align-items:center;";

  const nav = document.createElement("nav");
  nav.style =
    "width = 30vw; display:flex; justify-content:center; align-items:center;";
  const ul = document.createElement("ul");
  ul.style =
    "list-style-type : none;  display: flex;  gap: 2vw; color:#A69658;";
  const home = document.createElement("li");
  home.innerHTML = "Home";
  const menu = document.createElement("li");
  menu.innerHTML = "Menu";
  const contact = document.createElement("li");
  contact.innerHTML = "Contact";
  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(contact);
  nav.appendChild(ul);
  content.appendChild(nav);
  home.addEventListener("click", function () {
    reload();
    loadHome();
  });
  menu.addEventListener("click", function () {
    reload();
    loadMenu();
  });
  contact.addEventListener("click", function () {
    reload();
    loadContact();
  });
  loadHome();
}
