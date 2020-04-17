import React from 'react';
import { mount } from 'enzyme';
import { JSDOM } from "jsdom";
import https from 'https';

const dom = new JSDOM();
const globalAny:any = global;

globalAny.document = dom.window.document;
globalAny.window = dom.window;



describe('Instantiating the Chart component', function () {

	beforeEach(() => {
		
	});

	afterAll(() => {
		
	})

	it('should load the csv file remotely and return a response of 200', async done => {
	    const path = 'https://raw.githubusercontent.com/nychealth/coronavirus-data/master/case-hosp-death.csv';
	    await https.get(path, function(r) {
			expect(r.statusCode).toBe(200);
			done()
		})
	})

	it('it should render correctly', () => {
		const wrapper = mount(<p>Hello Jest!</p>);
		expect(wrapper.text()).toMatch('Hello Jest!');
	});

	// it('it should remove an invalid key on the csv object', () => {
	// 	//expect(instance).toBeInstanceOf(Chart);
		
	// 	const instance = new Chart({});
	// 	const assertion = instance.checkKey({foo: 'bar'}, 'boo');
	// 	expect(assertion).toBeFalsy();
	// });

	// test('Chart.updateKey() - ', () => {
	// 	const wrapper = mount(<p>Hello Jest!</p>);
	// 	expect(wrapper.text()).toMatch('Hello Jest!');
	// });
})