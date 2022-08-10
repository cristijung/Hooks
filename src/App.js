import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import ComprasList from './componente/ComprasList';

export default function App() {
  const [loading, setLoading] = useState(false);
        
  useEffect(() => {
    if (loading) {
      window.location.reload();
    } else {
      alert('A página não está atualizada');
    }
  }, [loading]);

  return (
    <div className="App">
      <h1>Lista de Compras</h1>
      <hr />
      <h2>Usando Hooks e Hooks Personalizados</h2>  
      <ComprasList/> 
      <button type="button" onClick={() => setLoading(true)}>Recarregar Página</button>
         
    </div>
  );
}
