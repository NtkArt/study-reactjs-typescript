import React, { FormEvent, useState } from 'react';
import { Title, Form, Comics } from './styles';
import api from '../../services/api';
import keys from '../../config/keys';

interface Character {
  name: string;

  description: string;

  id: number;
}

const Dashboard: React.FC = () => {
  const [newCharacter, setNewCharacter] = useState('');
  const [characters, setCharacters] = useState<Character[]>([]);

  async function handleAddCharacter(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    /* Esta funcao adicionar novas comics(hqs)
      fazendo o uso da API da Marvel Developers.
      Salvando a nova comic no state de comics.
    */

    event.preventDefault();

    let response = await api.get(
      `v1/public/characters?ts=1&apikey=${keys.api_key}&hash=${keys.hash}&limit=100`,
    );

    const results = response.data;
    const { data } = results;
    let { offset } = data;
    const { total } = data;

    do {
      response = await api.get(
        `v1/public/characters?ts=1&apikey=${keys.api_key}&hash=${keys.hash}&limit=100&offset=${offset}`,
      );

      offset += 100;
    } while (offset < total);

    const character = data.results.map((char: Character) => {
      const { name, description, id } = char;

      return {
        name,
        description,
        id,
      };
    });

    setCharacters([...characters, character]);
  }
  return (
    <>
      <Title>Marvel Characters</Title>
      <Form onSubmit={(e) => handleAddCharacter(e)} action="">
        <input
          value={newCharacter}
          onChange={(e) => setNewCharacter(e.target.value)}
          type="text"
          placeholder="Digite aqui o nome do personagem"
        />
        <button type="submit">Pesquisar HQ</button>
      </Form>
      <Comics>
        {characters.map((character) => (
          <a key={character.id} href="teste">
            <div>
              <strong>{character.name}</strong>
            </div>

            {/* <img src={character.thumbnail} alt="Thumbanil Personagem" /> */}
          </a>
        ))}
      </Comics>
    </>
  );
};

export default Dashboard;
