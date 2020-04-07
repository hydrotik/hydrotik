import * as React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import CSS from 'csstype';

type Props = {
  footerTitle?: string
}

const Footer: React.FunctionComponent<Props> = ({
  children,
  footerTitle = '\u00A9 ' + (new Date()).getFullYear() + ' Hydrotik'
}) => (
  <footer className="bg-red-300">
      <ul className="flex items-center justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm text-gray-900">
        <li>
          {footerTitle}
        </li>

        <li>
          <Link href="https://github.com/hydrotik">
            <a>
              Github
            </a>
          </Link>
        </li>
      </ul>
  </footer>
)

export default Footer;