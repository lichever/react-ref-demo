import React from 'react';

import { useEffect, useRef, useState } from 'react';

export default function Focus() {
  const inputRef = useRef(null);

  // Remember to check if the DOM element’s current reference still exists, as state changes in React are asynchronous.
  const focusTextInput = () => {
    console.log(inputRef.current);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const deFocusTextInput = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <input
        type="button"
        value="Focus the text input"
        onClick={focusTextInput}
      />
      <input
        type="button"
        value="De-Focus the text input"
        onClick={deFocusTextInput}
      />
    </div>
  );
}
