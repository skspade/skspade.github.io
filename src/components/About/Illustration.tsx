import React, { useState } from "react"
import {
  Afro,
  Fear,
  Happy,
  Hectic,
  Love,
  Rage,
  Suspicious,
} from "../../images/peeps"
interface Props {}

const Illustration = ({}: Props) => {
  const illustrations = [Afro, Fear, Happy, Hectic, Love, Rage, Suspicious]
  const randomNumber = Math.floor(Math.random() * illustrations.length)
  const [currentIllustration, setCurrent] = useState(
    illustrations[randomNumber]
  )
  console.log(currentIllustration)
  return (
    <div onClick={() => setCurrent(illustrations[randomNumber])}>
      {currentIllustration}
    </div>
  )
}

export default Illustration
