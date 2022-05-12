import './style.css';
export const List = ({ data, render }) => {
  return <ul>{data.map(render)}</ul>;
};

//Al componente list le pasamos los datos en array
//Con render le decimos que queremos hacer con ese juego,
//se le llama render por que cada elemento que le pasemos se renderiza
