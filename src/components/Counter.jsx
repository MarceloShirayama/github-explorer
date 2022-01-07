import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
};
