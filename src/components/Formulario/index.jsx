import { useState } from 'react';
import './style.css';

const Formulario = ({ aoSalvar }) => {
  const [autor, setAutor] = useState('');
  const [texto, setTexto] = useState('');

  const manipuladorAutor = (evento) => {
    if (evento.target.value.split(' ').length <= 2) {
      setAutor(evento.target.value);
    }
  };
  const manipuladorTexto = (evento) => {
    setTexto(evento.target.value);
  };
  const salvar = (evento) => {
    evento.preventDefault();
    const frase = {};
    frase.autor = autor;
    frase.texto = texto;
    aoSalvar(frase);
    setAutor('');
    setTexto('');
  };

  return (
    <form onSubmit={salvar}>
      <div className="formulario">
        <label>Autor</label>
        <input value={autor} onChange={manipuladorAutor} required />
      </div>
      <div className="formulario">
        <label>Texto</label>
        <textarea value={texto} onChange={manipuladorTexto} required></textarea>
      </div>
      <button>Salvar</button>
    </form>
  );
};

export default Formulario;
