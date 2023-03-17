const axios = require("axios");
const access_key = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const secret_key = process.env.REACT_APP_UNSPLASH_SECRET_KEY;

const fetchImages = async () => {
  const { data } = await axios.get(`https://api.unsplash.com/photos/random?client_id=${access_key}&count=5`);
  return data;
};

export default fetchImages;
