import React, { FormEvent, useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { Title, Form, Comics, Error } from './styles';
import api from '../../services/api';
import keys from '../../config/keys';

interface Character {
  name: string;

  description: string;

  thumbnail: {
    path: string;
  };

  id: number;
}

const Dashboard: React.FC = () => {
  const [newCharacter, setNewCharacter] = useState('');
  const [isRequested, setIsRequested] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputError, setInputError] = useState('');
  const [characters, setCharacters] = useState<Character[]>(() => {
    const storage = localStorage.getItem('@MarvelComics:characters');

    if (storage) return JSON.parse(storage);
    return [];
  });

  function handleCheckLoading() {
    if (isLoading === false) {
      return false;
    }
    return true;
  }

  useEffect(() => {
    localStorage.setItem(
      '@MarvelComics:characters',
      JSON.stringify(characters),
    );
  }, [characters]);

  async function handleAddCharacter(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    /* Esta funcao adicionar novas comics(hqs)
      fazendo o uso da API da Marvel Developers.
      Salvando a nova comic no state de comics.
    */
    event.preventDefault();

    try {
      if (isRequested === false) {
        let response = await api.get(
          `v1/public/characters?ts=1&apikey=${keys.api_key}&hash=${keys.hash}&limit=100`,
        );

        const results = response.data;
        const { data } = results;
        let { offset } = data;
        const { total } = data;
        const allCharacters: ConcatArray<never>[] = [];
        if (newCharacter.length > 0) {
          do {
            setIsLoading(true);

            response = await api.get(
              `v1/public/characters?ts=1&apikey=${keys.api_key}&hash=${keys.hash}&limit=100&offset=${offset}`,
            );
            offset += 100;

            allCharacters.push(response.data.data.results);
          } while (offset < total);

          const flated = [].concat(...allCharacters);

          const foundChar = flated.filter((char: Character) =>
            char.name.includes(newCharacter),
          );

          foundChar.map((char: Character) =>
            setCharacters([...characters, char]),
          );

          setIsLoading(false);
          setNewCharacter('');
          setIsRequested(false);
          setInputError('');
        } else {
          setInputError('O campo de busca nao pode ser vazio');
        }
      } else {
        setIsRequested(true);
      }
    } catch (err) {
      setInputError('Error na busca de personagens');
    }
  }

  return (
    <>
      <Title>Marvel Characters</Title>
      <Form
        hasError={!!inputError}
        onSubmit={e => handleAddCharacter(e)}
        action=""
      >
        <input
          value={newCharacter}
          onChange={e => setNewCharacter(e.target.value)}
          type="text"
          placeholder="Digite aqui o nome do personagem"
        />
        {handleCheckLoading() ? (
          <button type="button">
            <CircularProgress color="primary" />
          </button>
        ) : (
          <button type="submit">Pesquisar HQ</button>
        )}
      </Form>

      {inputError && <Error>{inputError}</Error>}
      <Comics>
        {characters.map(character => (
          <a key={character.id} href="teste">
            <div>
              <strong>{character.name}</strong>
            </div>

            <img src={character.thumbnail.path} alt={character.name} />
          </a>
        ))}
      </Comics>
    </>
  );
};

export default Dashboard;
