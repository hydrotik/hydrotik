/*
*	Types and Interfaces
*/

interface DataResponse extends Response {
	info: string[];
}

type Props = {
	path?: string | undefined;
};

export default class DataHelper {
	private data: object = {};

	private path: string | undefined = '';

	/**
	* Main DataHelper constructor
	*/

	constructor(options?: Props) {
		if (this instanceof DataHelper) {
			const opts = options || {};

			this.data = {};
			this.path = opts.path;
			return this;
		}

		return new DataHelper(options);
	}

	/**
	*
	*
	* @api private
	*/
	//	eslint-disable-next-line @typescript-eslint/no-explicit-any
	private fetchData = (): any => fetch(`${this.path}?cache-control=${(new Date()).getTime()}`).then((response: any) => {
		const reader = response.body.getReader();
		const decoder = new TextDecoder('utf-8');
		//	eslint-disable-next-line @typescript-eslint/no-explicit-any
		return reader.read().then((result: any) => decoder.decode(result.value));
	});

	/**
	*
	*
	* @api private
	*/
	private resolveData(result: object): void {
		this.data = result;
	}

	//	eslint-disable-next-line @typescript-eslint/no-explicit-any
	async getData(path: string, fn: any): Promise<object> {
		this.path = path;
		const d = await this.fetchData();
		fn.call(this, d);
		return fn;
	}
}
