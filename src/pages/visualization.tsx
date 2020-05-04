import React from 'react';
import Papa from 'papaparse';
import moment from 'moment';
import Layout from '../components/global/layout';
import Chart from '../components/ui/Chart';
import Button from '../components/ui/Button';
import DataHelper from '../utils/DataHelper';

type MyProps = {
	dc: DataHelper;
};

type DataProps = {
	data: Array<object>;
};

type CovidProps = {
};

type MyState = {
	github: string;
	totals: Array<object>;
	borough: Array<string>;
	age: Array<string>;
	sex: Array<string>;
};

function numberWithCommas(x: string): string {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

type NumberProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value: any;
};

function NumberValue(props: NumberProps): JSX.Element {
	const { value } = props;
	if (Number.isNaN(value)) {
		return value;
	}
	return (
		<span>{ numberWithCommas(value) }</span>
	);
}

const dc = new DataHelper();

interface PDFItemProps {
	children: string;
}

class Visualization extends React.Component<MyProps, MyState> {
	constructor(props: MyProps) {
		super(props);

		this.state = {
			github: 'Loading data...',
			totals: [['Loading data...', '']],
			borough: [],
			age: [],
			sex: [],
		};

		this.resolveCsvData = this.resolveCsvData.bind(this);
		this.resolveGithubData = this.resolveGithubData.bind(this);
		this.parseGithubData = this.parseGithubData.bind(this);
		this.resolveBoroughData = this.resolveBoroughData.bind(this);
		this.resolveAgeData = this.resolveAgeData.bind(this);
		this.resolveSexData = this.resolveSexData.bind(this);
	}

	componentDidMount(): void {
		const cvcb = this.resolveCsvData;

		dc.getData(
			'https://raw.githubusercontent.com/nychealth/coronavirus-data/master/summary.csv',
			//	eslint-disable-next-line @typescript-eslint/no-explicit-any
			(data: any): void => {
				Papa.parse(data, {
					header: false,
					complete: cvcb,
					dynamicTyping: true,
				});
			},
		);

		const cghcb = this.resolveGithubData;
		const ParseGithub = this.parseGithubData;

		dc.getData(
			'https://api.github.com/repos/nychealth/coronavirus-data/commits',
			//	eslint-disable-next-line @typescript-eslint/no-explicit-any
			(data: any): void => {
				ParseGithub(data, {
					complete: cghcb,
				});
			},
		);

		const boroughcb = this.resolveBoroughData;

		dc.getData(
			'https://raw.githubusercontent.com/nychealth/coronavirus-data/master/boro.csv',
			//	eslint-disable-next-line @typescript-eslint/no-explicit-any
			(data: any): void => {
				Papa.parse(data, {
					header: false,
					complete: boroughcb,
					dynamicTyping: true,
				});
			},
		);

		const agecb = this.resolveAgeData;

		dc.getData(
			'https://raw.githubusercontent.com/nychealth/coronavirus-data/master/by-age.csv',
			//	eslint-disable-next-line @typescript-eslint/no-explicit-any
			(data: any): void => {
				Papa.parse(data, {
					header: false,
					complete: agecb,
					dynamicTyping: true,
				});
			},
		);

		const sexcb = this.resolveSexData;

		dc.getData(
			'https://raw.githubusercontent.com/nychealth/coronavirus-data/master/by-sex.csv',
			//	eslint-disable-next-line @typescript-eslint/no-explicit-any
			(data: any): void => {
				Papa.parse(data, {
					header: false,
					complete: sexcb,
					dynamicTyping: true,
				});
			},
		);
	}

	//	eslint-disable-next-line @typescript-eslint/no-explicit-any
	resolveCsvData(result: any): void {
		this.setState({ totals: result.data });
	}

	//	eslint-disable-next-line @typescript-eslint/no-explicit-any
	resolveGithubData(result: any): void {
		this.setState({ github: result });
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	resolveBoroughData(result: any): void {
		result.data.shift();
		this.setState({ borough: result.data });
	}

	//	eslint-disable-next-line @typescript-eslint/no-explicit-any
	resolveAgeData(result: any): void {
		result.data.shift();
		this.setState({ age: result.data });
	}

	//	eslint-disable-next-line @typescript-eslint/no-explicit-any
	resolveSexData(result: any): void {
		result.data.shift();
		this.setState({ sex: result.data });
	}

	//	eslint-disable-next-line @typescript-eslint/no-explicit-any
	parseGithubData(result: any, config: any): void {
		const r = JSON.parse(result)[0];
		const d = r.commit.author.date;
		const n = moment(d).format('MM/DD/YYYY, hh:hh a');
		const s = `Chart updated on ${n}`;
		config.complete.apply(this, [s]);
	}

	render(): JSX.Element {
		const {
			github,
			borough,
			age,
			sex,
			totals,
		} = this.state;
		return (
			<Layout>
				<main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
					<div className="bg-gray-100 mb-16">
						<Chart />
					</div>
					<div className="flex flex-col md:flex-row">
						<div className="md:ml-6 md:w-2/3 mb-16">
							<h2 className="font-bold mb-3 text-xl">New Covid cases by day in NYC</h2>
							<p className="mb-6">{ github }</p>
							<h2 className="font-bold text-xl">Borough Totals:</h2>
							{
								//	eslint-disable-next-line @typescript-eslint/no-explicit-any
								borough.map((section: any) => (
									<div key={section[0]}>
										<strong>{section[0].replace('*', '')}</strong>
										:
										{' '}
										<NumberValue value={section[1]} />
									</div>
								))
							}
							<br />
							<h2 className="font-bold text-xl">Case Rate By Age:</h2>
							{
								//	eslint-disable-next-line @typescript-eslint/no-explicit-any
								age.map((section: any) => (
									<div key={section[0]}>
										<strong>{section[0].replace('*', '')}</strong>
										:
										{' '}
										<NumberValue value={section[1]} />
									</div>
								))
							}
							<br />
							<h2 className="font-bold text-xl">Case Rate By Sex:</h2>
							{
								//	eslint-disable-next-line @typescript-eslint/no-explicit-any
								sex.map((section: any) => (
									<div key={section[0]}>
										<strong>{section[0].replace('*', '')}</strong>
										:
										{' '}
										<NumberValue value={section[1]} />
									</div>
								))
							}
							<br />
							<Button href="https://github.com/nychealth/coronavirus-data">NYC Health Github</Button>
						</div>
						<div className="md:w-1/3">
							<h2 className="font-bold mb-3 text-xl">New York City:</h2>
							<div className="mb-6">
								{
									//	eslint-disable-next-line @typescript-eslint/no-explicit-any
									totals.map((section: any) => (
										<div key={section[0]}>
											<strong>{section[0].replace('*', '')}</strong>
											{' '}
											<NumberValue value={section[1]} />
										</div>
									))
								}
							</div>
						</div>
					</div>
				</main>
			</Layout>
		);
	}
}

export default Visualization;
