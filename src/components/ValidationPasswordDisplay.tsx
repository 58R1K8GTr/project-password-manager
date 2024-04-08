import { ValidationPasswordDisplayProp } from '../types';

function ValidationPasswordDisplay({ DataState }: ValidationPasswordDisplayProp) {
  const messages = [
    'Possuir 8 ou mais caracteres',
    'Possuir até 16 caracteres',
    'Possuir letras e números',
    'Possuir algum caractere especial',
  ];

  const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

  const alphaNumeric = (
    /[a-zA-Z]+/.test(DataState.password)
    && /[\d]+/.test(DataState.password)
  );
  const errors = [
    DataState.password.length >= 8,
    DataState.password.length <= 16,
    alphaNumeric,
    DataState.password.split('').some((character) => punctuation.includes(character)),
  ];

  return (
    <>
      {
        messages.map((error, index) => {
          return (
            <span
              key={ error }
              className={
                errors[index]
                  ? 'valid-password-check'
                  : 'invalid-password-check'
              }
            >
              { error }
            </span>
          );
        })
      }
    </>
  );
}

export default ValidationPasswordDisplay;
