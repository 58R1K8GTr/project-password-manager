import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import RegisterNewPassword from './components/RegisterNewPassword';
import ValidationPasswordDisplay from './components/ValidationPasswordDisplay';
import { DataState } from './types';
import ShowServices from './components/ShowServices';

function App() {
  const [registerClicked, setRegisterClicked] = useState(false);
  const [dataState, setDataState] = useState({
    serviceName: '',
    login: '',
    password: '',
    url: '',
  });
  const [storeData, setStoreData] = useState<DataState[]>([]);

  return (
    <>
      <h1>Gerenciador de senhas</h1>
      {
        registerClicked && (
          <>
            <Form
              SetRegisterClicked={ setRegisterClicked }
              SetDataState={ setDataState }
              DataState={ dataState }
              SetStoreData={ setStoreData }
            />
            <ValidationPasswordDisplay DataState={ dataState } />
          </>
        )
      }
      <RegisterNewPassword
        SetRegisterClicked={ setRegisterClicked }
        RegisterClicked={ registerClicked }
      />
      {
        storeData.length === 0 && !registerClicked
          ? <p>Nenhuma senha cadastrada</p>
          : <ShowServices DataSet={ storeData } />
      }
    </>
  );
}

export default App;
