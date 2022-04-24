import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NowPage = () => (
  <Layout>
    <Seo title="Now" />
    <p className="font-serif text-lg">Hi, this is the /now page</p>
  </Layout>
)

export default NowPage
