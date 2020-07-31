import { graphql, useStaticQuery } from "gatsby"

export interface AllBlogPostsQuery {
  allMarkdownRemark: AllMarkdownRemark
  extensions: Extensions
}

export interface AllMarkdownRemark {
  nodes: Node[]
}

export interface Node {
  frontmatter: Frontmatter
}

export interface Frontmatter {
  draft: boolean
  title: string
  description: string
  createdDate: string
  tags: string
  path: string
  image: Image | null
}

export interface Image {
  id: string
  childImageSharp: ChildImageSharp
}

export interface ChildImageSharp {
  fluid: Fluid
}

export interface Fluid {
  base64: string
  aspectRatio: number
  sizes: string
  src: string
  srcSet: string
}

export interface Extensions {}

export interface Extensions {}

export const AllBlogPosts = graphql`
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
          image {
            id
            childImageSharp {
              fluid {
                base64
                aspectRatio
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  }
`

export const useQueryAllBlogPosts = () => {
  return useStaticQuery<AllBlogPostsQuery>(AllBlogPosts)
}
