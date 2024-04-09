type ReactSetBoolean = React.Dispatch<React.SetStateAction<boolean>>;

export type RegisterNewPasswordProp = {
  SetRegisterClicked: ReactSetBoolean;
  RegisterClicked: boolean;
};

export type DataState = {
  serviceName: string,
  login: string,
  password: string,
  url: string,
};

type SetDataState = React.Dispatch<React.SetStateAction<DataState>>;

export type FormProp = {
  SetRegisterClicked: ReactSetBoolean;
  SetDataState: SetDataState;
  DataState: DataState;
  SetStoreData: React.Dispatch<React.SetStateAction<DataState[]>>;
};

export type ReactChangeInput = React.ChangeEvent<HTMLInputElement>;

export type ValidationPasswordDisplayProp = {
  DataState: DataState;
};

export type ShowServicesProp = {
  DataSet: DataState[];
};
