import React from 'react';
import UserDataForm from '../molecules/UserDataForm';
import styled, { keyframes } from 'styled-components';

import Input from '../atoms/Input';
import { FormContext, FormProvider } from '../contexts/Form';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  border: 1px solid #e0e0e0;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};

  input {
    border: 1px solid red;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

const WrapperLarge = styled(Wrapper)`
  padding: 30px;
  ${props => props.margin ? `margin-bottom: ${props.margin}px;` : ''}
`;

const WrapperLite = styled(Wrapper)`
  padding: 10px;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  padding: 5px 10px;
  color: #333;
  background: #e0e0e0;
`;

const StyledInput = styled(Input)`
  padding: 5px 10px;
  border: 2px dashed #999;
  height: 50px;
  font-size: 16px;
  animation: ${rotate} 2s linear infinite;
`;

const Settings = () => {
  return (
    <FormProvider>
      <WrapperLite>
        <UserDataForm />
        <WrapperLarge margin="10" >
          Przykładowy tekst
        </WrapperLarge>
      </WrapperLite>
      <StyledButton onClick={() => { console.log('Kliknięty') }}>
        kliknij mnie!
      </StyledButton>
      <StyledInput context={FormContext} name="email" />
    </FormProvider>
  );
};

export default Settings;
