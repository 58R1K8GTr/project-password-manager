function Form() {
  return (
    <>
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
      <button id="register">Cadastrar</button>
      <button id="cancel">Cancelar</button>
    </>
  );
}

export default Form;
