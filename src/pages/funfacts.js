import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const FunFactsPage = () => (
  <Layout>
    <Seo title="Fun facts" />
    <p className="text-3xl">Fun facts about me</p>
    <p>
      ● I have spent 14473 days (1,250,467,200 seconds) on Earth up to this
      moment
    </p>
    <p> ● 60% of my body is water </p>

    <p>
      ● Since I was born, the world's population grew by 3.6 billion (81.4%){" "}
    </p>
    <p>
      ● I have taken 12,616 tablets of Myfortic to date (a medication for
      preventing rejection following organ transplantation)
    </p>
    <p>● I live 20 minutes from the Mediterranean Sea</p>
    <p>● My favorite fruit is watermelon 🍉</p>
    <p>
      ● I've seen trip hop legend{" "}
      <a
        className="underline decoration-yellow-300 font-medium"
        href="https://www.youtube.com/watch?v=kbSTA5aEYBo"
        target="_blank"
      >
        Tricky
      </a>{" "}
      performing live 3 times
    </p>

    <p>● I can count to 10 in Hebrew</p>

    <p>
      ● I once shook hands with American athlete Mike Powell, the holder of the
      world record in long jump at 8.95 m
    </p>

    <p>
      ● My shortest chromosome (Chromosome 21) contains roughly 10 times more
      "letters" than William Shakespeare's complete works (39 plays, 154
      sonnets, and 2 long narrative poems)
    </p>

    <p>
      ● 1% of my ancestry is Italian, with a probable Sicilian origin (according
      to 23andme)
    </p>
  </Layout>
)

export default FunFactsPage
