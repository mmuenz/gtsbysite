import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    
      <p>Hello, welcome to my corner in the Cyberspace! 🚀</p>
      <div>
        <p> 
        I'm a Computational Biologist and <a className="underline decoration-yellow-300 font-medium">Bioinformatician</a> who enjoys writing. 
          I'm currently based in Barcelona, Spain, but was born in Budapest. I have also lived 8 and a 1/2 years in Oxford, England.
        </p>

        <p className="p-0 mx-0 my-2">This is me:</p>
        <StaticImage
          src="../images/me.png"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="me"
          style={{ marginBottom: `1.45rem` }}
          />

        <p className="my-2">
          Wanna know more? Check out <Link to="/funfacts" className="underline decoration-yellow-300 font-medium">some fun facts about me</Link>, <Link to="/faves" className="underline decoration-yellow-300 font-medium">my favorite things</Link>, <Link to="/milestones" className="underline decoration-yellow-300 font-medium">milestones in my life</Link>, <Link to="/now" className="underline decoration-yellow-300 font-medium">what I'm up to these days</Link>, and some <Link to="/uses" className="underline decoration-yellow-300 font-medium"> digital tools I use</Link>.
          You can also have a peak into <Link to="/blog" className="underline decoration-yellow-300 font-medium">my blog</Link>, read about <Link to="/work" className="underline decoration-yellow-300 font-medium">my work</Link>, or learn about <Link to="/alport" className="underline decoration-yellow-300 font-medium">Alport Syndrome</Link>, the inherited kidney disease I live with. Thanks a lot for your interest! 🙂
        </p>
        </div>
    

  </Layout>
)

export default IndexPage
