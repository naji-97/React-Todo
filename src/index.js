import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './TodoApp';
import './styles/app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or sed to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
