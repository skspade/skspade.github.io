import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
}
const Container = ({ children }: Props) => {
  return <div className="flex flex-wrap justify-center pt-20">{children}</div>
}

export default Container
