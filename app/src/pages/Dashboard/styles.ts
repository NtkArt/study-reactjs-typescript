import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 460px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 900px;

  display: flex;

  input {
    flex: 1;
    height: 40px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    background: #ffffff;
    color: black;

    &:hover {
      background: #dedede;
    }

    &::placeholder {
      color: black;
    }

    &:focus {
      background: #dedede;
    }
  }

  button {
    width: 210px;
    height: 40px;
    background: #f0131e;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #ffffff;
    font-weight: bold;
    transition: background-color 0.4s;

    &:hover {
      background: ${shade(0.2, '#f0131e')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 900px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.4s;

    & + a {
      margin-top: 20px;
    }

    &:hover {
      cursor: pointer;
      transform: translateX(10px);
    }

    img {
      width: 200px;
      height: 250px;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #504a4a;
      }

      p {
        font-size: 18px;
        color: #5e5e5e;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #504a4a;
    }
  }
`;
