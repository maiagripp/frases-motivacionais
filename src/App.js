import FraseMotivacional from './components/FraseMotivacional';

function App() {
  const frases = [
    {
      texto: 'A vingança nunca é plena, mata a alma e envenena',
      autor: 'Seu Madruga',
    },
    {
      texto: 'Camarão que dorme a onda leva',
      autor: 'Zeca Pagodinho',
    },
    {
      texto:
        '- Doi né? - O que? - deitar no sofá e lembrar que esqueceu o controle.',
      autor: 'Autor desconhecido',
    },
  ];
  return (
    <div>
      <h1>Frases Motivacionais para alegrar seu dia</h1>
      <FraseMotivacional frase={frases[0].texto} autor={frases[0].autor} />
      <FraseMotivacional frase={frases[1].texto} autor={frases[1].autor} />
      <FraseMotivacional frase={frases[2].texto} autor={frases[2].autor} />
    </div>
  );
}

export default App;
