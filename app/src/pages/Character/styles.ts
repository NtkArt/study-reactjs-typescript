import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    transition: color 0.3s;

    &:hover {
      color: #f0131e;
    }
  }

  img {
    max-height: 80px;
    border-radius: 50%;
  }
`;

export const CharacterInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      max-width: 120px;
      max-height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #363d4d;
      }

      p {
        font-size: 18px;
        color: #f0131e;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 26px;
        color: #f0131e;
      }

      span {
        display: block;
        margin-top: 3px;
        color: #000;
      }
    }
  }
`;

export const Chars = styled.div`
  margin-top: 80px;

  a {
    background: #d16666;
    border-radius: 5px;
    width: 30%;
    padding: 24px;
    display: block;
    float: left;
    text-decoration: none;
    box-shadow: 5px 10px 5px 1px #333232;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s;

    margin: 0 10px 15px 20px;

    &:hover {
      cursor: pointer;
      transform: translateX(10px);
    }

    @media only screen and (max-width: 600px) {
      img {
        max-width: 100px;
        height: 150px;
      }
    }

    div {
      margin-bottom: 10px;
      strong {
        font-size: 20px;
        color: #000;
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
