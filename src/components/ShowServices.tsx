import { DataState, ShowServicesProp } from '../types';

function ShowServices({ DataSet, SetStoreData }: ShowServicesProp) {
  function handleClick(index: number) {
    SetStoreData(DataSet.filter((_: DataState, index2: number) => index2 !== index));
  }

  return (
    <>
      {DataSet.map((data, index) => {
        const { serviceName, login, password, url } = data;
        return (
          <div key={ login }>
            <a href={ url }>{ serviceName }</a>
            <p>{ login }</p>
            <p>{ password }</p>
            <button
              data-testid="remove-btn"
              onClick={ () => handleClick(index) }
            >
              Remover
            </button>
          </div>
        );
      })}
    </>
  );
}

export default ShowServices;
