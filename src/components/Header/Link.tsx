import React from "react"
import { Link } from "gatsby"

interface Props {
  to: string
  children: string
}
const CustomLink = ({ to, children }: Props) => {
  return (
    <Link
      to={to}
      className="block mt-4 inline-block mt-0 text-green-300 hover:text-black font-mono mr-4 no-underline"
      activeClassName={"text-black"}
      partiallyActive={true}
    >
      {children}
    </Link>
  )
}

export default CustomLink
