import React, { useState, useCallback, useMemo } from 'react';

export const FormContext = React.createContext();

// const addData = (a, b) => { return a + b }; 

export const FormProvider = ({ children, onSubmit }) => {
  const [inputs, setInputs] = useState({});
  const [isSubbmiting, setIsSubmitting] = useState(false);
  // const [expensiveValues, setExpensiveValues] = useState([1, 2]);


  const setInputsValueCallback = useCallback(
    ({ name, value }) => {
      setInputs((state) => ({
        ...state,
        [name]: value,
      }));
    },
    []
  );

  // const memoizedData = useMemo(
  //   () => addData(expensiveValues[0], expensiveValues[1]),
  //   [expensiveValues],
  // );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubmit(inputs);
    setIsSubmitting(false);
  };

  return (
    <FormContext.Provider value={{ inputs: { ...inputs }, isSubbmiting, setInputsValue: setInputsValueCallback }}>
      <form onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  )
}