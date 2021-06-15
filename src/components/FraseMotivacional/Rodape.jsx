const Rodape = (props) => {
  const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const data = props.criadaEm.toLocaleString('pt-BR', opcoes);

  return (
    <>
      <p>{props.autor}</p>
      <p>
        <strong>Postado em: {data}</strong>
      </p>
    </>
  );
};

export default Rodape;
