import React, { ReactElement } from "react"
import { PostCard } from "../components/Post/Card"
import { graphql, useStaticQuery } from "gatsby"
import { Menu } from "../components/Header/Menu"

interface Query {
  allMarkdownRemark: {
    nodes: [
      {
        frontmatter: {
          path: string
          title: string
          createdDate: string
          description: string
          tags: string
        }
      }
    ]
  }
}

function Index(): ReactElement {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery<Query>(graphql`
    query AllPosts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            description
            createdDate
            tags
            path
          }
        }
      }
    }
  `)

  return (
    <>
      <div>
        <Menu />
      </div>
      <div className="flex justify-around">
        {nodes.map(post => {
          return <PostCard {...post.frontmatter} />
        })}
      </div>
    </>
  )
}

export default Index
