import Papa from 'papaparse';


type Props = {
	path?: string | undefined;
};




export default class DataHelper {

	private data:any = {};
	private path:string | undefined = '';

	/**
	 * Main DataHelper constructor
	 */

	constructor(opts?:Props) {
		if (this instanceof DataHelper) {
			opts = opts || {};

			this.data = {};
			this.path = opts.path;
			return this;
		}

		return new DataHelper(opts);
	}

	/**
	 * 
	 *
	 * @api private
	 */
	private fetchData() {
		var datahelper = this;
		return fetch(datahelper.path + '?cache-control=' + (new Date()).getTime()).then(function (response:any) {
			let reader = response.body.getReader();
			let decoder = new TextDecoder('utf-8');

			return reader.read().then(function (result:any) {
				return decoder.decode(result.value);
			});
		});
	}

	/**
	 * 
	 *
	 * @api private
	 */
	private resolveData(result:any) {
		this.data = result;
		console.log('DatCon DONE');
		console.log(this.data);
	}

	async getData(path:string, fn:any) {
		this.path = path;
		let d = await this.fetchData();
		fn.call(this, d)
	}
};
