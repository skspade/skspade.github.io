import React from "react"
import { Link } from "gatsby"
import { LinkGetProps } from "reach__router"

interface Props {
  to: string
  children: string
}

const CustomLink = ({ to, children }: Props) => {
  const isActive = ({ isCurrent }: LinkGetProps) => {
    return isCurrent
      ? {
          className:
            "block mt-4 inline-block mt-0 text-black font-mono mr-4 no-underline",
        }
      : {
          className:
            "block mt-4 inline-block mt-0 text-green-300 hover:text-black font-mono mr-4 no-underline",
        }
  }
  return (
    <Link to={to} getProps={isActive}>
      {children}
    </Link>
  )
}

export default CustomLink
