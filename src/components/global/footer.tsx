import * as React from 'react';
import Link from 'next/link';

type Props = {
	footerTitle?: string;
}

const Footer: React.FunctionComponent<Props> = ({ footerTitle = `\u00A9 ${(new Date()).getFullYear()} Hydrotik LLC` }) => (
	<footer className="bg-gray-900">
		<ul className="flex items-center justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm text-white">
			<li>
				{ footerTitle }
			</li>
			<li>
				<Link href="/terms">
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a className="block text-white" href="">Terms and Conditions</a>
				</Link>
			</li>
			<li>
				<Link href="/privacy">
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a className="block text-white" href="">Privacy Policy</a>
				</Link>
			</li>
			<li>
				<a className="block text-white" href="https://github.com/hydrotik/hydrotik" rel="noopener noreferrer" target="_blank">Github</a>
			</li>
			<li>
				<a className="block text-white" href="https://www.linkedin.com/in/donovanadams/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
			</li>
			<li>
				<a className="block text-white" href="http://www.hydrotik.com/portfolio/" rel="noopener noreferrer" target="_blank">Portfolio</a>
			</li>
		</ul>
	</footer>
);

export default Footer;
