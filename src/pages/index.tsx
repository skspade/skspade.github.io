import React, { ReactElement } from "react"
import { Menu } from "../components/Header/Menu"
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact"
import { faAws } from "@fortawesome/free-brands-svg-icons/faAws"
import { faTailwind } from "../images/tailwind"
import ExercismIcon from "../images/exercism"
import Skill from "../components/About/Skill"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn"

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
        <div className="flex flex-col bg-green-200 py-10">
          <div className="flex justify-center pt-5">
            <h1 className="font-semibold">Here is some stuff I do</h1>
          </div>
          <div className="container flex flex-col mx-auto mt-24">
            <div className="flex justify-around">
              <Skill text={"I like react"} icon={faReact} />
              <Skill text={"I like AWS"} icon={faAws} />
              <Skill text={"I like Tailwind"} icon={faTailwind} />
            </div>
          </div>
        </div>
        <div className="flex flex-col py-10">
          <div className="flex justify-center pt-5">
            <h1 className="font-semibold">Here is some places I'm at</h1>
          </div>
          <div className="container flex flex-col mx-auto mt-24">
            <div className="flex justify-around">
              <Skill text={"Github"} icon={faGithubAlt} />
              <Skill text={"Linkedin"} icon={faLinkedinIn} />
              <ExercismIcon height="54" width="54" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
