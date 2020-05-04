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
	checkKey(obj: object, key: string): boolean;
	fetchCsv(): object;
	resolveCsvData(result: object): void;
	getCsvData(): void;
	updateKey(obj: object, oldkey: string, newkey: string): object;
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
	constructor(props: ChartProps) {
		super(props);

		this.state = {
			data: [],
		};

		this.resolveCsvData = this.resolveCsvData.bind(this);
	}

	componentDidMount(): void {
		this.getCsvData();
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	async getCsvData() {
		try {
			const csvData = await this.fetchCsv();
			Papa.parse(csvData, {
				header: true,
				complete: this.resolveCsvData,
				dynamicTyping: true,
			});
		} catch (e) {
			throw new Error(e);
		}
	}

	//	eslint-disable-next-line @typescript-eslint/no-explicit-any
	fetchCsv = (): any => fetch(`https://raw.githubusercontent.com/nychealth/coronavirus-data/master/case-hosp-death.csv?cache-control=${(new Date()).getTime()}`)
		//	eslint-disable-next-line @typescript-eslint/no-explicit-any
		.then((response: any) => {
			try {
				const reader = response.body.getReader();
				const decoder = new TextDecoder('utf-8');

				return reader.read()
					//	eslint-disable-next-line @typescript-eslint/no-explicit-any
					.then((result: any) => decoder.decode(result.value)).catch((e: Error) => {
						throw new Error(`fetchCsv() read() error: ${e}`);
					});
			} catch (e) {
				throw new Error(`fetchCsv() fetch() error: ${e}`);
			}
		}).catch((e: Error) => {
			throw new Error(`fetchCsv() fetch() error: ${e}`);
		})

	checkKey = (obj: object, key: string): boolean => key in obj;

	//	eslint-disable-next-line @typescript-eslint/no-explicit-any
	updateKey = (obj: any, oldkey: string, newkey: string): any => {
		//	eslint-disable-next-line no-param-reassign
		obj[newkey] = obj[oldkey];
		//	eslint-disable-next-line no-param-reassign
		delete obj[oldkey];
		return obj;
	}

	//	eslint-disable-next-line @typescript-eslint/no-explicit-any
	resolveCsvData = (result: any): void => {
		result.data.splice(-2, 2);

		this.setState({
			data: result.data,
		});
	}

	render(): JSX.Element {
		const { data } = this.state;
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
					tickLabelComponent={(
						<VictoryLabel
							renderInPortal
						/>
					)}
					//	new Date() for https://momentjs.com/guides/#/warnings/js-date/ [CLEANUP]
					tickFormat={(t): string => moment(new Date(t)).format('M/D/YY')}
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
						data={data}
						x={(d): string => moment(d.DATE_OF_INTEREST, 'MM/DD/YY').toDate().toString()}
						y="CASE_COUNT"
					/>
					<VictoryArea
						style={{
							data: { stroke: colorMed },
							parent: { border: '1px solid #ccc' },
						}}
						data={data}
						x={(d): string => moment(d.DATE_OF_INTEREST, 'MM/DD/YY').toDate().toString()}
						y="HOSPITALIZED_COUNT"
					/>
					<VictoryArea
						style={{
							data: { stroke: colorLight },
							parent: { border: '1px solid #ccc' },
						}}
						data={data}
						x={(d): string => moment(d.DATE_OF_INTEREST, 'MM/DD/YY').toDate().toString()}
						y="DEATH_COUNT"
					/>
				</VictoryGroup>
			</VictoryChart>
		);
	}
}

export default Chart;
