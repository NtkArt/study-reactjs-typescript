import React, { FormEvent, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { Title, Form, Comics } from './styles';
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
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isRequested, setIsRequested] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleCharacterInputEmpty() {
    alert('O campo de busca nao pode ser vazio');
  }

  function handleCheckLoading() {
    if (isLoading === false) {
      return false;
    }
    return true;
  }

  async function handleAddCharacter(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    /* Esta funcao adicionar novas comics(hqs)
      fazendo o uso da API da Marvel Developers.
      Salvando a nova comic no state de comics.
    */

    event.preventDefault();

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

        console.log(foundChar);

        setIsLoading(false);
        setNewCharacter('');
        setIsRequested(false);
      } else {
        handleCharacterInputEmpty();
      }
    } else {
      setIsRequested(true);
    }
  }

  return (
    <>
      <Title>Marvel Characters</Title>
      <Form onSubmit={e => handleAddCharacter(e)} action="">
        <input
          value={newCharacter}
          onChange={e => setNewCharacter(e.target.value)}
          type="text"
          placeholder="Digite aqui o nome do personagem"
        />
        {handleCheckLoading() ? (
          <button type="button">
            {' '}
            <CircularProgress color="primary" />
          </button>
        ) : (
          <button type="submit">Pesquisar HQ</button>
        )}
      </Form>
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
