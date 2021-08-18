import { useState } from 'react';

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [wasTouched, setWasTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && wasTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputTouchedHandler = () => {
    setWasTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setWasTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    inputTouchedHandler,
    inputChangeHandler,
    reset
  };
};

export default useInput;