import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import { act } from 'react-dom/test-utils';
import {JSDOM} from 'jsdom';
import Button from './Button';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
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
    act(() => {
      ReactDOM.render(<Button href="http://www.google.com">Hello Jest!</Button>, container);
    });
    const a:any = container.querySelector('a');
    expect(a.textContent).toBe('Hello Jest!');
  });

  it('checkHref should be false with an empty string', () => {
    const expected:boolean = false;
    const wrapper:any = shallow(<Button href="">Hello Jest!</Button>).instance(); 
    const actual = wrapper.checkHref();
    expect(actual).toBe(expected);
  });
})