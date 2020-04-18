import * as React from "react";
import styles from './Button.module.css'
import Link from 'next/link';

export interface IButton extends React.Component<IProps> {
    checkHref(href:string):boolean;
}

type IProps = {
	href: string
	target?: string
	children:any;
}


class Button extends React.Component<IProps> implements IButton {


	constructor(props:IProps) {
		super(props);
	}

	componentDidMount() {
	}

	checkHref(href:string){
		return this.props.href != '';
	}

	render(){
		return (
			<a href={this.props.href} className="btn-blue no-underline" target={this.props.target}>
				{this.props.children}
			</a>
		)
	}
}

export default Button;


/* TODO

// https://medium.com/@acesmndr/testing-react-functional-components-with-hooks-using-enzyme-f732124d320a

const Button: React.FunctionComponent<IProps> | IButton  = ({
	children,
	href,
	target = "_blank"
}) => {

	function checkHref(){
		return href != '';
	}

	return (
		<a href={href} className="btn-blue no-underline" target={target}>
			{children}
		</a>
	)
}

*/