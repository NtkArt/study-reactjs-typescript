import dotenv from 'dotenv';

dotenv.config();

const keys = {
  api_key: '93f84176b7c2f0f093abb178c8c4c8d3' || process.env.REACT_APP_API_KEY,
  hash: '93c39560314efc324aac58702627c92f' || process.env.REACT_APP_HASH,
};

export default keys;
