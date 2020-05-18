import React from 'react';
import Papa, { ParseResult } from 'papaparse';
import moment from 'moment';
import Layout from '../components/global/layout';
import Chart from '../components/ui/Chart';
import Button from '../components/ui/Button';
import DataHelper from '../utils/DataHelper';

const dc = new DataHelper();

/*
*	Types and Interfaces
*/

type MyProps = {
	dc: DataHelper;
};

type DataProps = {
	data: Array<object>;
};

type CovidProps = {
};

interface PDFItemProps {
	children: string;
}

type ParseProps = {
	complete(result: string): void;
	header?: boolean;
	dynamicTyping?: boolean;
};

type MyState = {
	github: string;
	totals: Array<Array<string>>;
	borough: Array<Array<string>>;
	age: Array<Array<string>>;
	sex: Array<Array<string>>;
	boroughLoading: boolean;
	ageLoading: boolean;
	sexLoading: boolean;
	totalsLoading: boolean;
}

type NumberProps = {
	value: number|string;
};

/*
*	Helper functions and sanitizers
*/

function numberWithCommas(x: number): string {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function NumberValue(props: NumberProps): JSX.Element {
	const { value } = props;
	return <span>{ typeof value !== 'number' ? value : numberWithCommas(value) }</span>;
}

type DataResultsProps = {
	value: Array<Array<string>>;
	loading: boolean;
	hasColon?: boolean;
}

function DataResults(props: DataResultsProps): JSX.Element {
	const { value, loading, hasColon } = props;

	if (loading) {
		return <span>Loading Data...</span>;
	}

	return (
		<div className="mb-3">
			{
				value.map((item: string[]) => (
					<div key={item[0]}>
						<strong>{item[0]}</strong>
						{hasColon || !item[0] ? ' ' : ': '}
						<NumberValue value={item[1]} />
					</div>
				))
			}
		</div>
	);
}

/*
*	Visualization Class
*/

class Visualization extends React.Component<MyProps, MyState> {
	constructor(props: MyProps) {
		super(props);

		this.state = {
			github: 'Loading data...',
			totals: [[], []],
			borough: [[], []],
			age: [[], []],
			sex: [[], []],
			boroughLoading: true,
			ageLoading: true,
			sexLoading: true,
			totalsLoading: true,
		};
	}

	componentDidMount(): void {
		const papaConfig: object = {
			header: false,
			dynamicTyping: true,
		};

		dc.getDataPromise('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/summary.csv')
			.then((result: object) => {
				let data;
				Papa.parse(result.toString(), {
					...papaConfig,
					complete: (r) => {
						data = r;
					},
				});
				return data;
			})
			.then((result) => {
				const { data } = (result as unknown) as DataProps;
				const noAsteriks: Array<Array<string>> = JSON.parse(JSON.stringify(data).replace(/\*/g, ''));
				this.setState({
					totals: noAsteriks,
					totalsLoading: false,
				});
			});

		dc.getDataPromise('https://api.github.com/repos/nychealth/coronavirus-data/commits')
			.then((result: unknown) => {
				const r = JSON.parse(result as string)[0];
				const d = r.commit.author.date;
				const n = moment(d).format('MM/DD/YYYY, hh:hh a');
				const s = `Chart updated on ${n}`;
				return s;
			})
			.then((result) => {
				this.setState({ github: result });
			});

		dc.getDataPromise('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/boro.csv')
			.then((result: object) => {
				let data;
				Papa.parse(result.toString(), {
					...papaConfig,
					complete: (r) => {
						data = r;
					},
				});
				return data;
			})
			.then((result) => {
				const r = (result as unknown) as ParseResult;
				r.data.shift();
				this.setState({
					borough: r.data,
					boroughLoading: false,
				});
			});

		dc.getDataPromise('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/by-age.csv')
			.then((result: object) => {
				let data;
				Papa.parse(result.toString(), {
					...papaConfig,
					complete: (r) => {
						data = r;
					},
				});
				return data;
			})
			.then((result) => {
				const r = (result as unknown) as ParseResult;
				r.data.shift();
				this.setState({
					age: r.data,
					ageLoading: false,
				});
			});

		dc.getDataPromise('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/by-sex.csv')
			.then((result: object) => {
				let data;
				Papa.parse(result.toString(), {
					...papaConfig,
					complete: (r) => {
						data = r;
					},
				});
				return data;
			})
			.then((result) => {
				const r = (result as unknown) as ParseResult;
				r.data.shift();
				this.setState({
					sex: r.data,
					sexLoading: false,
				});
			});
	}

	render(): JSX.Element {
		const {
			github,
			borough,
			age,
			sex,
			totals,
			boroughLoading,
			ageLoading,
			sexLoading,
			totalsLoading,
		} = this.state;

		return (
			<Layout>
				<main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
					<h1 className="font-bold text-xl mb-5">COVID-19 Visualization</h1>
					<div className="bg-gray-100 mb-16">
						<Chart />
					</div>
					<div className="flex flex-col md:flex-row">
						<div className="md:ml-6 md:w-2/3 mb-16">
							<h2 className="font-bold mb-3 text-xl">New Covid cases by day in NYC</h2>
							<p className="mb-6">{ github }</p>
							<h2 className="font-bold text-xl">Borough Totals:</h2>
							<DataResults value={borough} loading={boroughLoading} />
							<h2 className="font-bold text-xl">Case Rate By Age:</h2>
							<DataResults value={age} loading={ageLoading} />
							<h2 className="font-bold text-xl">Case Rate By Sex:</h2>
							<DataResults value={sex} loading={sexLoading} />
							<br />
							<Button className="mt-6" href="https://github.com/nychealth/coronavirus-data">NYC Health Github</Button>
						</div>
						<div className="md:w-1/3">
							<h2 className="font-bold mb-3 text-xl">New York City:</h2>
							<div className="mb-6">
								<DataResults value={totals} loading={totalsLoading} hasColon />
							</div>
						</div>
					</div>
				</main>
			</Layout>
		);
	}
}

export default Visualization;
