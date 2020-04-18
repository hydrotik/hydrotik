import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
import { act } from 'react-dom/test-utils';
import {JSDOM} from 'jsdom';
import Chart from './Chart';
import https from 'https';

import 'leaked-handles';

let dom = new JSDOM('<!doctype html><html><body></body></html>');
let globalAny:any = global;

globalAny.document = dom.window.document;
globalAny.window = dom.window;


let container:any;
let wrapper:any;

describe('Instantiating the Chart component', function () {

	beforeEach(() => {
		container = globalAny.document.createElement('div');
		globalAny.document.body.appendChild(container);
	});

	afterEach(() => {
		globalAny.document.body.removeChild(container);
		container = null as any;
		wrapper = null as any;
	});

	afterAll(() => {
		container = null as any;
		wrapper = null as any;
		globalAny.window.close();
	});


	// it('should load the csv file remotely and return a response of 200', async done => {
	//     const path = 'https://raw.githubusercontent.com/nychealth/coronavirus-data/master/case-hosp-death.csv';
	// 	try {
	// 		await https.get(path, function(r) {
	// 			expect(r.statusCode).toBe(200);
	// 			done()
	// 		});
	// 	} catch (e) {
	// 		done();
	// 	}
	// })

	it('calls componentDidMount', () => {
		sinon.spy(Chart.prototype, 'componentDidMount');
		const wrapper = mount(<Chart />, {
			attachTo: container
		});
		expect(Chart.prototype.componentDidMount).toHaveProperty('callCount', 1);
		wrapper.detach();
	});

	it('checkKey should be false when a key is missing from an object', () => {
	    const expected:boolean = false;
	    const wrapper = mount(<Chart />, {
			attachTo: container
		});
		const chart:any = wrapper.instance();
	    const actual = chart.checkKey({foo : 'bar'}, 'boo');
	    expect(actual).toBe(expected);
	    wrapper.detach();
	});

	// 

	it('can remove an invalid key and replace it with a valid key', () => {
	    const expected:object = {boo : 'bar'};
	    const wrapper = mount(<Chart />, {
			attachTo: container
		});
		const chart:any = wrapper.instance();
	    const actual = chart.updateKey({foo : 'bar'}, 'foo', 'boo');
	    expect(actual).toEqual(expected);
	    wrapper.detach();
	});
})