import { element } from "prop-types"
import React, { useState } from "react"
import { Link } from "gatsby"

const BlogPostPanel = ({ date, title, category, path }) => {
  return (
    <div className="mt-1 ml-12">
      <Link to={path}>
        <span className="pr-4 text-md">{date}</span>
        <span className="text-yellow-200 text-md">{title}</span>
        <span className="p-2 text-md">|</span>
        <span className=" text-md">{category}</span>
      </Link>
    </div>
  )
}

export default BlogPostPanel
