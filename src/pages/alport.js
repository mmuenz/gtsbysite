import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/SEO"

const AlportPage = () => (
  <Layout>
    <SEO
      title="Alport Syndrome"
      description="Alport Syndrome (Márton Münz's website)"
    />
    <p className="text-3xl">Alport Syndrome</p>

    <p>
      Alport Syndrome is a genetic disorder that primarily affects the kidneys,
      leading to progressive loss of kidney function. The disease also often
      causes hearing loss and eye abnormalities. It is caused by mutations in
      genes responsible for producing a protein called type IV collagen, which
      is important for maintaining the structure and function of the kidneys,
      inner ear, and eyes.
    </p>
    <p>
      Most commonly, Alport Syndrome is inherited in an X-linked pattern (since
      the causal gene is on the X-chromosome), which means it often affects
      males more severely than females. Symptoms usually appear in early
      childhood and may include blood in the urine, swelling in the legs and
      feet, and high blood pressure. Although there is no cure for Alport
      Syndrome, treatments often aim to slow the progression of kidney damage
      and manage symptoms.
    </p>

    <p>
      My goal with this page is to provide a list of helpful resources and
      information for individuals and families affected by Alport Syndrome.
    </p>

    <p className="text-yellow-300">Coming soon...</p>
  </Layout>
)

export default AlportPage
