import React, { useRef, useState } from 'react';

export default function Form() {
  const [storedValue, setStoredValue] = useState('');
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(inputRef.current.value);

    setStoredValue((prev) => inputRef.current.value);

    // console.log(storedValue);
  };

  return (
    <div className="modal">
      <form action="?" onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          // onChange={onSubmit}
          // value={storedValue}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
