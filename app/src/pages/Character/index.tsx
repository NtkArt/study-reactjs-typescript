import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Header, CharacterInfo, Chars } from './styles';

import logoImg from '../../assets/LogoAgents.svg';

interface CharacterParams {
  character: string;
}

const Character: React.FC = () => {
  const { params } = useRouteMatch<CharacterParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Marvel Logo" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>

      <CharacterInfo>
        <header>
          <img
            src="http://i.annihil.us/u/prod/marvel/i/mg/8/b0/4c00393a4cb7c"
            alt="Marvel"
          />
        </header>
        <ul>
          <li>
            <strong>Nome</strong>
            <span>Descricao</span>
          </li>
        </ul>
      </CharacterInfo>

      <Chars>
        <Link to="teste">
          <div>
            <strong>character.name</strong>
            <p>character.description</p>
          </div>
        </Link>
      </Chars>
    </>
  );
};

export default Character;
