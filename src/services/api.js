import axios from 'axios';
import { Notify } from 'notiflix';

const API_KEY = '39899742-de5fd769b68a5bc4e589c2cf0';
axios.defaults.baseURL = 'https://pixabay.com/api';

axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export async function getImages(query, page) {
  try {
    const { data } = await axios(`/?q=${query}&page=${page}`);
    return data;
  } catch (error) {
    //! наскільки доречно в кетч викликати нотіфікацію?
    Notify.failure(error.message);
  }
}
