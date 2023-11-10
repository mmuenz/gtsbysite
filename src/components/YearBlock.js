import React from "react"
import BlogPostPanel from "./BlogPostPanel"

function YearBlock({ year }) {
  return (
    <div className="mt-5 mb-5">
      <div className="mt-3">
        <span className="text-lg font-bold">{year}</span>
      </div>

      <BlogPostPanel
        date="March 33"
        title="What do bioinformaticians do all day?"
        category="Science"
        path="what-do-bioinformaticians-do-all-day"
      />

      <BlogPostPanel
        date="August 12"
        title="A Real Madrid máris megnyerte a spanyol bajnokságot"
        category="Tech"
        path="valami"
      />

      <BlogPostPanel
        date="May 31"
        title="260 milliárd forintnyi vagyont foglaltak le a Xiaomitól Indiában"
        category="Sport"
        path="valami"
      />

      <BlogPostPanel
        date="March 33"
        title="What do bioinformaticians do all day?"
        category="Science"
        path="what-do-bioinformaticians-do-all-day"
      />

      <BlogPostPanel
        date="August 12"
        title="A Real Madrid máris megnyerte a spanyol bajnokságot"
        category="Tech"
        path="valami"
      />
    </div>
  )
}

export default YearBlock
