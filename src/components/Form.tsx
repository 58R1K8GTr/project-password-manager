import { useState } from 'react';
import { FormProp, ReactChangeInput } from '../types';

function Form({ setRegisterClicked }: FormProp) {
  const [dataState, setDataState] = useState({
    serviceName: '',
    login: '',
    password: '',
    url: '',
  });

  const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

  function areTheFieldsCorrect() {
    const errors = [
      !dataState.serviceName,
      !dataState.login,
      dataState.password.length < 8,
      dataState.password.length > 16,
      !/[a-zA-Z]+/.test(dataState.password),
      !/[\d]+/.test(dataState.password),
      !dataState.password.split('').some((character) => punctuation.includes(character)),
    ];
    return errors.some((error) => error);
  }

  function handleChange({ target }: ReactChangeInput) {
    setDataState((oldState) => ({ ...oldState, [target.id]: target.value }));
  }

  return (
    <form onSubmit={ (event) => event.preventDefault() }>
      <label htmlFor="serviceName">
        Nome do serviço
        <input
          value={ dataState.serviceName }
          onChange={ handleChange }
          type="text"
          id="serviceName"
        />
      </label>
      <label htmlFor="login">
        Login
        <input
          value={ dataState.login }
          onChange={ handleChange }
          type="text"
          id="login"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          value={ dataState.password }
          onChange={ handleChange }
          type="password"
          name="password"
          id="password"
        />
      </label>
      <label htmlFor="url">
        URL
        <input
          value={ dataState.url }
          onChange={ handleChange }
          type="text"
          id="url"
        />
      </label>
      <button disabled={ areTheFieldsCorrect() }>Cadastrar</button>
      <button
        id="cancel"
        onClick={ () => setRegisterClicked(false) }
      >
        Cancelar
      </button>
    </form>
  );
}

export default Form;
