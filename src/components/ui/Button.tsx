import * as React from "react";
import styles from './Button.module.css'
import Link from 'next/link';


type Props = {
	href: string
	target?: string
}

const Button: React.FunctionComponent<Props> = ({
	children,
	href,
	target = "_blank"
}) => (
	<a href={href} className="btn-blue no-underline" target={target}>
		{children}
	</a>
)

export default Button;