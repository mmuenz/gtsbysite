import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />
    <p className="text-3xl">Blog</p>

  </Layout>
)

export default BlogPage
