import { useState } from 'react';
import { FormProp, ReactChangeInput } from '../../types';
import './Form.css';

function Form(
  {
    SetRegisterClicked,
    SetDataState,
    DataState,
    SetStoreData,
  }: FormProp,
) {
  const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  function areTheFieldsCorrect() {
    const errors = [
      !DataState.serviceName,
      !DataState.login,
      DataState.password.length < 8,
      DataState.password.length > 16,
      !/[a-zA-Z]+/.test(DataState.password),
      !/[\d]+/.test(DataState.password),
      !DataState.password.split('').some((character) => punctuation.includes(character)),
    ];
    return errors.some((error) => error);
  }
  const [showPassword, setShowPassword] = useState('password');

  function handleClick() {
    setShowPassword((prevState) => {
      console.log(prevState);
      return (prevState === 'password' ? 'text' : 'password');
    });
  }

  function handleChange({ target }: ReactChangeInput) {
    SetDataState((oldState) => ({ ...oldState, [target.id]: target.value }));
  }

  function handleRegister() {
    SetStoreData((prevState) => [...prevState, DataState]);
    SetRegisterClicked(false);
    SetDataState({
      serviceName: '',
      login: '',
      password: '',
      url: '',
    });
  }

  return (
    <form onSubmit={ (event) => event.preventDefault() } className="form">
      <label htmlFor="serviceName">
        Nome do serviço
        <input
          value={ DataState.serviceName }
          onChange={ handleChange }
          type="text"
          id="serviceName"
        />
      </label>
      <div className="register-login">
        <label htmlFor="login">
          Login
          <input
            value={ DataState.login }
            onChange={ handleChange }
            type="text"
            id="login"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            value={ DataState.password }
            onChange={ handleChange }
            type={ showPassword }
            name="password"
            id="password"
          />
        </label>
        <button
          className="gray square-button"
          onClick={ handleClick }
          data-testid="show-hide-form-password"
        >
          Ocultar senha
        </button>
      </div>
      <label htmlFor="url">
        URL
        <input
          value={ DataState.url }
          onChange={ handleChange }
          type="text"
          id="url"
        />
      </label>
      <div className="register-buttons">
        <button
          className="blue"
          disabled={ areTheFieldsCorrect() }
          onClick={ handleRegister }
        >
          Cadastrar
        </button>
        <button
          className="cancel-button"
          onClick={ () => SetRegisterClicked(false) }
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default Form;
