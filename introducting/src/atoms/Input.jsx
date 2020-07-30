import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Input = ({ context, name }) => {
  const { setInputsValue } = useContext(context);
  const [value, setValue] = useState('');

  useEffect(
    () => {
      setInputsValue({ name, value });
    },
    [value],
  )


  return (
    <input value={value} onChange={(e) => setValue(e.target.value )} />
  );
};

export default Input;
