import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/SEO"

const WorkDetailsPage = () => (
  <Layout>
    <SEO
      title="Work details"
      description="Work details page (Márton Münz's website)"
    />
    <p className="font-serif text-3xl mb-7">About my work (more details)</p>
    <p className="text-yellow-300">Coming soon...</p>
    <br />
    <br />
    <Link className="text-yellow-200 text-md" to="/work">
      | Back |
    </Link>
  </Layout>
)

export default WorkDetailsPage
