import FraseMotivacional from './components/FraseMotivacional';
import './App.css';
import { useState } from 'react';
import Formulario from './components/Formulario';

const App = () => {
  const [frases, setFrases] = useState([]);

  const adicionaFrase = (frase) => {
    frase.criadaEm = new Date();
    setFrases([frase, ...frases]);
  };

  return (
    <div className="container">
      <h1>Frases Motivacionais para alegrar seu dia</h1>

      <Formulario aoSalvar={adicionaFrase} />

      {frases.map((frase, indice) => (
        <FraseMotivacional
          key={indice}
          frase={frase.texto}
          autor={frase.autor}
          criadaEm={frase.criadaEm}
        />
      ))}
    </div>
  );
};

export default App;
