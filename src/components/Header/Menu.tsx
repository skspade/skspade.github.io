import React from "react"
import { Link } from "gatsby"

export const Menu = () => {
  return (
    <nav className="flex justify-center p-6 text-lg">
      <Link
        to="/"
        className="block mt-4 inline-block mt-0 text-green-300 hover:text-black font-mono mr-4"
      >
        About
      </Link>
      <Link
        to="/projects/"
        className="block mt-4 inline-block mt-0 text-green-300 hover:text-black font-mono mr-4"
      >
        Projects
      </Link>
      <Link
        to="/blog/"
        className="block mt-4 inline-block mt-0 text-green-300 hover:text-black font-mono"
      >
        Blog
      </Link>
    </nav>
  )
}
