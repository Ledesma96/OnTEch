import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn9uvdD5C7yA7zQX18XsVwu4BJnL0BmeI",
  authDomain: "ontech-cc12b.firebaseapp.com",
  projectId: "ontech-cc12b",
  storageBucket: "ontech-cc12b.appspot.com",
  messagingSenderId: "520541890187",
  appId: "1:520541890187:web:9a520b135cf07722c6568e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
