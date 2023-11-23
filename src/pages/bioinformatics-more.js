import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"

const BioinformaticsMorePage = () => (
  <Layout>
    <SEO
      title="What really is Bioinformatics"
      description="What really is Bioinformatics (Márton Münz's website)"
    />
    <p className="font-serif text-3xl mb-7">What really is Bioinformatics?</p>
    <p className="text-yellow-300">Coming soon...</p>
    <br />
    <br />
    <Link className="text-yellow-200 text-md" to="/bioinformatics">
      | Back |
    </Link>
  </Layout>
)

export default BioinformaticsMorePage
