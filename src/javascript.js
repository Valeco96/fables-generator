function generateFable(event) {
  event.preventDefault();

  new Typewriter("#fable", {
    strings: "Generating your marvellous fable right now...",
    autoStart: true,
    delay: 50,
  });
}

let fableFormElement = document.querySelector("#fable-generator");
fableFormElement.addEventListener("submit", generateFable);
