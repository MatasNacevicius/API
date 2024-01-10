let conteiner = document.getElementById("conteiner");
let button = document.createElement("button");
button.innerText = "Get country";

let input = document.createElement("input");
input.type = "text";
input.placeholder = "search for a country";

conteiner.append(button, input);

const getCountry = async (event) => {
  event.preventDefault();

  const inputValue = input.value.trim();
  console.log(inputValue);

  const result = await fetch(
    `https://restcountries.com/v3.1/name/${inputValue}`
  );
  console.log(result);

  const data = await result.json();
  console.log(data);

  if (result.status === 404) {
    const infoElement = document.createElement("h2");
    infoElement.innerText = result.statusText;
    conteiner.appendChild(infoElement);
  } else {
    const allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => card.remove());
    console.log(data);
    data.map((country) => {
      const card = document.createElement("div");
      card.className = "card";

      const flagImg = document.createElement("img");
      flagImg.src = country.flags.png;
      flagImg.alt = country.flags.alt || country.name.common;

      const Flagtitle = document.createElement("h3");
      Flagtitle.innerText = country.name.common;

      card.append(flagImg, Flagtitle);
      conteiner.appendChild(card);
    });
  }
};

button.addEventListener("click", getCountry);
