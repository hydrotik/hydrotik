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
    VictoryPortal
} from "victory";

import ChartTheme from "./ChartTheme";

type MyProps = {

};

type MyState = {
  data: Array<object>;
};


class Chart extends React.Component<MyProps, MyState>{

    constructor(props:MyProps) {
        super(props);

        this.state = {
            data: []
        };

        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getCsvData();
    }

    fetchCsv() {
        return fetch('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/case-hosp-death.csv').then(function (response:any) {
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');

            return reader.read().then(function (result:any) {
                return decoder.decode(result.value);
            });
        });
    }

    getData(result:any) {
        this.setState({data: result.data});
    }

    async getCsvData() {
        let csvData = await this.fetchCsv();

        Papa.parse(csvData, {
            header: true,
            complete: this.getData,
            dynamicTyping: true
        });
    }



    render() {
        return (
            <VictoryChart
                  theme={VictoryTheme.material}
                  height={200}
                  domain={{y: [0, 6000]}}
                >
                  <VictoryLine
                    style={{
                      data: { stroke: "#ECEFF1" },
                      parent: { border: "1px solid #ccc"}
                    }}
                    data={this.state.data}
                    x = {(d) => moment(d.DATE_OF_INTEREST, 'MM/DD/YYYY').format('M/D')}
                    //x = "DATE_OF_INTEREST"
                    //y = {(d) => d.NEW_COVID_CASE_COUNT}
                    y = "NEW_COVID_CASE_COUNT"
                  />

                  <VictoryLine
                    style={{
                      data: { stroke: "#90A4AE" },
                      parent: { border: "1px solid #ccc"}
                    }}
                    data={this.state.data}
                    x = {(d) => moment(d.DATE_OF_INTEREST, 'MM/DD/YYYY').format('M/D')}
                    //x = "DATE_OF_INTEREST"
                    //y = {(d) => d.NEW_COVID_CASE_COUNT}
                    y = "HOSPITALIZED_CASE_COUNT"
                  />
                  <VictoryLine
                    style={{
                      data: { stroke: "#455A64" },
                      parent: { border: "1px solid #ccc"}
                    }}
                    data={this.state.data}
                    x = {(d) => moment(d.DATE_OF_INTEREST, 'MM/DD/YYYY').format('M/D')}
                    //x = "DATE_OF_INTEREST"
                    //y = {(d) => d.NEW_COVID_CASE_COUNT}
                    y = "DEATH_COUNT"
                  />
            </VictoryChart>
        );
    }
}

export default Chart;