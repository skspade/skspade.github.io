import React, { ReactElement } from "react"
import { Menu } from "../components/Header/Menu"

function Index(): ReactElement {
  return (
    <>
      <Menu />
      <div className=" h-screen">
        <div className="container mx-auto">
          <h1 className="font-semibold">Hey, I'm Sean Spade</h1>
          <p>I'm a full-stack developer, who likes stuff 👍</p>
          <div className="flex flex-col border border-gray rounded">
            <div className="border border gray">
              <p> Yessir box 1</p>
            </div>
            <div className="border border gray">
              <p> Yessir box 2</p>
            </div>
            <div className="border border gray">
              <p> Yessir box 3</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
