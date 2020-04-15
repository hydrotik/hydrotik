import React from 'react';
import { mount } from 'enzyme';
import { JSDOM } from "jsdom";

const dom = new JSDOM();
const globalAny:any = global;

globalAny.document = dom.window.document;
globalAny.window = dom.window;

test('hello world', () => {
	const wrapper = mount(<p>Hello Jest!</p>);
	expect(wrapper.text()).toMatch('Hello Jest!');
});