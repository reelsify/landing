import * as React from "react"
import { Slice } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <Slice alias="header" />
      {children}
      <Slice alias="footer" />
    </>
  )
}

export default Layout
