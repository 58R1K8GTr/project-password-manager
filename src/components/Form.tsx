import { FormProp, ReactChangeInput } from '../types';

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
    <form onSubmit={ (event) => event.preventDefault() }>
      <label htmlFor="serviceName">
        Nome do serviço
        <input
          value={ DataState.serviceName }
          onChange={ handleChange }
          type="text"
          id="serviceName"
        />
      </label>
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
          type="password"
          name="password"
          id="password"
        />
      </label>
      <label htmlFor="url">
        URL
        <input
          value={ DataState.url }
          onChange={ handleChange }
          type="text"
          id="url"
        />
      </label>
      <button
        disabled={ areTheFieldsCorrect() }
        onClick={ handleRegister }
      >
        Cadastrar
      </button>
      <button
        id="cancel"
        onClick={ () => SetRegisterClicked(false) }
      >
        Cancelar
      </button>
    </form>
  );
}

export default Form;
