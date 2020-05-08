import { NextPage } from 'next';
import React from 'react';
import Layout from '../components/global/layout';
import TextLoop from '../components/ui/TextLoop';
import ProgressiveImage from '../components/ui/ProgressiveImage';

type Props = {
	dynProp: string;
}

const Home: NextPage<{ dynProp: string }> = ({
	dynProp,
}) => (
	<Layout className="bg-black">
		<div className="bg-gray-400">
			<ProgressiveImage
				preview="data:image/jpeg;base64,/9j/4QAwRXhpZgAASUkqAAgAAAABAJiCAgAMAAAAGgAAAAAAAABQYXVsIEtlbGxlcgAAAP/sABFEdWNreQABAAQAAAA8AAD/4QWOaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgeG1wUmlnaHRzOk1hcmtlZD0iVHJ1ZSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSI4NTQ3NDMyMEMwNkNFMDg4MDEzQzhBRTI4MDkzMkZCNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFQzVGRjBBMzg4RjAxMUVBQkY4NEM5MEJBNDUxMTc5MCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFQzVGRjBBMjg4RjAxMUVBQkY4NEM5MEJBNDUxMTc5MCIgeG1wOkNyZWF0b3JUb29sPSJBZG9i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"
				image="images/city_md.jpg"
				className="object-cover w-full"
				srcSet="images/city_sm.jpg 640w, images/city_md.jpg 768w, images/city_lrg.jpg 1024w"
				alt="Hydrotik Hero Image Serene View"
			/>
		</div>

		<main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16 text-white">
			<div className="flex flex-col md:items-left md:justify-left">
				<h1 className="font-bold my-8 text-lg md:text-2xl">
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
