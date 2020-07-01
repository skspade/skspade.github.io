import React, { ReactElement } from "react"
import { Menu } from "../components/Header/Menu"
import { PostCard } from "../components/Card/Card"
import { CardContainer } from "../components/Card"

function Projects(): ReactElement {
  return (
    <>
      <Menu />
      <CardContainer>
        <PostCard
          createdDate={"2020-02-24"}
          description={
            "Holding companies accountable for their response to the COVID19 pandemic"
          }
          title={"CovidCo"}
          url={"https://github.com/skspade/covidco"}
        />
      </CardContainer>
    </>
  )
}

export default Projects
