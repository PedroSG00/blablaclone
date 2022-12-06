import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { MessageProviderWrapper } from './context/userMessage.context';
import { AuthProviderWrapper } from './context/auth.context';
import { ModalProviderWrapper } from './context/showModal.context'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProviderWrapper>
      <MessageProviderWrapper>
        <ModalProviderWrapper>
          <Router>
            <App />
          </Router>
        </ModalProviderWrapper>
      </MessageProviderWrapper>
    </AuthProviderWrapper>


  </React.StrictMode >
);

