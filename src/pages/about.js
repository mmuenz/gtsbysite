import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />

    <p className="text-3xl mb-7">About me</p>
    <div className="pr-20">
      <p>
        ● I'm Dr. Márton Münz, computational biologist and bioinformatician. 🧬
      </p>

      <p>
        ● At present, I'm Senior Scientist and IT Director at{" "}
        <a
          href="https://www.bioinformaticscro.com/"
          className="underline  decoration-yellow-300 font-medium"
        >
          The Bioinformatics CRO
        </a>
        , a global, distributed contract research company that specializes in
        providing computational biology services in the genomics space to small
        and medium-sized biotechnology companies. Previously, I've worked as a
        consultant for{" "}
        <a
          href="https://www.icr.ac.uk/"
          className="underline decoration-yellow-300 font-medium"
        >
          The Institute of Cancer Research (ICR), London
        </a>
        .
      </p>

      <p>
        ● I have a PhD in Bioinformatics from the{" "}
        <a
          href="https://www.ox.ac.uk/"
          className="underline  decoration-yellow-300 font-medium"
        >
          University of Oxford
        </a>
        , and an MSc in Physics from{" "}
        <a
          href="https://www.elte.hu/en/"
          className="underline decoration-yellow-300 font-medium"
        >
          Eötvös Loránd University (ELTE)
        </a>
        .
      </p>

      <p>
        ● My PhD thesis was about molecular dynamics, but in my current job I
        mostly deal with NGS (next-generation sequencing) data. You can read
        more about my work{" "}
        <Link
          to="/work"
          className="underline decoration-yellow-300 font-medium"
        >
          here
        </Link>
        .
      </p>

      <p>
        ● My broader interests include genomics, precision medicine, cloud
        computing, machine learning (AI), software development,
        entrepreneurship. I love{" "}
        <Link className="underline decoration-yellow-300 font-medium ">
          reading
        </Link>
        ,{" "}
        <Link className="underline decoration-yellow-300 font-medium">
          writing
        </Link>
        , and{" "}
        <Link className="underline decoration-yellow-300 font-medium">
          coding
        </Link>
        .
      </p>

      <p>
        ● Some other topics that excite me are genealogy research, the history
        of computers and computing, the impact of technology on our lives,
        accelerated learning, and self development.
      </p>

      <p>
        ● Before doing science, I worked as a science journalist for daily and
        weekly newspapers in Hungary. I wrote about biomedicine, health, and the
        environment.
      </p>

      <p>
        ● Currently I live in Barcelona, Spain 🌴 with my wife,{" "}
        <a
          href="https://www.brigittaboth.com/"
          className=" underline decoration-yellow-300 font-medium"
        >
          Brigitta
        </a>
        , a visual artist. Check out her collages and paintings{" "}
        <a
          href="https://www.instagram.com/brigittaboth_artist/"
          className="underline decoration-yellow-300 font-medium"
        >
          here
        </a>
        .
      </p>

      <p>
        ● I'm a creative and happy person. In my spare time, I enjoy going to
        restaurants, watching football (Barça!), reading contemporary fiction,
        walking in the city, people-watching, and visiting art exhibitions. I'm
        an introvert, but I value friendships more than anything.
      </p>

      <span className="text-lg font-bold">See also:</span>
      <div>
        <Link
          className=" underline decoration-yellow-300 font-medium"
          to="/milestones"
        >
          Milestones in my life
        </Link>
      </div>
      <div>
        <Link
          className=" underline decoration-yellow-300 font-medium"
          to="/manifesto"
        >
          A personal manifesto
        </Link>
      </div>
      <div>
        <Link
          className=" underline decoration-yellow-300 font-medium"
          to="/funfacts"
        >
          Fun facts about me
        </Link>
      </div>
      <div>
        <Link
          className=" underline decoration-yellow-300 font-medium"
          to="/faves"
        >
          My favorite things
        </Link>
      </div>
      <div>
        <Link
          className=" underline decoration-yellow-300 font-medium"
          to="/uses"
        >
          My digital toolbox
        </Link>
      </div>
      <div>
        <Link
          className=" underline decoration-yellow-300 font-medium"
          to="/alport"
        >
          Alport Syndrome
        </Link>
      </div>
    </div>
  </Layout>
)

export default AboutPage
