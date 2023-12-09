export function loadHome() {
  const main = document.getElementById("main");
  if (!main) {
    const content = document.getElementById("content");
    const main = document.createElement("main");
    main.id = "main";
    main.style =
      "display:flex; flex-direction: column; gap:5%; background:linear-gradient(to right,#ff5858,#ffc8c8); width:50vw;border-radius:5px;color:#333;text-align:center;";
    const review = document.createElement("section");
    const p = document.createElement("p");
    p.className = "main-elements";
    p.innerHTML =
      "We offer exquisite Cheesecake slices made by michelin starred pastry chefs.<br>Make sure to contact us for a reservation or delivery service!";
    const schedule = document.createElement("section");
    schedule.className = "main-elements";
    schedule.innerHTML =
      " Opening Hours: 8:00 AM <br>8:00 AM - 9:00 AM: Opening preparations (cleaning, setting up displays)<br>9:00 AM - 12:00 PM: Baking and preparing cheesecakes<br>12:00 PM - 2:00 PM: Lunch break for staff<br>2:00 PM - 6:00 PM: Continued baking and preparation<br>  6:00 PM - 7:00 PM: Evening rush (peak hours)<br> 7:00 PM - 8:00 PM: Closing preparations, cleaning <br>Closing Hours: 8:00 PM";
    const address = document.createElement("section");
    address.className = "main-elements";
    address.innerHTML = "Fake Address: Cedria Tower 1999 Tiannment";
    review.appendChild(p);
    content.appendChild(main);
    main.appendChild(review);
    main.appendChild(schedule);
    main.appendChild(address);
  }
}
