import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
}
const Container = ({ children }: Props) => {
  return <div className="flex flex-wrap justify-center">{children}</div>
}

export default Container
