import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import RegisterNewPassword from './components/RegisterNewPassword';

function App() {
  const [registerClicked, setRegisterClicked] = useState(false);
  return (
    <>
      <h1>Gerenciador de senhas</h1>
      { registerClicked && <Form setRegisterClicked={ setRegisterClicked } /> }
      <RegisterNewPassword
        setRegisterClicked={ setRegisterClicked }
        registerClicked={ registerClicked }
      />
    </>
  );
}

export default App;
