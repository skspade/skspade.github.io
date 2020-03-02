import React, { ReactElement } from "react"
import { Menu } from "../components/Header/Menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact"
import { faAws } from "@fortawesome/free-brands-svg-icons/faAws"
import { faTailwind } from "../images/tailwind"
import Skill from "../components/About/Skill"

function Index(): ReactElement {
  return (
    <>
      <Menu />
      <div className="h-screen">
        <div className="container mx-auto flex flex-col mt-40 mb-20">
          <h1 className="font-semibold text-center">Hey, I'm Sean Spade</h1>
          <p className="text-center">
            I'm a full-stack developer, who likes stuff 👍
          </p>
        </div>
        <div className="flex bg-green-200 py-3">
          <div className="container flex justify-around mx-auto mt-24">
            <Skill text={"I like react"} icon={faReact} />
            <Skill text={"I like AWS"} icon={faAws} />
            <Skill text={"I like Tailwind"} icon={faTailwind} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
