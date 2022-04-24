import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Seo title="About" />
    
    <p className="text-3xl">Contact me</p>

      <div className="pt-4">
           <span>I'd love to hear from you. You can email me at</span>
           <a className="underline decoration-yellow-300 font-medium pl-1">hello@martonmunz.com</a>
           <span>. </span>
      </div>
      <div className="py-4">
          <span>Let's also connect on</span>
            <a className="underline decoration-yellow-300 font-medium px-1" href="https://www.linkedin.com/in/m%C3%A1rton-m%C3%BCnz-phd-368855158/">LinkedIn</a>
            <span>and/or</span>
          <a className="underline decoration-yellow-300 font-medium pl-1" href="https://twitter.com/munzmarci">Twitter</a>
          <span>. </span>
      </div>
  </Layout>
)

export default ContactPage
