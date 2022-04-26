import { element } from 'prop-types';
import React, { useState } from 'react'
import { Link } from 'gatsby';

const BlogPostPanel = ({date, title, category, path}) => {
  return (
    <div className="mt-1">
      <Link to={path}> 
        <span className="pr-3 text-lg">{date}</span>
        <span className="text-yellow-300 text-lg">{title}</span>
        <span className="p-2 text-lg">|</span>
        <span className=" text-lg">{category}</span>
      </Link>
    </div>
  )
}

export default BlogPostPanel