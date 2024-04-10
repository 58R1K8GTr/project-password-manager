import { useState } from 'react';
import Form from '../Form';
import RegisterNewPassword from '../RegisterNewPassword';
import ValidationPasswordDisplay from '../ValidationPassword';
import { DataState } from '../../types';
import ShowServices from '../ShowServices';
import './FormRender.css';

function FormRender() {
  const [registerClicked, setRegisterClicked] = useState(false);
  const [dataState, setDataState] = useState({
    serviceName: '',
    login: '',
    password: '',
    url: '',
  });
  const [storeData, setStoreData] = useState<DataState[]>([]);
  return (
    <main>
      <h1>Gerenciador de senhas</h1>
      {
        registerClicked && (
          <div className="form-group">
            <Form
              SetRegisterClicked={ setRegisterClicked }
              SetDataState={ setDataState }
              DataState={ dataState }
              SetStoreData={ setStoreData }
            />
            <ValidationPasswordDisplay DataState={ dataState } />
          </div>
        )
      }
      <RegisterNewPassword
        SetRegisterClicked={ setRegisterClicked }
        RegisterClicked={ registerClicked }
      />
      <div className="line" />
      {
        storeData.length === 0
          ? <p>Nenhuma senha cadastrada</p>
          : <ShowServices
              DataSet={ storeData }
              SetStoreData={ setStoreData }
          />
      }
    </main>
  );
}

export default FormRender;
