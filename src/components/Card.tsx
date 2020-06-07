import React from "react"
import Tag from "./Post/Tag"
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
export const PostCard = (props: Props) => {
  return (
    <div className="container max-w-md mt-10">
      <div className="rounded overflow-hidden shadow-lg">
        <img
          className="w-full cursor-pointer"
          src={props.image || "https://tailwindcss.com/img/card-top.jpg"}
          alt="Sunset in the mountains"
          onClick={() => {
            props.path ? navigate(props.path) : window.open(props.url)
          }}
        />
        <div className="px-6 py-4">
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
