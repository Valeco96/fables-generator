function displayFable(response) {
  new Typewriter("#fable", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
  });
}

function generateFable(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-input");
  let apiKey = "5f6791e5e0b8c3b470of06t31a2937df";
  let context =
    "You are an AI full of imagination, and love to generate short stories. Your mission is to generate two paragraps of fables or fairy tails with basic HTML format. Please do not show code strings. Make sure to follow the user instructions.";
  let prompt = `User instructions: Please generate a fairy tail and a title about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let fableElement = document.querySelector("#fable");
  fableElement.classList.remove("hidden");
  fableElement.innerHTML = `⌛ Generating a nice fable about ${instructionsInput.value} for you...`;

  axios.get(apiUrl).then(displayFable);
}

let fableFormElement = document.querySelector("#fable-generator");
fableFormElement.addEventListener("submit", generateFable);
