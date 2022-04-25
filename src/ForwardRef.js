import * as React from 'react';

/*

forwardRef pass the ref from parent to child to bind and control the child DOM node
so that we can control this node on the parent level

The second ref argument in the InputRef component only exists when you define a component with React.forwardRef call


Regular function or class components don’t receive the ref argument, and ref(like key) is not available in props either
*/

const InputText = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

export default function ForwardRef() {
  const ref = React.useRef();

  function focus() {
    ref.current.focus();
  }

  return (
    <div className="ForwardRef">
      <InputText ref={ref} placeholder="my input" />
      <button onClick={focus}>Focus</button>
    </div>
  );
}
