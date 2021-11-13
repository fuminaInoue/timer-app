import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import chinchilla from 'chinchilla.png'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // @ts-ignore
  apiKey: 'AIzaSyBQhyrZIj6-jO7mtoT5bAbAkMc7F1dNEtY',
  authDomain: 'timer-c541d.firebaseapp.com',
  projectId: 'timer-c541d',
  storageBucket: 'timer-c541d.appspot.com',
  messagingSenderId: '408310029863',
  appId: '1:408310029863:web:2e789c730a6827f1877802',
  measurementId: 'G-B7447DPN94',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
