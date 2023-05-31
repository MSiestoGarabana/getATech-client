import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProviderWrapper } from './contexts/auth.contexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProviderWrapper>
        <Router>
            <App />
        </Router>
    </AuthProviderWrapper>
);

