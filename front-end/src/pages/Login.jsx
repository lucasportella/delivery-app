import React, { useEffect, useState } from 'react';
// import Context from './context/Context';

function Login() {
  const [isError] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);
  useEffect(() => {
    const minimalPasswordLength = 6;
    // Verificação de email conseguido através do site do Stackoverflow no link https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const emailValidationRegex = /^[_a-z0-9-]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    // Conseguido a resolução do emailValidationRegex.test atrasvés do site do w3schools
    if (emailValidationRegex.test(email) && password.length >= minimalPasswordLength) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [email, password.length]);
  // const { test } = useContext(Context);

  return (
    <div className="Login">
      <form>
        <input
          type="text"
          placeholder="email@trybeer.com.br"
          data-testId="common_login__input-email"
          onChange={ (e) => setEmail(e.target.value) }
        />
        <input
          type="password"
          placeholder="*****"
          data-testId="common_login__input-password"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button
          type="button"
          disabled={ isDisable }
          data-testid="common_login__button-login"
        >
          LOGIN
        </button>
        <button type="button" data-testId="common_login__button-register">
          Ainda não tenho conta
        </button>
      </form>
      { isError && (
        <h1 data-testId="common_login__element-invalid-email">
          Um Erro qualquer :)
        </h1>
      ) }
    </div>
  );
}

export default Login;
