import React, { useState } from 'react';
import Button from '../atoms/Button';
import ButtonWithSelfClick from '../atoms/ButtonWithSelfClick';

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log(count);

  return (
    <div>
      <Button type="button" onClick={() => setCount(
        (state) => state + 1
      )}>
        Zwiększ ilość
      </Button>
      <Button type="button" onClick={() => setCount(
        (state) => state - 1
      )}>
        Zmniejsze ilość
      </Button>

      <ButtonWithSelfClick count={count} type="button" onClick={setCount}>
        Resetuj stan aplikacji
      </ButtonWithSelfClick>
      <div>
        {count}
      </div>
    </div>
  );
};

export default Counter;
