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


type MyProps = {

};

type PDFProps = {
  heading: string;
  body: string;
};

type MyState = {
  github: string;
  pdf: PDFProps[];
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
            pdf: [],
            totals:[]
        };

        this.resolveCsvData = this.resolveCsvData.bind(this);
    }

    componentDidMount() {
        this.fetchGithub();
        //this.fetchPDF();
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
            let n = moment(d).format('LLLL');
            let f = moment(d).fromNow();
            let s = `Chart updated ${f} on ${n}`;
            this.setState({ github: s })
        })
        .catch(console.log)
    }

    fetchPDF(){
        fetch('/api/pdf')
        .then(res => res.json())
        .then((d) => {
            this.setState({ pdf: d.data })
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
			      	<div className="md:ml-6 md:w-2/3">
			      		<h2 className="font-bold mb-3 text-xl">New Covid cases by day in NYC</h2>
		              	<p className="mb-6">{this.state.github}</p>
		              	<Button href="https://github.com/nychealth/coronavirus-data">NYC Health Github</Button>
			        </div>
			      	<div className="md:w-1/3">
			      			<h2 className="font-bold mb-3 text-xl" >NYC:</h2>
			      			<div className="mb-6">
					          {this.state.totals.map((section:any, index) => (
					            <div key={index}><strong>{section[0]}</strong> <NumberValue value={section[1]} /></div>
					          ))}
					          </div>
			        </div>
			      </div>
			     </main>
		    </Layout>
        );
    }
}

export default Visualization;						