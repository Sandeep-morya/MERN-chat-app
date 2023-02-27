import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./global.css"
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </BrowserRouter>
)