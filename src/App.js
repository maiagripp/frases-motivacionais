import FraseMotivacional from './components/FraseMotivacional';
import './App.css';

const App = () => {
  const frases = [
    {
      texto: 'A vingança nunca é plena, mata a alma e envenena',
      autor: 'Seu Madruga',
      criadaEm: new Date(2021, 5, 15),
    },
    {
      texto: 'Camarão que dorme a onda leva',
      autor: 'Zeca Pagodinho',
      criadaEm: new Date(2021, 5, 14),
    },
    {
      texto:
        '- Doi né? - O que? - deitar no sofá e lembrar que esqueceu o controle.',
      autor: 'Autor desconhecido',
      criadaEm: new Date(2021, 5, 13),
    },
  ];
  return (
    <div className="container">
      <h1>Frases Motivacionais para alegrar seu dia</h1>
      <FraseMotivacional
        frase={frases[0].texto}
        autor={frases[0].autor}
        criadaEm={frases[0].criadaEm}
      />
      <FraseMotivacional
        frase={frases[1].texto}
        autor={frases[1].autor}
        criadaEm={frases[1].criadaEm}
      />
      <FraseMotivacional
        frase={frases[2].texto}
        autor={frases[2].autor}
        criadaEm={frases[2].criadaEm}
      />
    </div>
  );
};

export default App;
