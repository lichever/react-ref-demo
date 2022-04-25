import React from 'react';
import './style.css';
import Focus from './Focus';
import AntiPattern from './AntiPattern';
import ForwardRef from './ForwardRef';
import ForwardRefDemo2 from './ForwardRefDemo2';
/*
Remember to use refs only when there is an implicit function call that React can’t handle through its methods. Also, make sure it doesn’t alter the internal state of the components. 



*/

export default function App() {
  return (
    <>

      <ForwardRefDemo2 />

      {/* <Focus />
      <AntiPattern />
      <ForwardRef /> */}
    </>
  );
}
