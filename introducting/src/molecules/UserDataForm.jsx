import React from 'react';
import Input from '../atoms/Input';
import { FormProvider as Data, FormContext } from '../contexts/Form';


const UserDataForm = () => {
  const onSubmit = (inputs) => {
    console.log(inputs);
  };

  return (
    <Data onSubmit={onSubmit}>
      <Input context={FormContext} name="username" />
      <Input context={FormContext} name="email" />
      <button type="submit">Submit</button>
    </Data>
  );
};

export default UserDataForm;
