import React, { ReactElement } from "react"
import { Menu } from "../components/Header/Menu"
import { CardContainer, Card } from "../components/Card"
import Covidbits from "../images/covidbits.png"

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
          tags="personal"
          url={"https://github.com/skspade/covidco"}
        />
        <Card
          createdDate={"2020-05-20"}
          description={
            "A site of filled with original and aggregated content regarding the COVID19 pandemic. "
          }
          title={"CovidBits"}
          image={Covidbits}
          tags="volunteer"
          url={""}
        />
      </CardContainer>
    </>
  )
}

export default Projects
