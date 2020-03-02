import React from "react"
import Tag from "./Tag"
import { Link, navigate } from "gatsby"

interface Props {
  path: string
  title: string
  description: string
  createdDate: string
  tags: string
}
export const PostCard = (props: Props) => {
  return (
    <div className="container max-w-md mt-10">
      <div className="rounded overflow-hidden shadow-lg">
        {/*TODO Programmatically use the picture from the blog post as the card's picture*/}
        <img
          className="w-full cursor-pointer"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
          onClick={() => navigate(props.path)}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
        <div className="px-6 py-4">
          {props.tags.split(",").map(tag => (
            <Tag title={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}
