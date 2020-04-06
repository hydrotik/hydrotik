import { NextPage } from 'next';
import Link from 'next/link';
import Layout from "../components/layout";
import ProgressiveImage from "../components/ProgressiveImage";

const Home: NextPage<{ dynProp: string }> = ({ dynProp }) => (
	<Layout>

      <div className="bg-gray-400">
		<ProgressiveImage
			  preview="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QPlaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iODE4QkQyMEI4RTBFRUJDNkQzRkQ3NDRDQUI5OTAyMUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkRCRTM0ODQ2RkMyMTFFQTlFMjZCNEU5Qjg2QUMzQTEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkRCRTM0ODM2RkMyMTFFQTlFMjZCNEU5Qjg2QUMzQTEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIExpZ2h0cm9vbSA1LjMgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjU2RDRDN0QzMjQzMTFFQTlFMDBGNDNGRDJDNDhCQ0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjU2RDRDN0UzMjQzMTFFQTlFMDBGNDNGRDJDNDhCQ0UiLz4gPGRjOmNyZWF0b3I+IDxyZGY6U2VxPiA8cmRmOmxpPkFMRVhfQTwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvZGM6Y3JlYXRvcj4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7QBIUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAA8cAVoAAxslRxwCAAACAAIAOEJJTQQlAAAAAAAQ/OEfici3yXgvNGI0B1h36//uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIAAgAGAMBEQACEQEDEQH/xABdAAEBAAAAAAAAAAAAAAAAAAAGBAEBAAMAAAAAAAAAAAAAAAAAAwIEBRAAAQMEAwAAAAAAAAAAAAAAAQAxAhEDBAUhBgcRAQEBAQEBAAAAAAAAAAAAAAEAAgMRFP/aAAwDAQACEQMRAD8AIW/TMa/QMSgOban0FLse4QnFnTZPKG+ox/M3xIMgOEw1fTf/2Q=="
			  image={`images/city_lrg.jpg`}
			  className="object-cover w-full"
		/>
	  </div>

	  <main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
	      <div className="flex flex-col items-center justify-center">
	        <h2 className="font-bold my-8 p-3 text-lg md:text-2xl">
	          Hi! Welcome to a Next.js site.
	        </h2>
	        <h1>Hello {dynProp} World!</h1>
	      </div>
      </main>
    </Layout>
);

Home.getInitialProps = async ({ req }) => {
  const dynProp = 'Dynamic';
  return { dynProp };
};

export default Home;