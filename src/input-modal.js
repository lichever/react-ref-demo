import React, { createRef } from 'react';
import LabelledInput from './labelled-input';
import gsap from 'gsap';

class InputModal extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.modalRef = createRef();
    this.overlayRef = createRef();
    this.state = { value: props.initialValue };

    const onComplete = () => {
      this.inputRef.current.focus();
    };
    const timeline = gsap.timeline({ paused: true, onComplete });

    this.timeline = timeline;
  }

  componentDidMount() {
    this.timeline
      .from(this.overlayRef.current, {
        duration: 0.25,
        autoAlpha: 0,
      })
      .from(this.modalRef.current, {
        duration: 0.25,
        autoAlpha: 0,
        y: 25,
      });

    this.timeline.play();

    document.body.addEventListener('click', this.onClickOutside);
  }

  componentWillUnmount() {
    this.timeline.kill();

    document.removeEventListener('click', this.onClickOutside);
  }

  onClickOutside = (e) => {
    const { onClose } = this.props;
    const element = e.target;

    if (this.modalRef.current && !this.modalRef.current.contains(element)) {
      e.preventDefault();
      e.stopPropagation();
      onClose();
    }
  };

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    const { onSubmit, onClose } = this.props;
    onSubmit(value);
    onClose();
  };

  testClick = () => {
    console.log('>>> testClick', Date.now());
    this.setState({ rand: Math.random() });
  };

  /*
React does not care whether “props changed” - it will render child components unconditionally just because the parent rendered!

If you don’t want a component to re-render when its parent renders, wrap it with memo. After that, the component indeed will only re-render when its props change.



*/
  render() {
    const { value } = this.state;
    console.log('>>> state', this.state);
    return (
      <div className="modal--overlay" ref={this.overlayRef}>
        <div className="modal" ref={this.modalRef}>
          <h1>Insert a new value</h1>
          <button onClick={this.testClick}>
            This click should not re-render LabelledInput component
          </button>
          <form action="?" onSubmit={this.onSubmit}>
            <LabelledInput
              label="quantity"
              ref={this.inputRef}
              type="text"
              onChange={this.onChange}
              value={value}
            />
            <button>Save new value</button>
          </form>
        </div>
      </div>
    );
  }
}

export default InputModal;
