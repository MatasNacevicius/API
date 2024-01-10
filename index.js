let conteiner = document.getElementById("conteiner");
let button = document.createElement("button");
button.innerText = "Get photo";

conteiner.appendChild(button);

let imgEl = document.createElement("img");
imgEl.style.width = "400px";
imgEl.style.height = "400px";
imgEl.style.display = "flex";
imgEl.style.flexDirection = "column";
imgEl.style.objectFit = "cover";

const getPhoto = async () => {
  const result = await fetch("https://coffee.alexflipnote.dev/random.json");
  console.log(result);

  const data = await result.json();
  console.log(data);

  imgEl.src = data.file;

  conteiner.appendChild(imgEl);
};

button.addEventListener("click", getPhoto);
