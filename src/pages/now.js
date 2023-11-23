import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NowPage = () => (
  <Layout>
    <Seo title="Now" />
    <p className="font-serif text-md">
      Welcome to my /now page, a dynamic section on the website that offers a
      glimpse into my present focus, ongoing projects, and short-term goals. The
      list below will be kept up-to-date. This page has been inspired by web
      pages such as{" "}
      <a
        className="underline decoration-yellow-300 font-medium"
        href="https://sive.rs/now"
        target="_blank"
      >
        this
      </a>
      ,{" "}
      <a
        className="underline decoration-yellow-300 font-medium"
        href="https://nownownow.com/about"
        target="_blank"
      >
        this
      </a>
      , and{" "}
      <a
        className="underline decoration-yellow-300 font-medium"
        href="https://hack.org/mc/now.html"
        target="_blank"
      >
        this
      </a>
      . <br />
    </p>
    <p className="text-xm">
      <span className="text-xl text-yellow-300 mr-2">
        What am I up to these days?
      </span>{" "}
      <br />- Last updated: 3/11/2023 -
    </p>

    <p>
      <b>● Get certified by AWS:</b> At The Bioinformatics CRO, our
      computational infrastructure is based on the AWS (Amazon Web Services)
      cloud. As IT Director, I've been responsible for managing our cloud
      computing resources for the past 5 years. I am currently intensively
      studying to pass the{" "}
      <a
        href="https://aws.amazon.com/certification/certified-solutions-architect-associate/"
        target="_blank"
        className=" underline decoration-yellow-300 font-medium"
      >
        AWS Certified Solutions Architect - Associate
      </a>{" "}
      exam to further solidify and validate my AWS expertise.
    </p>

    <p>
      <b>● Keep learning web development</b>: After learning Node.js, Express,
      and React (i.e. the MERN stack) for web application development recently,
      I'm planning to expand my web dev knowledge by learning additional popular
      technologies: TypeScript, Next.js, Prisma, and GraphQL.
    </p>

    <p>
      <b>● Learn AI development</b>: I'm interested in integrating AI models,
      especially LLMs (Large Language Models), into some tools I'm creating, so
      I decided to learn AI development frameworks such as OpenAI API,
      LangChain, and Hugging Face. Having access to the powerful capabilities of
      AI from within my own Python and JavaScript code could open up a lot of
      exciting possibilities.
    </p>

    <p>
      <b>● Write more blog posts</b>: I'm aiming to write a few more totally
      random blog posts for this website in the near future. Writing without
      restrictions feels really great. This website is my space, so I will enjoy
      the freedom. 🙂
    </p>
  </Layout>
)

export default NowPage
