import React from 'react';

import Button from './atoms/Button';
import Dumb from './atoms/Dumb';
import { DEFAULT_TEXT } from './data/literals';

// const array = [
//   { text: 'tak'},
//   { text: 'nie'},
//   { text: 'być może'},
// ];


const arrayOfString = [
  'SuperArtDirector',
  'Jeszcze Lepszy Head',
  'Potężny Paweł',
]


const App = () => {
  return (
    <div>
      <Button type="button">
        <Dumb text="to jest grube!" />
        Super Developerzy?
      </Button>
      {/* {array.map( (element) => <Button type="button"> {element.text} </Button> )} */}
      {arrayOfString.map(element => <div><Dumb text={element} /></div>)}
    </div>
  );
}




export default App;
