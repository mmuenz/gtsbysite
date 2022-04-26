import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogPostPanel from "../components/BlogPostPanel"

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />
    <p className="text-3xl">Blog</p>

    <div className="mt-1">
      <Link to="learning-about-gatsby/"> 
        <span className="pr-3 text-lg">August 01, 2021</span>
        <span className="text-yellow-300 text-lg">Learning about Gatsby</span>
        <span className="p-2 text-lg">|</span>
        <span className=" text-lg">Science</span>
      </Link>
    </div>

    <div className="mt-1">
      <Link to="what-do-bioinformaticians-do-all-day"> 
        <span className="pr-3 text-lg">August 01, 2021</span>
        <span className="text-yellow-300 text-lg">What do bioinformaticians do all day?</span>
        <span className="p-2 text-lg">|</span>
        <span className=" text-lg">Tech</span>
      </Link>
    </div>

    <BlogPostPanel date="March 33, 1999" title="Hahahaha meg hihihihi" category="Philosophy" path="valami"/>

    <BlogPostPanel date="March 33, 1999" title="Hahahaha meg hihihihi" category="Philosophy" path="valami"/>

    <BlogPostPanel date="March 33, 1999" title="Hahahaha meg hihihihi" category="Philosophy" path="valami"/>

  </Layout>
)

export default BlogPage
