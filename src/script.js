async function getCharacters() {
    try {
        const response = await fetch('./data/characters.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // Récupérer l'élément ul avec l'id 'characters'
        const charactersList = document.getElementById('characters');
        
        // Vider le contenu actuel de la liste
        charactersList.innerHTML = '';
        
        // Ajouter un élément li pour chaque personnage
        data.forEach(character => {
            const listItem = document.createElement('li');
            listItem.textContent = character.name;
            charactersList.appendChild(listItem);
        });
        
        console.log('Characters loaded successfully:', data);
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}

// Call the function to fetch and log the data
getCharacters();