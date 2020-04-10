import React from 'react';
import fetch from 'node-fetch';
import Papa from 'papaparse';
import moment from 'moment';
import { NextPage } from 'next';
import Layout from "../components/global/layout";
import ProgressiveImage from "../components/ui/ProgressiveImage";
import Chart from "../components/ui/Chart";
import Button from "../components/ui/Button";
import { Controller, Scene } from 'react-scrollmagic';
import { merge, random, range } from "lodash";


const colorDark:string = '';
const colorMed:string = '';
const colorLight:string = '';

type MyProps = {

};

type CovidProps = {
  
};

type MyState = {
  github: string;
  covid: CovidProps[];
  totals: Array<object>;
};

function numberWithCommas(x:string) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function NumberValue(props:any) {
	const v = props.value;
	if (isNaN(v)) {
		return v;
	}
	return numberWithCommas(v);
}

class Visualization extends React.Component<MyProps, MyState>{

    constructor(props:MyProps) {
        super(props);

        this.state = {
            github: '',
            covid: [],
            totals:[]
        };

        this.resolveCsvData = this.resolveCsvData.bind(this);
    }

    componentDidMount() {
        this.fetchGithub();
        this.fetchCovidData();
        this.getCsvData();
    }

    async getCsvData() {
        let csvData = await this.fetchCsv();
        Papa.parse(csvData, {
            header: false,
            complete: this.resolveCsvData,
            dynamicTyping: true
        });
    }


    // TODO State
    // https://raw.githubusercontent.com/chazeon/NYState-COVID-19-Tracker/master/data/NYC-covid-19-daily-data-summary.csv

    fetchCsv() {
        return fetch('https://raw.githubusercontent.com/nychealth/coronavirus-data/master/summary.csv?cache-control=' + (new Date()).getTime()).then(function (response:any) {
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');

            return reader.read().then(function (result:any) {
                return decoder.decode(result.value);
            });
        });
    }

    resolveCsvData(result:any) {
        this.setState({totals: result.data});
    }

    fetchGithub(){
        fetch('https://api.github.com/repos/nychealth/coronavirus-data/commits?cache-control=' + (new Date()).getTime())
        .then(res => res.json())
        .then((data) => {
            let d = data[0].commit.author.date;
            let n = moment(d).format('MM/DD/YYYY, hh:hh a');
            let f = moment(d).fromNow();
            let s = `Chart updated ${f} on ${n}`;
            this.setState({ github: s })
        })
        .catch(console.log)
    }

    fetchCovidData(){
        fetch('/api/covid')
        .then(res => res.json())
        .then((res) => {
        	console.log(res.success)
            this.setState({ covid: res.data })
        })
        .catch(console.log)
    }

    
    render() {
        return (
            <Layout>
				<main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
					<div className="bg-gray-100 mb-16">
						<Chart />
					</div>
					<div className="flex flex-col md:flex-row">
						<div className="md:ml-6 md:w-2/3 mb-16">
							<h2 className="font-bold mb-3 text-xl">New Covid cases by day in NYC</h2>
							<p className="mb-6">{this.state.github}</p>
							<Button href="https://github.com/nychealth/coronavirus-data">NYC Health Github</Button>
						</div>
						<div className="md:w-1/3">
							<h2 className="font-bold mb-3 text-xl">New York State:</h2>
							<div className="mb-6">
								{this.state.totals.map((section:any, index) => (
								<div key={index}><strong>{section[0].replace('*', '')}</strong> <NumberValue value={section[1]} /></div>
								))}
							</div>
							<h2 className="font-bold mb-3 text-xl">United States:</h2>
						</div>
					</div>
				</main>
		    </Layout>
        );
    }
}

export default Visualization;						