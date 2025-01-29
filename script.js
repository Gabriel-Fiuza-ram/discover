console.log("d");
function togglemode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    console.log("a");
    img.setAttribute("src", "./img/robozin2.jpg");
  } else {
    console.log("b");
    img.setAttribute("src", "./img/robozin.jpg");
  }
  console.log("c");
}
