import React from "react"
import Tag from "../Post/Tag"
import { navigate } from "gatsby"

interface Props {
  path?: string
  url?: string
  title: string
  description: string
  createdDate: string
  tags?: string
  image?: string
}
//TODO Adjust so all images have the same height

export const PostCard = (props: Props) => {
  return (
    <div
      className="transform hover:scale-110 duration-150 cursor-pointer max-w-md mx-6"
      onClick={() => {
        props.path ? navigate(props.path) : window.open(props.url)
      }}
    >
      <div className="rounded overflow-hidden shadow-lg">
        <div className="overflow-hidden" style={{ height: "300px" }}>
          <img
            className="w-full"
            src={props.image || "https://tailwindcss.com/img/card-top.jpg"}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="px-6 py-4 h-40">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
        <div className="px-6 py-4">
          {props.tags && props.tags.split(",").map(tag => <Tag title={tag} />)}
        </div>
      </div>
    </div>
  )
}
export default PostCard
