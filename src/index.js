import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'

// export const server = "http://localhost:4000/api";
export const server = "https://razorpay-htgs.onrender.com/api";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  // </React.StrictMode>
);


