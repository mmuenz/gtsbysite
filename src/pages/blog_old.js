import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import YearBlock2023 from "../components/YearBlock2023"
import YearBlock from "../components/YearBlock"

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />
    <p className="text-3xl mb-7">Blog</p>

    <p>blabla blabla blabla ... </p>

    <YearBlock2023 />
  </Layout>
)

export default BlogPage
