import axios from 'axios'
import Cookies from 'js-cookie'
import { useContext } from 'react'
import { DataContext } from './context/DataContext'

const token = Cookies.get("user_data") ? JSON.parse(Cookies.get("user_data")).token : []

const authApi = axios.create({
  baseURL: 'https://way-farer-sord.onrender.com/',
  headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`
  }
})


const api = axios.create({
    baseURL: 'https://way-farer-sord.onrender.com/',
    headers: {
        'content-type': 'application/json'
    }
})

export { authApi, api }

