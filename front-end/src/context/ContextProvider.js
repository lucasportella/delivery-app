import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const ContextProvider = ({ children }) => {
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
  const [userEmail, setUserEmail] = useState('');
  const [userData, setUserData] = useState(false);
  const [quantityProducts, setQuantityProducs] = useState({});

  const handleChange = ({ target: { value, name } }) => {
    setRegisterData({ ...registerData, [name]: value });
  };

  const contextValue = {
    registerData,
    setRegisterData,
    handleChange,
    userEmail,
    setUserEmail,
    userData,
    setUserData,
    quantityProducts,
    setQuantityProducs,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
