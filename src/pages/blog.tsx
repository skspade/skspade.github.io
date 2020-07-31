import React, { ReactElement } from "react"
import { Menu } from "../components/Header/Menu"
import { CardContainer, Card } from "../components/Card"
import { useQueryAllBlogPosts } from "../graphql/queries"

function Index(): ReactElement {
  const {
    allMarkdownRemark: { nodes },
  } = useQueryAllBlogPosts()

  return (
    <>
      <div>
        <Menu />
      </div>
      <CardContainer>
        {/* eslint-disable-next-line array-callback-return */}
        {nodes.map((post) => {
          const draft = post.frontmatter.draft

          if (
            (process.env.NODE_ENV === "production" && !draft) ||
            process.env.NODE_ENV === "development"
          )
            return <Card key={post.frontmatter.title} {...post.frontmatter} />
        })}
      </CardContainer>
    </>
  )
}

export default Index
