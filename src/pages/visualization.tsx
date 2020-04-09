import { NextPage } from 'next';
import Layout from "../components/global/layout";
import ProgressiveImage from "../components/ui/ProgressiveImage";
import Chart from "../components/ui/Chart";
import Button from "../components/ui/Button";
import { Controller, Scene } from 'react-scrollmagic';


const Visualization: NextPage = () => {

	return (
	    <Layout>
	    	
			<main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
				
				<div className="bg-gray-100 mb-16">
		    		<Chart />
			  	</div>


		      <div className="flex flex-col md:flex-row">
		      	<div className="md:ml-6 md:w-2/3">
		      		<h2 className="font-bold mb-3 text-xl">New Covid cases by day in NYC</h2>
	              	<p className="mb-6">Last updated [include last deployment date]</p>
	              	<Button href="https://github.com/nychealth/coronavirus-data">NYC Health Github</Button>
		        </div>
		      	<div className="md:w-1/3">
				          {[
				            {
								heading: `Region of the Americas`,
								body: `417 416 confirmed (33 174) 12 597 deaths (1500)`
							},
							{
								heading: `Western Pacific Region`,
								body: `114 667 confirmed (1026) 3922 deaths (30)`
							},
							{
								heading: `Eastern Mediterranean Region`,
								body: `81 993 confirmed (3428) 4314 deaths (165)`
							},
							{
								heading: `South-East Asia Region`,
								body: `10 707 confirmed (1575) 426 deaths (64)`
							},
							{
								heading: `African Region`,
								body: `7647 confirmed (555) 326 deaths (32)`
							},
							{
								heading: `WHO RISK ASSESSMENT`,
								body: `Global Level Very High`
							}
				          ].map((section, index) => (
				            <div key={index}>
				              <h2 className="font-bold mb-3 text-l" >{section.heading}</h2>
				              <p className="mb-6">{section.body}</p>
				            </div>
				          ))}
		        </div>
		      </div>
		     </main>
	    </Layout>
    )
};


export default Visualization;



						