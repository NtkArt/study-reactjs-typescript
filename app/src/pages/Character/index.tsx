import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface CharacterParams {
  character: string;
}

const Character: React.FC = () => {
  const { params } = useRouteMatch<CharacterParams>();

  return (
    <h1>
      Character:
      {params.character}
    </h1>
  );
};

export default Character;
