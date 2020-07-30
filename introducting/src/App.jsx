import React from 'react';

import Button from './atoms/Button';
import Dumb from './atoms/Dumb';

import { DEFAULT_TEXT } from './data/literals';
import Counter from './molecules/Counter';
import useInput from './hooks/useInput';
import Header from './molecules/Header';
import Logo from './molecules/Logo';
import Image from './atoms/Image';
import { ThemeProvider } from './contexts/Theme';

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
  const { value, input } = useInput({
    defaultValue: 'Target',
  });

  return (
    <>
      <ThemeProvider>
        <Header>
          {/* <Logo>
            <Image src="https://winged.pl/images/jaco_1592557713183.png" alt="Kiełbaski" />
          </Logo> */}
        </Header>
      </ThemeProvider>
    </>
  );
}




export default App;
