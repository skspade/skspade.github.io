import React from "react"
import Tag from "../Post/Tag"
import { navigate } from "gatsby"
import Img from "gatsby-image"
import { Image } from "../../graphql/queries"

interface Props {
  path?: string
  url?: string
  title: string
  description: string
  createdDate: string
  tags?: string
  image?: Image | null
  imageSrc?: string
}

export const PostCard = ({
  description,
  image,
  path,
  tags,
  title,
  url,
}: Props) => {
  return (
    <div
      className="transform hover:scale-110 duration-150 cursor-pointer max-w-md mx-6"
      onClick={() => {
        path ? navigate(path) : window.open(url)
      }}
    >
      <div className="rounded overflow-hidden shadow-lg">
        <div className="overflow-hidden" style={{ height: "300px" }}>
          <Img
            className="w-full"
            fluid={image?.childImageSharp?.fluid}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="px-6 py-4 h-40">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 py-4">
          {tags && tags.split(",").map((tag) => <Tag title={tag} />)}
        </div>
      </div>
    </div>
  )
}
export default PostCard
