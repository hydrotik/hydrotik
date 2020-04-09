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
  <Link href={href}>
      <a className="btn-blue no-underline"target={target}>
        {children}
      </a>
  </Link>
)

export default Button;