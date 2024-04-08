type ReactSetBoolean = React.Dispatch<React.SetStateAction<boolean>>;

export type RegisterNewPasswordProp = {
  SetRegisterClicked: ReactSetBoolean;
  RegisterClicked: boolean;
};

// type ReactSetBooleanList = React.Dispatch<React.SetStateAction<boolean[]>>;

type DataState = {
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
};

export type ReactChangeInput = React.ChangeEvent<HTMLInputElement>;

export type ValidationPasswordDisplayProp = {
  DataState: DataState;
};
