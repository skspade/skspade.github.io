import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

const Skill = ({ text, icon }: { text: string; icon: IconProp }) => {
  return (
    <div className="flex flex-col w-1/3 p-8">
      <FontAwesomeIcon fixedWidth icon={icon} className="mx-auto" size={"2x"} />
      <div className="text-center">{text}</div>
    </div>
  )
}

export default Skill
