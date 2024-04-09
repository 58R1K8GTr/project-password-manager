import { ShowServicesProp } from '../types';

function ShowServices({ DataSet }: ShowServicesProp) {
  return (
    <>
      {DataSet.map((data) => {
        const { serviceName, login, password, url } = data;
        return (
          <div key={ login }>
            <a href={ url }>{ serviceName }</a>
            <p>{ login }</p>
            <p>{ password }</p>
          </div>
        );
      })}
    </>
  );
}

export default ShowServices;
