import { DataState, ShowServicesProp } from '../types';
import Service from './Service';

function ShowServices({ DataSet, SetStoreData }: ShowServicesProp) {
  function handleClick(index: number) {
    SetStoreData(DataSet.filter((_: DataState, index2: number) => index2 !== index));
  }

  return (
    <>
      {DataSet.map((data, index) => {
        return (
          <Service
            key={ data.login }
            Info={ {
              ...data, index, handleClick,
            } }
          />
        );
      })}
    </>
  );
}

export default ShowServices;
