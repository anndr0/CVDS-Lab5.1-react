import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/hello');

        const data = response.headers.get('Content-Type')?.includes('application/json')
          ? await response.json()
          : await response.text();

        setMessage(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Hola! Este es nuestro laboratorio 5.1</h2>
          <p>{message}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
