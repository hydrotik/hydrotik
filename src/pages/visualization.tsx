import React from 'react';
import fetch from 'node-fetch';
import Papa from 'papaparse';
import moment from 'moment';
import { NextPage } from 'next';
import { Controller, Scene } from 'react-scrollmagic';
import { merge, random, range } from "lodash";

import Layout from "../components/global/layout";
import ProgressiveImage from "../components/ui/ProgressiveImage";
import Chart from "../components/ui/Chart";
import Button from "../components/ui/Button";

import DataHelper from "../utils/DataHelper";


const colorDark:string = '';
const colorMed:string = '';
const colorLight:string = '';

type MyProps = {
	dc: DataHelper;
};

type CovidProps = {
  
};

type MyState = {
	github: string;
	covid: CovidProps[];
	totals: Array<object>;
	stateData: Array<object>;
	apiData: Array<string>;
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

const dc = new DataHelper()



function PDFItem(props:any) {
	if(props.children.includes('-')){
		return (
			<div key={props.index}>{props.children.replace('-', '\u2022')}</div>
		);
	}else{
		return (
			<div key={props.index} className="mt-4 -mb-4"><strong>{props.children}</strong></div>
		);
	}
}

function PDFSection(props:any) {
	if(!process.env.IS_GITHUBPAGES){
		return (
			<div className="mb-6">
			<h2 className="font-bold mb-3 text-xl">New York City Details:</h2>
				{props.apiData.map((section:any, index:number) => (
					<PDFItem key={index}>{section}</PDFItem>
				))}
			</div>
		);
	}else{
		return (
			<></>
		);
	}
}

class Visualization extends React.Component<MyProps, MyState>{


    constructor(props:MyProps) {
        super(props);

        this.state = {
            github: 'Loading data...',
            covid: [],
            totals:[['Loading data...', '']],
            stateData:[],
            apiData:['Loading data...']
        };

        this.resolveCsvData = this.resolveCsvData.bind(this);
        this.resolveStateData = this.resolveStateData.bind(this);
        this.resolveGithubData = this.resolveGithubData.bind(this);
        this.parseGithubData = this.parseGithubData.bind(this);
        this.parseAPIData = this.parseAPIData.bind(this);
    }

    componentDidMount() {
        const rdcb = this.resolveStateData;

        dc.getData(
        	'https://raw.githubusercontent.com/chazeon/NYState-COVID-19-Tracker/master/data/NYC-covid-19-daily-data-summary.csv', 
        	function(data:any){
		        Papa.parse(data, {
			        header: false,
			        complete: rdcb,
			        dynamicTyping: true
			    })
		    }
	    )

	    const cvcb = this.resolveCsvData;

	    dc.getData(
        	'https://raw.githubusercontent.com/nychealth/coronavirus-data/master/summary.csv', 
        	function(data:any){
		        Papa.parse(data, {
			        header: false,
			        complete: cvcb,
			        dynamicTyping: true
			    })
		    }
	    )

	    const cghcb = this.resolveGithubData;
	    const ParseGithub = this.parseGithubData;

	    dc.getData(
        	'https://api.github.com/repos/nychealth/coronavirus-data/commits', 
        	function(data:any){
		        ParseGithub(data, {
			        complete: cghcb
			    })
		    }
	    )

	    if(!process.env.IS_GITHUBPAGES){
		    const apicb = this.resolveAPIData;
		    const ParseAPI = this.parseAPIData;

		    dc.getData(
	        	'/api/covid', 
	        	function(data:any){
			        ParseAPI(data, {
				        complete: apicb
				    })
			    }
		    )
		}
    }

    resolveCsvData(result:any) {
        this.setState({totals: result.data});
    }

    resolveStateData(result:any) {
    	this.setState({stateData: result.data});
    }

    resolveGithubData(result:any) {
        this.setState({ github: result })
    }

    parseGithubData(result:any, config:any) {
    	const r = JSON.parse(result)[0];
    	const d = r.commit.author.date;
	    const n = moment(d).format('MM/DD/YYYY, hh:hh a');
	    const s = `Chart updated on ${n}`;
	    config.complete.apply(this, [s]);
    }


    
    resolveAPIData(result:any) {
        this.setState({ apiData: result.data })
    }

    parseAPIData(result:any, config:any) {
	    config.complete.apply(this, [JSON.parse(result)]);
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
							<PDFSection apiData={this.state.apiData} />
							<Button href="https://github.com/nychealth/coronavirus-data">NYC Health Github</Button>
						</div>
						<div className="md:w-1/3">
							<h2 className="font-bold mb-3 text-xl">New York City:</h2>
							<div className="mb-6">
								{this.state.totals.map((section:any, index) => (
									<div key={index}><strong>{section[0].replace('*', '')}</strong> <NumberValue value={section[1]} /></div>
								))}
							</div>
							{/*<h2 className="font-bold mb-3 text-xl">New York State:</h2>*/}
						</div>
					</div>
				</main>
		    </Layout>
        );
    }
}

export default Visualization;						