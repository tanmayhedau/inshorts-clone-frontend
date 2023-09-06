import axios from 'axios'

export const getNews = async () => {
  try {
    const URL = 'https://inshorts-clone-backend-8ltv.onrender.com';
    return await axios.get(`${URL}/news`);
  } catch (error) {
    console.log(error)
  }
}