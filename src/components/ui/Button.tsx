import styles from './Button.module.css'
import Link from 'next/link';

export default function Button() {
  return (
    <Link href="https://github.com/hydrotik/hydrotik">
      <a className="btn-blue no-underline">
        Github
      </a>
    </Link>
  )
}