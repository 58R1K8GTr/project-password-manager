import { useState } from 'react';
import { ServiceProp } from '../../types';
import './Service.css';

function Service({ Info }: ServiceProp) {
  const {
    login,
    url,
    serviceName,
    password,
    index,
    handleClick,
  } = Info;
  const [checked, setChecked] = useState(false);

  function handleChange(checkedParam: boolean) {
    setChecked(checkedParam);
  }

  return (
    <div className="service" key={ login }>
      <a href={ url }>{ serviceName }</a>
      <p>{ login }</p>
      <p>{ checked ? '******' : password }</p>
      <label htmlFor={ `checkbox${index}` }>
        Esconder senhas
        <input
          id={ `checkbox${index}` }
          type="checkbox"
          checked={ checked }
          onChange={ ({ target }) => handleChange(target.checked) }
        />
      </label>
      <button
        data-testid="remove-btn"
        onClick={ () => handleClick(index) }
      >
        Remover
      </button>
    </div>
  );
}

export default Service;
