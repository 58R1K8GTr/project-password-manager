import { FormProp } from '../types';

function Form({ setRegisterClicked }: FormProp) {
  return (
    <form onSubmit={ (event) => event.preventDefault() }>
      <label htmlFor="serviceName">
        Nome do serviço
        <input type="text" id="serviceName" />
      </label>
      <label htmlFor="login">
        Login
        <input type="text" id="login" />
      </label>
      <label htmlFor="password">
        Senha
        <input type="password" name="password" id="password" />
      </label>
      <label htmlFor="url">
        URL
        <input type="text" id="url" />
      </label>
      <button>Cadastrar</button>
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
