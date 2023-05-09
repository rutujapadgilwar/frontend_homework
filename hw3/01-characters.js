// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

fetch(url)
.then(response => response.json())
.then(characters => {
    const characterList = document.getElementById('characters');
    
    characters.forEach(character => {
      const { firstName, lastName, imageUrl, title } = character;

      const characterContainer = document.createElement('section');
      characterContainer.classList.add('character-container');

      const characterImage = document.createElement('img');
      characterImage.src = imageUrl;
      characterImage.alt = imageUrl;

      const characterName = document.createElement('h2');
      characterName.textContent = `${firstName} ${lastName}`;

      const characterTitle = document.createElement('h3');
      characterTitle.textContent = title;

      characterImage.style = "margin: 25px; width: 200px; height: 220px"
      characterName.style = "margin-bottom: 20px; text-align: center; font-size: 20px; font-weight: bolder; line-height: 20px;"
      characterTitle.style = "margin-left: 22px; text-align: center; margin-bottom: 20px; font-size: 18px; font-weight: bolder; line-height: 20px; width: 200px"

      characterContainer.appendChild(characterImage);
      characterContainer.appendChild(characterName);
      characterContainer.appendChild(characterTitle);
      characterList.appendChild(characterContainer);

    })
})
.catch((error) => {
    console.error(error);
    let section = document.querySelector(".characters")
    let element = document.createElement('div')
    element.textContent = "An error occured. Please try again.";
    section.appendChild(element)
});
