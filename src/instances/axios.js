import axios from 'axios';
import Constants from "expo-constants";

const { manifest } = Constants;

const uri = `https://grzz-backend.herokuapp.com/`;
const instance = axios.create({
    baseURL: uri,
    withCredentials: false,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
  });
  export default instance;
  