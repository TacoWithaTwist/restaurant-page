export function reload() {
  const main = document.getElementById("main");
  const things = document.getElementsByClassName("main-elements");
  while (things.length > 0) {
    main.remove(things[0]);
  }
}
