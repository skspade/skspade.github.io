import React from "react"
import Link from "./Link"

export const Menu = () => {
  return (
    <nav className="flex justify-center p-6 text-lg">
      <Link to="/">About</Link>
      <Link to="/projects/">Projects</Link>
      <Link to="/blog/">Blog</Link>
    </nav>
  )
}
