import { NextPage } from 'next';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
	<div>
		<h1>Hello world! - user agent: {userAgent}</h1>
		<p><a href="/about">About</a></p>
  	</div>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;