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
  apiKey: "AIzaSyBi2ioICfmcrnIcNn2q3H2-XJSTgCpevcc",
  authDomain: "ontech-be322.firebaseapp.com",
  projectId: "ontech-be322",
  storageBucket: "ontech-be322.appspot.com",
  messagingSenderId: "460565419211",
  appId: "1:460565419211:web:dcf383f79bdc6d96c9774e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
