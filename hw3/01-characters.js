// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";

fetch(url)
  .then((response) => response.json())
  .then((characters) => {
    const characterList = document.getElementById("characters");

    characters.forEach((character) => {
      const { firstName, lastName, imageUrl, title } = character;

      const characterContainer = document.createElement("section");
      characterContainer.classList.add("character-container");

      const characterImage = document.createElement("img");
      characterImage.src = imageUrl;
      characterImage.alt = title;

      const characterName = document.createElement("h2");
      characterName.textContent = `${firstName} ${lastName}`;

      const characterTitle = document.createElement("h3");
      characterTitle.textContent = title;

      characterContainer.append(characterImage, characterName, characterTitle );
      characterList.appendChild(characterContainer);
    });
  })
  .catch((error) => {
    console.error(error);
    let section = document.querySelector(".characters");
    let element = document.createElement("div");
    element.textContent = "An error occured. Please try again.";
    section.appendChild(element);
  });
