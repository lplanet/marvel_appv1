import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CharactersList from './components/CharactersList';
import NumberOfCharacters from './components/NumberOfCharacters';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Charger automatiquement les données depuis le fichier JSON
    const loadCharacters = async () => {
      try {
        const response = await fetch('./data/characters.json');
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        setCharacters(data);
      } catch (err) {
        setError(err.message);
        console.error('Erreur lors du chargement des personnages:', err);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, []);

  if (loading) return <p>Chargement des personnages...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <>
      <h1>Marvel Characters</h1>
      <NumberOfCharacters characters={characters} />
      <CharactersList characters={characters} />
    </>
  );
}

export default App