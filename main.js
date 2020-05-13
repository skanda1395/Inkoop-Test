let numberbox = document.getElementById("numberbox");
let note = document.createElement("p");
note.innerHTML = "Refreshing the page in 5 seconds...";

function generate() {
  document.getElementById("container").appendChild(note);
  let random_six = Math.floor(Math.random() * 900000) + 100000;
  numberbox.textContent = random_six;
  localStorage.setItem("random_six", random_six);
  setTimeout(() => (window.location = "./test.html"), 5000);
}
