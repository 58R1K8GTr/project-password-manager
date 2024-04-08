import { RegisterNewPasswordProp } from '../types';

function RegisterNewPassword(
  { setRegisterClicked, registerClicked }: RegisterNewPasswordProp,
) {
  return (
    !registerClicked && (
      <button
        id="register"
        onClick={ () => setRegisterClicked(true) }
      >
        Cadastrar nova senha
      </button>
    )
  );
}

export default RegisterNewPassword;
