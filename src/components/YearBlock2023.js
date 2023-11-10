import React from "react"
import BlogPostPanel from "./BlogPostPanel"

function YearBlock2023() {
  return (
    <div className="mt-5 mb-5">
      <div className="mt-3">
        <span className="text-lg font-bold">2023</span>
      </div>

      <BlogPostPanel
        date="May 24"
        title="A good story to tell"
        category="Life"
        path="goodstory"
      />

      <BlogPostPanel
        date="May 20"
        title="Memory of my first computer"
        category="Tech"
        path="memory-of-my-first-computer"
      />

      <BlogPostPanel
        date="May 19"
        title="What do bioinformaticians do all day?"
        category="Science"
        path="what-do-bioinformaticians-do-all-day"
      />
    </div>
  )
}

export default YearBlock2023
