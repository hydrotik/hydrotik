import * as React from 'react'

import Header from "./header";
import Footer from "./footer";

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
)

export default Layout