import { NextPage } from 'next';
import ProgressiveImage from 'react-progressive-image';
import Layout from '../components/global/layout';

type SrcSetProps = {
	srcSet: string;
	sizes: string;
}

const About: NextPage = (): JSX.Element => (
	<Layout>
		<main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
			<div className="flex flex-col md:flex-row">
				<div className="md:w-1/2">
					<h1 className="font-bold text-xl mb-5">About</h1>
					{[
						{
							heading: 'What is Hydrotik?',
							body: 'Hydrotik is an experiential digital consultancy with a focus on retail and entertainment brands. Engaging customer experiences, digital transformation, user experience, and multimedia/sound design are just a few of the things we specialize in.',
						},
						{
							heading: 'Donovan Adams',
							body: 'Donovan has been leading teams of developers and creative technologists for over 10 years. Over his 20 year career, he has worked for Saks Fifth Avenue, Hudson\'s Bay, Macys.com, NBC/Universal, Syfy channel, and R/GA.',
						},
					].map((section) => (
						<div key={section.heading}>
							<h2 className="font-bold mb-3 text-l">{section.heading}</h2>
							<p className="mb-6">{section.body}</p>
						</div>
					))}
				</div>

				<div className="md:ml-6 md:w-1/2">
					<ProgressiveImage
						src="images/nyc_md.jpg"
						srcSetData={{
							srcSet: 'images/nyc_sm.jpg 320w, images/nyc_md.jpg 700w, images/nyc_lrg.jpg 2000w',
							sizes: '(max-width: 2000px) 100vw, 2000px',
						}}
						placeholder="images/nyc_tiny.jpg"
					>
						{(src: string, _loading: boolean, srcSetData: SrcSetProps): JSX.Element => (
							<img
								src={src}
								srcSet={srcSetData.srcSet}
								sizes={srcSetData.sizes}
								alt="Hydrotik About City Scene"
								className="object-cover w-full"
							/>
						)}
					</ProgressiveImage>
				</div>
			</div>
		</main>
	</Layout>
);

export default About;
