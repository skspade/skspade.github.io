import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

const Skill = ({ text, icon }: { text: string; icon: IconProp }) => {
  return (
    <div className="flex flex-col">
      <FontAwesomeIcon fixedWidth icon={icon} className="mx-auto" size={"2x"} />
      <div className="ml-1 mt-2">{text}</div>
    </div>
  )
}

export default Skill
