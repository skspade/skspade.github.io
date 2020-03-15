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
          draft: boolean
          createdDate: string
          description: string
          tags: string
        }
      }
    ]
  }
  allImageSharp: {
    nodes: [
      {
        original: {
          src: string
        }
      }
    ]
  }
}

function Index(): ReactElement {
  const {
    allMarkdownRemark: { nodes },
    allImageSharp,
  } = useStaticQuery<Query>(graphql`
    query AllPosts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            draft
            title
            description
            createdDate
            tags
            path
          }
        }
      }
      allImageSharp {
        nodes {
          original {
            src
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
        {/* eslint-disable-next-line array-callback-return */}
        {nodes.map((post, i) => {
          const draft = post.frontmatter.draft

          if (
            (process.env.NODE_ENV === "production" && !draft) ||
            process.env.NODE_ENV === "development"
          )
            return (
              <PostCard
                key={post.frontmatter.title}
                image={
                  allImageSharp.nodes[i] && allImageSharp.nodes[i].original.src
                }
                {...post.frontmatter}
              />
            )
        })}
      </div>
    </>
  )
}

export default Index
