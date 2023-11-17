import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import YearBlock2023 from "../components/YearBlock2023"
import YearBlock from "../components/YearBlock"

import BlogPost from "../components/BlogPost"

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />
    <p className="text-3xl mb-7">Blog</p>

    <p className=" text-xl px-1">2023:</p>

    <BlogPost
      date="Nov 11"
      title="The best television"
      tags="Life, Barcelona"
      link="/television"
    />

    <BlogPost
      date="Sept 19"
      title="The illusion of making friends"
      tags="Tech, Humans"
      link="/humanoids"
    />

    <BlogPost
      date="Jul 20"
      title="Expanding our imagination with coding"
      tags="Tech, Humans, Art"
      link="/coding"
    />

    <BlogPost
      date="May 24"
      title="A good story to tell"
      tags="Life, Science"
      link="/goodstory"
    />

    <BlogPost
      date="Apr 8"
      title="In loving memory of my first computer"
      tags="Tech"
      link="/memories"
    />

    <BlogPost
      date="Jan 16"
      title="A personal manifesto"
      tags="-"
      link="/manifesto"
    />
  </Layout>
)

export default BlogPage
