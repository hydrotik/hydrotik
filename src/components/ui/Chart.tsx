import React from 'react';
import Papa from 'papaparse';
import fetch from 'node-fetch';
import moment from 'moment';

import { merge, random, range } from "lodash";
import { 
	VictoryPie, 
	VictoryChart, 
	VictoryLine, 
	VictoryTheme, 
	VictoryScatter,
	VictoryStack,
	VictoryGroup,
	VictoryArea,
	VictoryPortal,
	VictoryLabel,
	VictoryAxis,
	VictoryLegend
} from "victory";

import ChartTheme from "./ChartTheme";


const csvURL = 'https://raw.githubusercontent.com/nychealth/coronavirus-data/master/case-hosp-death.csv?cache-control=';

const colorDark:string = '#455A64';
const colorMed:string = '#90A4AE';
const colorLight:string = '#bdc6cb';

type MyProps = {

};

type MyState = {
	data: Array<object>
};

type LabelProps = {
	x:string;
	y:string;
}

type CSVProps = {
	DATE_OF_INTEREST:string;
	NEW_COVID_CASE_COUNT:string;
	HOSPITALIZED_CASE_COUNT:string;
	DEATH_COUNT:string;
}

class Chart extends React.Component<MyProps, MyState>{

	constructor(props:MyProps) {
		super(props);

		this.state = {
			data: []
		};

		this.resolveCsvData = this.resolveCsvData.bind(this);
	}

	componentDidMount() {
		this.getCsvData();
	}

	fetchCsv() {
		return fetch('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/case-hosp-death.csv?cache-control=' + (new Date()).getTime()).then(function (response:any) {
			let reader = response.body.getReader();
			let decoder = new TextDecoder('utf-8');

			return reader.read().then(function (result:any) {
				return decoder.decode(result.value);
			});
		});
	}

	resolveCsvData(result:any) {
		result.data.splice(-2, 2);

		this.setState({
			data: this.checkCSVData(result.data)
		});
	}

	checkKey(obj:any, key:string) {
		return key in obj;
	}

	updateKey(obj:any, oldkey:string, newkey:string) {
		obj[newkey] = obj[oldkey];
		delete obj[oldkey];
		return obj;
	}

	checkCSVData(data:Array<CSVProps>) {
		// FIX for https://github.com/nychealth/coronavirus-data/issues/41
		const badkey = 'Retrieving data. Wait a few seconds and try to cut or copy again.';
		const goodkey = 'DATE_OF_INTEREST';

		//TODO Write test validating schema of object props
		data.map((obj:CSVProps) => {
			if(this.checkKey(obj, badkey)){
				obj = this.updateKey(obj, badkey, goodkey);
			}
		});

		return data;
	}

	async getCsvData() {
		let csvData = await this.fetchCsv();
		Papa.parse(csvData, {
			header: true,
			complete: this.resolveCsvData,
			dynamicTyping: true
		});
	}

	

	render() {

		return (
			<VictoryChart
				theme={VictoryTheme.material}
				//domain={{y: [0, 6000]}}
				domainPadding={{y: [0, 50]}}
				width={600}
				height={350}
				scale={{ x: "time" }}
			>   
				<VictoryAxis crossAxis
					theme={VictoryTheme.material}
					standalone={false}
					tickLabelComponent={
						<VictoryLabel 
							renderInPortal={true} 
						/>
					}
					// new Date() for https://momentjs.com/guides/#/warnings/js-date/ [CLEANUP]
					tickFormat={(t) => moment(new Date(t)).format('M/D/YY')}
					fixLabelOverlap={true}
				/>
				<VictoryAxis dependentAxis crossAxis
					theme={VictoryTheme.material}
					standalone={false}
					tickLabelComponent={
						<VictoryLabel renderInPortal={true} />
					}
				/>
				 <VictoryLegend x={75} y={50}
					title="Legend"
					centerTitle
					orientation="horizontal"
					gutter={10}
					style={{ border: { stroke: "black" }, title: {fontSize: 10 } }}
					data={[
						{ name: "New Cases", symbol: { fill: colorDark, type: "square" } },
						{ name: "Hospitalizations", symbol: { fill: colorMed, type: "square" } },
						{ name: "New Deaths", symbol: { fill: colorLight, type: "square" } }
					]}
				/>
				<VictoryGroup
					animate={{ duration: 1000 }} 
					colorScale={[colorDark, colorMed, colorLight]}
				>
					<VictoryArea
						style={{
							data: { stroke: colorDark },
							parent: { border: "1px solid #ccc"}
						}}
						data={this.state.data}
						x = {(d) => moment(d.DATE_OF_INTEREST, 'MM/DD/YY').toDate().toString()}
						y = "NEW_COVID_CASE_COUNT"
					/>
					
					<VictoryArea
						style={{
							data: { stroke: colorMed },
							parent: { border: "1px solid #ccc"}
						}}
						data={this.state.data}
						x = {(d) => moment(d.DATE_OF_INTEREST, 'MM/DD/YY').toDate().toString()}
						y = "HOSPITALIZED_CASE_COUNT"
					/>
					<VictoryArea
						style={{
							data: { stroke: colorLight },
							parent: { border: "1px solid #ccc"}
						}}
						data={this.state.data}
						x = {(d) => moment(d.DATE_OF_INTEREST, 'MM/DD/YY').toDate().toString()}
						y = "DEATH_COUNT"
					/>
				</VictoryGroup>
			</VictoryChart>
		);
	}
}

export default Chart;