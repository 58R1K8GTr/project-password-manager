import { RegisterNewPasswordProp } from '../types';

function RegisterNewPassword(
  { SetRegisterClicked, RegisterClicked }: RegisterNewPasswordProp,
) {
  return (
    !RegisterClicked && (
      <button
        id="register"
        onClick={ () => SetRegisterClicked(true) }
      >
        Cadastrar nova senha
      </button>
    )
  );
}

export default RegisterNewPassword;
