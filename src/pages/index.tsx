import React, { ReactElement } from "react"
import { Menu } from "../components/Header/Menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact"
import { faAws } from "@fortawesome/free-brands-svg-icons/faAws"
import { faTailwind } from "../images/tailwind"

function Index(): ReactElement {
  return (
    <>
      <Menu />
      <div className="h-screen">
        <div className="container mx-auto">
          <h1 className="font-semibold">Hey, I'm Sean Spade</h1>
          <p>I'm a full-stack developer, who likes stuff 👍</p>
          <div className="flex flex-col border border-gray rounded">
            <div className="border border gray">
              <FontAwesomeIcon fixedWidth icon={faReact} />
              <span> I like react</span>
            </div>
            <div className="border border gray">
              <FontAwesomeIcon fixedWidth icon={faAws} />
              <span> I like AWS</span>
            </div>
            <div className="border border gray">
              {/*<svg*/}
              {/*  className="fill-current h-8 w-8 mr-2"*/}
              {/*  width="54"*/}
              {/*  height="54"*/}
              {/*  viewBox="0 0 54 54"*/}
              {/*  xmlns="http://www.w3.org/2000/svg"*/}
              {/*>*/}
              {/*  <path*/}
              {/*    d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>*/}
              {/*</svg>*/}
              <FontAwesomeIcon fixedWidth icon={faTailwind} />
              <span> I like tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
