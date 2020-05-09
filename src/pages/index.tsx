import { NextPage } from 'next';
import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import Layout from '../components/global/layout';
import TextLoop from '../components/ui/TextLoop';


type Props = {
	dynProp: string;
}

type SrcSetProps = {
	srcSet: string;
	sizes: string;
}

const Home: NextPage<{ dynProp: string }> = ({
	dynProp,
}) => (
	<Layout className="bg-black">
		<div className="bg-gray-400">
			<ProgressiveImage
				src="images/city_md.jpg"
				srcSetData={{
					srcSet: 'images/city_sm.jpg 320w, images/city_md.jpg 700w, images/city_lrg.jpg 2000w',
					sizes: '(max-width: 2000px) 100vw, 2000px',
				}}
				placeholder="images/city_tiny.jpg"
			>
				{(src: string, _loading: boolean, srcSetData: SrcSetProps): JSX.Element => (
					<img
						src={src}
						srcSet={srcSetData.srcSet}
						sizes={srcSetData.sizes}
						alt="Hydrotik Hero Serene View"
						className="object-cover w-full"
					/>
				)}
			</ProgressiveImage>
		</div>

		<main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16 text-white">
			<div className="flex flex-col md:items-left md:justify-left">
				<h1 className="my-8 text-lg md:text-2xl">
					Now more than ever,
					{` ${dynProp} `}
					bring us together.
					<br />
					<br />
					<TextLoop />
				</h1>
			</div>
		</main>
	</Layout>
);

Home.getInitialProps = async (): Promise<Props> => {
	const dynProp = 'digital experiences';
	return { dynProp };
};

export default Home;
