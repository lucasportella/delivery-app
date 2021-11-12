import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Context from '../context/Context';
import api from '../api';

const RegisterButton = () => {
  const { registerData } = useContext(Context);
  const [redirect, setRedirect] = useState(false);
  const [isError, setIsError] = useState(false);
  const nameMinLength = 12;
  const passwordMinLength = 6;
  const emailRegex = /^[_.a-z0-9-]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const isEmailValid = emailRegex.test(registerData.email);
  const isValidName = registerData.name.length >= nameMinLength;
  const isValidPassword = registerData.password.length >= passwordMinLength;
  const isDisabled = !(isValidName && isEmailValid && isValidPassword);

  const handleSubmit = async () => {
    try {
      const result = await api.register(registerData);
      if (result.statusText === 'Created') {
        setRedirect(!redirect);
      }
    } catch (error) {
      console.log('cheguei aqui');
      setIsError(!isError);
    }
  };

  return (
    <div>
      {redirect && <Navigate to="/customer/products" />}
      <button
        data-testid="common_register__button-register"
        type="button"
        disabled={ isDisabled }
        onClick={ handleSubmit }
      >
        Cadastrar

      </button>
      { isError
        && (
          <p data-testid="common_register__element-invalid_register">
            Erro ao registrar usuário
          </p>
        )}
    </div>
  );
};

export default RegisterButton;