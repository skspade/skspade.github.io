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
  const combinedClass = [
    "flex flex-col w-1/3 p-8",
    className,
    url ? "cursor-pointer" : "",
  ].join(" ")
  return (
    <div
      className={combinedClass}
      onClick={() => (url ? window.open(url) : "")}
    >
      {icon && (
        <FontAwesomeIcon
          fixedWidth
          icon={icon}
          className="mx-auto transition duration-500 transform hover:rotate-180"
          size={"6x"}
        />
      )}
      <div className="transition duration-500 transform hover:rotate-180">
        {svg}
      </div>
      <div className="text-center">{text}</div>
    </div>
  )
}

export default Skill
