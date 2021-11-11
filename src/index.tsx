import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import chinchilla from 'components/chinchilla.png'

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
    <title>チンチラタイマー</title>
    <meta
      name="description"
      content="チンチラの可愛いタイマー！1分、3分、5分が測れます。"
    />
    <meta property="og:title" content="チンチラタイマー" />
    <meta
      property="og:description"
      content="チンチラの可愛いタイマー！1分、3分、5分が測れます。"
    />
    <meta property="og:url" content="https://timer-c541d.web.app" />
    <meta property="og:image" content={chinchilla} />
    <meta property="og:type" content="website" />
    <meta name="twitter:site" content="@fumina_twinsmom" />
    <meta name="twitter:image" content={chinchilla} />
    <meta name="twitter:card" content={chinchilla} />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" href="/android-chrome-192x192.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins&display=swap"
      rel="stylesheet"
    />{' '}
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
