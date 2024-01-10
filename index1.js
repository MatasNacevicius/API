const API = "3CDHWgxSJrdK22mAZUsHGzhaS_5IOo-QCJzpRl0L2pg";

let conteiner = document.getElementById("conteiner");
let button = document.createElement("button");
button.innerText = "Search";

let input = document.createElement("input");
input.type = "text";
input.placeholder = "search for a photo";

conteiner.append(button, input);

const getPhoto = async (event) => {
  event.preventDefault();
  const result = await fetch(
    `https://api.unsplash.com/photos/random/?client_id=${API}&count=10`
  );
  console.log(result);

  let data = await result.json();
  console.log(data);

  data.map((img) => {
    const photo = document.createElement("img");
    photo.src = img.urls.small;
    photo.alt = img.alt_description;
    photo.style.width = "250px";
    photo.style.objectFit = "cover";
    photo.style.height = "200px";
    photo.style.border = "1px solid black";

    conteiner.appendChild(photo);
  });
};
getPhoto();

const getQueryPhotos = async () => {
  const inputValue = input.value.trim();
  console.log(inputValue);

  const result = await fetch(
    `https://api.unsplash.com/search/photos/?client_id=3CDHWgxSJrdK22mAZUsHGzhaS_5IOo-QCJzpRl0L2pg&query=${inputValue}&per_page=6`
  );
  console.log(result);

  let data = await result.json();
  console.log(data);

  if (data.results.total === 0) {
    const infoElement = document.createElement("h2");
    infoElement.innerText = "data not found";
    conteiner.appendChild(infoElement);
  } else {
    const allImages = document.querySelectorAll(".photo");
    allImages.forEach((photo) => photo.remove());

    data.results.map((img) => {
      const photo = document.createElement("img");
      photo.src = img.urls.small;
      photo.alt = img.alt_description;
      photo.style.width = "250px";
      photo.style.objectFit = "cover";
      photo.style.height = "200px";
      photo.style.border = "1px solid black";

      conteiner.appendChild(photo);
    });
  }
};
button.addEventListener("click", getQueryPhotos);
