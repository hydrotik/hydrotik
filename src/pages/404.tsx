import Layout from '../components/global/layout';

export default function Custom404(): JSX.Element {
	return (
		<Layout>
			<main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
				<div className="flex flex-col md:items-center md:justify-center">
					<h1 className="font-bold text-xl mb-5">404 - Page Not Found</h1>
				</div>
			</main>
		</Layout>
	);
}
