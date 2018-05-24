import axios from 'axios';
import history from './../utils/history';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=eltongarbin';

export const FETCH_POSTS = 'FETCH_POSTS';
export function fetchPosts() {
  return async (dispatch) => {
    const { data } = await axios.get(`${ROOT_URL}/posts${API_KEY}`);

    dispatch({
      type: FETCH_POSTS,
      payload: data
    });
  };
}

export const CREATE_POST = 'CREATE_POST';
export function createPost(values) {
  return async (dispatch) => {
    const { data } = await axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

    dispatch({
      type: CREATE_POST,
      payload: data
    });

    history.push('/');
  };
}

export const FETCH_POST = 'FETCH_POST';
export function fetchPost(id) {
  return async (dispatch) => {
    const { data } = await axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    dispatch({
      type: FETCH_POST,
      payload: data
    });
  };
}

export const DELETE_POST = 'DELETE_POST';
export function deletePost(id) {
  return async (dispatch) => {
    await axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

    dispatch({
      type: DELETE_POST,
      payload: id
    });

    history.push('/');
  };
}
