import React from 'react';

const FormContext = React.createContext();

const initState = {
  userName: 'Test',
  email: 'test@test.com',
  avatar: 'somelink.png',
}

const FormRefProvider = ({ children }) => {
  const inputs = React.useRef(initState);

  const submit = () => {

  }

  return (
    <FormContext.Provider value={inputs}>
      {children}
    </FormContext.Provider>
  );
};

export default FormRefProvider;


const Form = () => {
  const inputsCurrent = React.useContext(FormContext);


  return (
    <div>
      <input defaultValue={inputsCurrent.current.userName} onChange={(e) => { inputsCurrent.current.userName = e.target.value } } />
      <input defaultValue={inputsCurrent.current.email} />
      <input defaultValue={inputsCurrent.current.avatar} />
    </div>
  )
}


const FakeApp = () => {
  return (
    <FormRefProvider>
      <Form />
    </FormRefProvider>
  )
};