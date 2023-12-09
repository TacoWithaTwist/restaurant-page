export function loadMenu() {
  const content = document.getElementById("content");
  const main = document.createElement("main");
  main.id = "main";
  main.style =
    "display:flex; flex-direction: column; gap:5%; background:linear-gradient(to right,#FFC8C8,#F89B29); width:50vw;border-radius:5px;color:#333;text-align:center;";
  const menu = document.createElement("section");
  menu.innerHTML =
    "1. Basque Burnt cheesecake<br>2. No-Bake Cheesecake<br>3. Japanese Cheesecake<br>4. Baklava Cheesecake<br>5. Cheesecake Cake<br>6. Cheesecake Cookies<br>7. New York Cheesecake<br>8. Chicago Cheesecake<br>9. Philadelphia Cheesecake<br>10. German Cheesecake (Käsekuchen)<br>11. Savory Cheesecake<br>12. Ricotta Cheesecake<br>13. Vegan Cheesecake<br>14. Swedish Cheesecake (Ostkaka)<br> 15. Chocolate Cheesecake<br>16. Russian cheesecake (Vatrushka)";
  menu.className = "main-elements";
  main.appendChild(menu);
  content.appendChild(main);
}
