import React, { ReactElement } from "react"
import { Menu } from "../components/Header/Menu"
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact"
import { faAws } from "@fortawesome/free-brands-svg-icons/faAws"
import { faTailwind } from "../images/customIcons"
import Skill from "../components/About/Skill"
import { faGithubAlt, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn"
import GraphqlLogo from "../images/GraphqlLogo"
import Illustration from "../components/About/Illustration"
import ExercismIcon from "../images/exercism"
//TODO Reformat the blog
function Index(): ReactElement {
  return (
    <>
      <Menu />
      <div className="h-screen">
        <div className="container mx-auto flex flex-col items-center mt-24 mb-20">
          <Illustration />
          <h1 className="font-semibold text-center text-4xl">
            Hey, I'm Sean Spade
          </h1>
          <p className="text-center text-lg mt-8">
            I believe technology can empower people. By providing and unlocking
            abilities that were not possible before on scales only limited by
            imagination.
          </p>
        </div>
        <div className="flex flex-col bg-green-200 py-10">
          <div className="flex justify-center pt-5">
            <h1 className="font-semibold">Here is some stuff I like</h1>
          </div>
          <div className="container flex flex-col mx-auto mt-16">
            <div className="flex flex-wrap justify-around ">
              <Skill text={"React"} icon={faReact} url="https://reactjs.org/" />
              <Skill text={"AWS"} icon={faAws} url="https://aws.amazon.com/" />
              <Skill
                text={"Tailwind"}
                icon={faTailwind}
                url="https://tailwindcss.com/"
              />
              <Skill
                text={"NodeJS"}
                url="https://nodejs.org/en/"
                icon={faNodeJs}
              />
              <Skill
                text={"GraphQL"}
                svg={<GraphqlLogo />}
                url="https://graphql.org/"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col py-10">
          <div className="flex justify-center pt-5">
            <h1 className="font-semibold">Find me here</h1>
          </div>
          <div className="container flex flex-col mx-auto mt-24">
            <div className="flex justify-around">
              <Skill
                text={"Github"}
                icon={faGithubAlt}
                url="https://github.com/skspade"
              />
              <Skill
                text={"Linkedin"}
                icon={faLinkedinIn}
                url="https://www.linkedin.com/in/skspade/"
              />
              <Skill
                text={"Exercism"}
                svg={<ExercismIcon />}
                url="https://exercism.io/profiles/skspade"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
