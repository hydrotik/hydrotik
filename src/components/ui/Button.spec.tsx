import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { JSDOM } from "jsdom";
import Button from './Button';

const dom = new JSDOM();
const globalAny:any = global;

globalAny.document = dom.window.document;
globalAny.window = dom.window;


let container:any;

describe('Instantiating the Button component', function () {

  beforeEach(() => {
    container = globalAny.document.createElement('div');
    globalAny.document.body.appendChild(container);
  });

  afterEach(() => {
    globalAny.document.body.removeChild(container);
    container = null as any;
  });

  it('can render', () => {
    // Test first render and componentDidMount
    act(() => {
      ReactDOM.render(<Button href="http://www.google.com">Hello Jest!</Button>, container);
    });
    const a:any = container.querySelector('a');
    expect(a.textContent).toBe('Hello Jest!');

    // Test second render and componentDidUpdate
    // act(() => {
    //   button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    // });
    // expect(label.textContent).toBe('You clicked 1 times');
    // expect(document.title).toBe('You clicked 1 times');
  });

})