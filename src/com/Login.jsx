import React from 'react';

function Login() {
  return (
    <>
      <form className="form">
        <p className="m1"> Zaloguj się</p>
        <label for="Login">
          <p className="form-text">Login</p>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            placeholder="Podaj nazwe użytkownika"
          />
        </label>
        <label for="Password">
          <p className="form-text">Hasło</p>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            placeholder="Podaj hasło"
          />
        </label>

        <button className="btn-form">Zaloguj się </button>
      </form>
    </>
  );
}

export default Login;
