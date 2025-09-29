async function getCharacters() {
    try {
        const response = await fetch('./data/characters.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}

// Call the function to fetch and log the data
getCharacters();