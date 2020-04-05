import { NextPage } from 'next';
import Link from 'next/link';
import Layout from "../components/layout";


const Home: NextPage<{ dynProp: string }> = ({ dynProp }) => (
	<Layout>

      <div className="bg-gray-400">
		<img className="object-cover w-full" src="images/city.jpg" />
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