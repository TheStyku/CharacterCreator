import React from 'react';
import { Link } from 'react-router-dom';

function Front({ setView }) {
  const handleChange = () => {
    setView('hello');
  };
  return (
    <>
      <h1 className="m1"> Witam w kreatorze postaci</h1>
      <p className="m1"> Są do wyboru dwie opcie </p>
      <Link to="creator" className="btn-login"> Darmowa wersja
      </Link>
      <p className="small-text">Brak mozliwości edycji i zapisywania postaci</p>
      <button className="btn" onClick={handleChange}>
        Zaloguj się{' '}
      </button>
      <button className="btn-text small-text bottom-text">
        Jeśli nie masz konta zajerestruj się
      </button>
    </>
  );
}

export default Front;
