import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <Title>Marvel Comics</Title>
    <Form action="">
      <input type="text" placeholder="Digite aqui o nome da HQ" />
      <button type="submit">Pesquisar HQ</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://i.annihil.us/u/prod/marvel/i/mg/6/60/5ff32d1157a75/clean.jpg"
          alt="Capa da Comic"
        />

        <div>
          <strong>Iron man</strong>
          <p>
            THE FIRST ACT OF “THE BOOKS OF KORVAC” REACHES ITS STUNNING
            CONCLUSION! It’s put up or shut up time with KORVAC as the android
            mastermind begins the next phase of his ascent toward absolute
            power, and IRON MAN begrudgingly decides to finally ask for help.
          </p>
        </div>
        <FiChevronRight size={300} />
      </a>
      <a href="teste">
        <img
          src="https://i.annihil.us/u/prod/marvel/i/mg/6/60/5ff32d1157a75/clean.jpg"
          alt="Capa da Comic"
        />

        <div>
          <strong>Iron man</strong>
          <p>
            THE FIRST ACT OF “THE BOOKS OF KORVAC” REACHES ITS STUNNING
            CONCLUSION! It’s put up or shut up time with KORVAC as the android
            mastermind begins the next phase of his ascent toward absolute
            power, and IRON MAN begrudgingly decides to finally ask for help.
          </p>
        </div>
        <FiChevronRight size={300} />
      </a>
      <a href="teste">
        <img
          src="https://i.annihil.us/u/prod/marvel/i/mg/6/60/5ff32d1157a75/clean.jpg"
          alt="Capa da Comic"
        />

        <div>
          <strong>Iron man</strong>
          <p>
            THE FIRST ACT OF “THE BOOKS OF KORVAC” REACHES ITS STUNNING
            CONCLUSION! It’s put up or shut up time with KORVAC as the android
            mastermind begins the next phase of his ascent toward absolute
            power, and IRON MAN begrudgingly decides to finally ask for help.
          </p>
        </div>
        <FiChevronRight size={300} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
