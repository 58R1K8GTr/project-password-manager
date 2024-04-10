import { RegisterNewPasswordProp } from '../../types';
import './RegisterNewPassword.css';

function RegisterNewPassword(
  { SetRegisterClicked, RegisterClicked }: RegisterNewPasswordProp,
) {
  return (
    !RegisterClicked && (
      <button
        className="blue"
        id="register"
        onClick={ () => SetRegisterClicked(true) }
      >
        Cadastrar nova senha
      </button>
    )
  );
}

export default RegisterNewPassword;
