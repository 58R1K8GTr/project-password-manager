import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import RegisterNewPassword from './components/RegisterNewPassword';
import ValidationPasswordDisplay from './components/ValidationPasswordDisplay';

function App() {
  const [registerClicked, setRegisterClicked] = useState(false);
  // const [booleanErrors, setBooleanErrors] = useState<boolean[]>([]);
  const [dataState, setDataState] = useState({
    serviceName: '',
    login: '',
    password: '',
    url: '',
  });

  return (
    <>
      <h1>Gerenciador de senhas</h1>
      {
        registerClicked && (
          <Form
            SetRegisterClicked={ setRegisterClicked }
            SetDataState={ setDataState }
            DataState={ dataState }
          />
        )
      }
      <RegisterNewPassword
        SetRegisterClicked={ setRegisterClicked }
        RegisterClicked={ registerClicked }
      />
      {
        registerClicked && (
          <ValidationPasswordDisplay DataState={ dataState } />
        )
      }
    </>
  );
}

export default App;
