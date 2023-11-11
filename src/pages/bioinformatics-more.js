import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const BioinformaticsMorePage = () => (
  <Layout>
    <Seo title="Work" />
    <p className="font-serif text-3xl mb-7">What really is Bioinformatics?</p>
    <p className="text-yellow-300">Coming soon...</p>
    <br />
    <Link className="text-yellow-200 text-md" to="/bioinformatics">
      | Back |
    </Link>
  </Layout>
)

export default BioinformaticsMorePage
