import React, { ReactNode } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface Props {
  text: string
  icon?: IconProp
  svg?: ReactNode
  url?: string
  className?: string
}

const Skill = ({ text, icon, className, url, svg }: Props) => {
  const combinedClass = ["flex flex-col w-1/3 p-8", className].join(" ")
  return (
    <div className={combinedClass}>
      {icon && (
        <FontAwesomeIcon
          onClick={() => (url ? window.open(url) : "")}
          fixedWidth
          icon={icon}
          className="mx-auto"
          size={"2x"}
        />
      )}
      {svg}
      <div className="text-center">{text}</div>
    </div>
  )
}

export default Skill
