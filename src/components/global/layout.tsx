import * as React from 'react';
import classnames from 'classnames';

import Header from './header';
import Footer from './footer';

type Props = {
	className?: string;
}

const Layout: React.FunctionComponent<Props> = ({
	children,
	className,
}) => (
	<div className={classnames('flex flex-col min-h-screen', className)}>
		<Header />
		{ children }
		<Footer />
	</div>
);

export default Layout;
