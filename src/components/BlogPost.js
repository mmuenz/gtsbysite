import React from "react"
import { Link } from "gatsby"

const BlogPost = ({ date, title, tags, link }) => {
  return (
    <div className="mt-1 ml-12">
      <Link className="flex" to={link}>
        <div className="pr-4 text-md w-20 flex justify-end">
          <span>{date}</span>
        </div>
        <div className="flex">
          <span className="text-yellow-200 text-md"> {title}</span>
          <span className="px-2 text-md">|</span>
          <span className=" text-md">{tags}</span>
        </div>
      </Link>
    </div>
  )
}

export default BlogPost
