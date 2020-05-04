import * as React from 'react';
import Button from '../ui/Button';

type Props = {
	footerTitle?: string;
}

const Footer: React.FunctionComponent<Props> = ({ footerTitle = `\u00A9 ${(new Date()).getFullYear()} Hydrotik` }) => (
	<footer className="bg-gray-900">
		<ul className="flex items-center justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm text-white">
			<li>
				{ footerTitle }
			</li>
			<li>
				<Button href="https://github.com/hydrotik/hydrotik">Github</Button>
			</li>
			<li>
				<Button href="https://www.linkedin.com/in/donovanadams/">Linkedin</Button>
			</li>
		</ul>
	</footer>
);

export default Footer;
