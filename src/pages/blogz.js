import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import YearBlock2023 from "../components/YearBlock2023"
import YearBlock from "../components/YearBlock"

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />
    <p className="text-3xl mb-7">Blog</p>

    <p className=" text-xl">2023:</p>

    <div className="mt-1 ml-12">
      <Link to="/humanoids">
        <span className="pr-4 text-md">Sept 19</span>
        <span className="text-yellow-200 text-md">
          The illusion of making friends
        </span>
        <span className="p-2 text-md">|</span>
        <span className=" text-md">Tech, Humans</span>
      </Link>
    </div>

    <div className="mt-1 ml-12">
      <Link to="/coding">
        <span className="pr-4 text-md">Jul 20</span>
        <span className="text-yellow-200 text-md">
          Expanding my imagination with coding
        </span>
        <span className="p-2 text-md">|</span>
        <span className=" text-md">Tech, Humans, Art</span>
      </Link>
    </div>

    <div className="mt-1 ml-12">
      <Link to="/goodstory">
        <span className="pr-4 text-md">May 24</span>
        <span className="text-yellow-200 text-md">A good story to tell</span>
        <span className="p-2 text-md">|</span>
        <span className=" text-md">Life, Science</span>
      </Link>
    </div>

    <div className="mt-1 ml-12">
      <Link to="/memories">
        <span className="pr-4 text-md">Apr 8</span>
        <span className="text-yellow-200 text-md">
          In loving memory of my first computer
        </span>
        <span className="p-2 text-md">|</span>
        <span className=" text-md">Tech</span>
      </Link>
    </div>

    <div className="mt-1 ml-12">
      <Link to="/manifesto">
        <span className="pr-4 text-md">Jan 16</span>
        <span className="text-yellow-200 text-md">A personal manifesto</span>
        <span className="p-2 text-md">|</span>
        <span className=" text-md">?</span>
      </Link>
    </div>
  </Layout>
)

export default BlogPage
