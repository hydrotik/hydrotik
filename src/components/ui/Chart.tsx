import React from 'react';
import Papa from 'papaparse';
import fetch from 'node-fetch';
import moment from 'moment';

import {
	VictoryChart,
	VictoryTheme,
	VictoryGroup,
	VictoryArea,
	VictoryLabel,
	VictoryAxis,
	VictoryLegend,
} from 'victory';

const colorDark = '#455A64';
const colorMed = '#90A4AE';
const colorLight = '#bdc6cb';

export interface ChartInterface extends React.Component<ChartProps> {
	checkKey(obj: any, key: string): boolean;
	fetchCsv(): object;
	resolveCsvData(result: any): void;
	getCsvData(): void;
	updateKey(obj: any, oldkey: string, newkey: string): object;
}

type ChartProps = {
};

type ChartState = {
	data: Array<object>;
};

type LabelProps = {
	x: string;
	y: string;
}

type CSVProps = {
	DATE_OF_INTEREST: string;
	NEW_COVID_CASE_COUNT: string;
	HOSPITALIZED_CASE_COUNT: string;
	DEATH_COUNT: string;
}

class Chart extends React.Component<ChartProps, ChartState> implements ChartInterface {
	constructor(props: IProps) {
		super(props);

		this.state = {
			data: [],
		};

		this.resolveCsvData = this.resolveCsvData.bind(this);
	}

	componentDidMount() {
		this.getCsvData();
	}

	async getCsvData() {
		try {
			const csvData = await this.fetchCsv();
			Papa.parse(csvData, {
				header: true,
				complete: this.resolveCsvData,
				dynamicTyping: true,
			});
		} catch (e: Error) {
			return e;
		}
	}

	fetchCsv = () => fetch(`https://raw.githubusercontent.com/nychealth/coronavirus-data/master/case-hosp-death.csv?cache-control=${(new Date()).getTime()}`)
		.then(function (response: any) {
			try {
				const reader = response.body.getReader();
				const decoder = new TextDecoder('utf-8');

				return reader.read().then(function (result: any) {
					return decoder.decode(result.value);
				}).catch((e: any) => {
					throw new Error(`fetchCsv() read() error: ${e}`);
				});
			} catch(e: Error) {
				return null;
			}
		}).catch((e: any) => {
			throw new Error(`fetchCsv() fetch() error: ${e}`);
		})

	checkCSVData(data: Array<CSVProps>) {
		//	FIX for https://github.com/nychealth/coronavirus-data/issues/41
		const badkey = 'Retrieving data. Wait a few seconds and try to cut or copy again.';
		const goodkey = 'DATE_OF_INTEREST';

		//	TODO Write test validating schema of object props
		data.map((obj: CSVProps) => {
			if (this.checkKey(obj, badkey)) {
				obj = this.updateKey(obj, badkey, goodkey);
			}
		});

		return data;
	}

	resolveCsvData = (result: any) => {
		result.data.splice(-2, 2);

		this.setState({
			data: this.checkCSVData(result.data),
		});
	}

	checkKey = (obj: any, key: string) => key in obj;

	updateKey = (obj: any, oldkey: string, newkey: string) => {
		obj[newkey] = obj[oldkey];
		delete obj[oldkey];
		return obj;
	}

	render(): JSX.Element {
		return (
			<VictoryChart
				theme={VictoryTheme.material}
				//	domain={{y: [0, 6000]}}
				domainPadding={{ y: [0, 50] }}
				width={600}
				height={350}
				scale={{ x: 'time' }}
			>
				<VictoryAxis
					crossAxis
					theme={VictoryTheme.material}
					standalone={false}
					tickLabelComponent={
						<VictoryLabel
							renderInPortal
						/>
					}
					//	new Date() for https://momentjs.com/guides/#/warnings/js-date/ [CLEANUP]
					tickFormat={(t) => moment(new Date(t)).format('M/D/YY')}
					fixLabelOverlap
				/>
				<VictoryAxis
					dependentAxis
					crossAxis
					theme={VictoryTheme.material}
					standalone={false}
					tickLabelComponent={
						<VictoryLabel renderInPortal />
					}
				/>
				<VictoryLegend
					x={75}
					y={50}
					title="Legend"
					centerTitle
					orientation="horizontal"
					gutter={10}
					style={{ border: { stroke: 'black' }, title: { fontSize: 10 } }}
					data={[
						{ name: 'New Cases', symbol: { fill: colorDark, type: 'square' } },
						{ name: 'Hospitalizations', symbol: { fill: colorMed, type: 'square' } },
						{ name: 'New Deaths', symbol: { fill: colorLight, type: 'square' } },
					]}
				/>
				<VictoryGroup
					animate={{ duration: 1000 }}
					colorScale={[colorDark, colorMed, colorLight]}
				>
					<VictoryArea
						style={{
							data: { stroke: colorDark },
							parent: { border: '1px solid #ccc' },
						}}
						data={this.state.data}
						x={(d) => moment(d.DATE_OF_INTEREST, 'MM/DD/YY').toDate().toString()}
						y="CASE_COUNT"
					/>
					<VictoryArea
						style={{
							data: { stroke: colorMed },
							parent: { border: '1px solid #ccc' },
						}}
						data={this.state.data}
						x={(d) => moment(d.DATE_OF_INTEREST, 'MM/DD/YY').toDate().toString()}
						y="HOSPITALIZED_COUNT"
					/>
					<VictoryArea
						style={{
							data: { stroke: colorLight },
							parent: { border: '1px solid #ccc' },
						}}
						data={this.state.data}
						x={(d) => moment(d.DATE_OF_INTEREST, 'MM/DD/YY').toDate().toString()}
						y="DEATH_COUNT"
					/>
				</VictoryGroup>
			</VictoryChart>
		);
	}
}

export default Chart;
