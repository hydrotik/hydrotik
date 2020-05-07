import * as React from 'react';

export interface ButtonInterface extends React.Component<IProps> {
    checkHref(href: string): boolean;
}

type IProps = {
	href?: string;
	target?: string;
	children: React.ReactNode;
	className?: string;
}


class Button extends React.Component<IProps> implements ButtonInterface {
	checkHref = (href: string): boolean => href !== '';

	render(): JSX.Element {
		const {
			href,
			target,
			children,
			className,
		} = this.props;
		return (
			<a
				href={href}
				className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ${className}`}
				target={target}
			>
				{ children }
			</a>
		);
	}
}

export default Button;
