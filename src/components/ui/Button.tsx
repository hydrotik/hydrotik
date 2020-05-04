import * as React from 'react';

export interface ButtonInterface extends React.Component<IProps> {
    checkHref(href: string): boolean;
}

type IProps = {
	href?: string;
	target?: string;
	children: React.ReactNode;
}


class Button extends React.Component<IProps> implements ButtonInterface {
	checkHref = (href: string): boolean => href !== '';

	render(): JSX.Element {
		const { href, target, children } = this.props;
		return (
			<a href={href} className="btn-blue no-underline" target={target}>
				{ children }
			</a>
		);
	}
}

export default Button;
