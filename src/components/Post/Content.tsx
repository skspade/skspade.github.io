import React from "react"
import { graphql } from "gatsby"
import { Menu } from "../Header/Menu"

const Content = ({ data }: Props) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post">
      <Menu />
      <div className="container mx-auto">
        <div className="mb-16">
          <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
          <h2>{frontmatter.createdDate}</h2>
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

interface Props {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        createdDate: string
        path: string
        title: string
      }
    }
  }
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        createdDate
        path
        title
      }
    }
  }
`
export default Content
