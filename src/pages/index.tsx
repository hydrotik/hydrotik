import { NextPage } from 'next';
import Link from 'next/link';
import Layout from "../components/layout";
import TextLoop from "../components/TextLoop";
import moment from 'moment';
import ProgressiveImage from "../components/ProgressiveImage";



const Home: NextPage<{ dynProp: string }> = ({ dynProp }) => (
	<Layout className="bg-black">

      <div className="bg-gray-400">
		<ProgressiveImage
			  preview="data:image/jpeg;base64,/9j/4QAyRXhpZgAASUkqAAgAAAABAJiCAgAOAAAAGgAAAAAAAABTaW1vbiBOb3R0YWdlAAAA/+wAEUR1Y2t5AAEABAAAAEsAAP/hBAFodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSIxRkEyQUYzRTY3QzI5MDg3OTQzMjI4QThERTQ1NTUxMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MEMxNDYzMTZGREExMUVBQTNBQjkxRkI0NjFBMUM5QiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MEMxNDYzMDZGREExMUVBQTNBQjkxRkI0NjFBMUM5QiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplYTY2OWU3OS03NjU4LTRiMGUtOGFmOS1iOTdhNjI2NzU1ZTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZWE2NjllNzktNzY1OC00YjBlLThhZjktYjk3YTYyNjc1NWU2Ii8+IDxkYzpyaWdodHM+IDxyZGY6QWx0PiA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlNpbW9uIE5vdHRhZ2U8L3JkZjpsaT4gPC9yZGY6QWx0PiA8L2RjOnJpZ2h0cz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7QBaUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAACEcAVoAAxslRxwCAAACAAIcAnQADVNpbW9uIE5vdHRhZ2UAOEJJTQQlAAAAAAAQ81kE9MkGZ8d4pVx7LZAQIv/uAA5BZG9iZQBkwAAAAAH/2wCEAAMCAgICAgMCAgMFAwMDBQUEAwMEBQYFBQUFBQYIBgcHBwcGCAgJCgoKCQgMDAwMDAwODg4ODhAQEBAQEBAQEBABAwQEBgYGDAgIDBIODA4SFBAQEBAUERAQEBAQEREQEBAQEBAREBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAgAFAMBEQACEQEDEQH/xABjAAEBAAAAAAAAAAAAAAAAAAAHBgEAAgMAAAAAAAAAAAAAAAAAAwQFBgcQAAEDBAMBAAAAAAAAAAAAAAEAAgMREgUGIUEUFREAAQQCAwAAAAAAAAAAAAAAAAECEgMRITFBE//aAAwDAQACEQMRAD8AZdn2HC+8wztAkPSp6Wr0aAjl4IfZji5YXODOCEWu52RjGgyuw31LLRWqk/V8RSLZH//Z"
			  image={`images/sea_lrg.jpg`}
			  className="object-cover w-full"
		/>
	  </div>

	  <main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16 text-white">
	      <div className="flex flex-col items-center justify-left">
	        <h2 className="font-bold my-8 p-3 text-lg md:text-2xl">
	          Now more than ever, {dynProp} bring us together.
	        </h2>
	        <TextLoop />
	      </div>
      </main>
    </Layout>
);

Home.getInitialProps = async ({ req }) => {
  const dynProp = 'digital experiences';
  return { dynProp };
};

export default Home;