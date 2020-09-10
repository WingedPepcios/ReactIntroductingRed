import React, { useState, useReducer, useRef } from 'react';

const initState = {
  userName: 'Test',
  email: 'test@test.com',
  avatar: 'somelink.png',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return { count: state.count + 1 }
    case 'DECREMENT': 
      return { count: state.count - 1 }
    default:
      return state;
  }
}

const reduceUser = (state, action) => {
  switch (action.type) {
    case 'UPDATE': 
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
};

const Dashboard = () => {
  const [state, setstate] = useState('asdasd');

  const [stateReducer, dispatch] = useReducer(reducer, { count: 0 });
  const [userState, dispatchUser] = useReducer(reduceUser, initState);

  const inputRef = useRef('Test');
  const cosRef = useRef({});

  console.log(cosRef)
  // cosRef.current = null;

  cosRef.current.mojeBzedty = 'Tak to są bzdety';

  console.log(inputRef)

  return (
    <div>
      <div>Licznik: <strong>{stateReducer.count}</strong></div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Zwiększ wartośc</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Zmniejsz wartośc</button>
      <br />
      <br />
      <br />
      <div>
        <div>Name: {userState.userName}</div>
        <div>Email: {userState.email}</div>
        <div>Avatar: {userState.avatar}</div>
        <input defaultValue={userState.userName} onChange={(e) => dispatchUser({ type: 'UPDATE', payload: { userName: e.target.value } })} />
        <input defaultValue={userState.email} onChange={(e) => dispatchUser({ type: 'UPDATE', payload: { email: e.target.value } })} />
        <input defaultValue={userState.avatar} onChange={(e) => dispatchUser({ type: 'UPDATE', payload: { avatar: e.target.value } })} />
      </div>
      <br />
      <br />
      <br />
      <input ref={inputRef} />
      <button onClick={() => {console.log(inputRef.current.value)}}>Klik</button>
    </div>
  );
};

export default Dashboard;
