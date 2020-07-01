import React, { ReactElement } from "react"
import { Menu } from "../components/Header/Menu"
import { CardContainer, Card } from "../components/Card"

function Projects(): ReactElement {
  return (
    <>
      <Menu />
      <CardContainer>
        <Card
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
