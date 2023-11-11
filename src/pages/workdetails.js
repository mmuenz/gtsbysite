import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WorkDetailsPage = () => (
  <Layout>
    <Seo title="Work" />
    <p className="font-serif text-3xl mb-7">About my work (more details)</p>
    <p className="text-yellow-300">Coming soon...</p>
    <br />
    <Link className="text-yellow-200 text-md" to="/work">
      | Back |
    </Link>
  </Layout>
)

export default WorkDetailsPage
