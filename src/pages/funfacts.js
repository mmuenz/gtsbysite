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
    ● I spent 14473 days (1,250,467,200 seconds) on Earth up to this moment.
    </p>
<p> ● 60% of my body is water. </p>

<p>● Since I was born, the world's population grew by .... (...%) </p>

<p>
● The five most frequent word in my PhD thesis were "protein", "dynamics", "binding", "sequence", and "PDZ domains".
</p>
<p>
● I took 12,616 tablets of Myfortic to date (a medication for preventing rejection following organ transplantation).
</p>
<p>● I live 20 minutes from the sea.</p>
<p>
● My favourite fruit is watermelon.</p>
<p>
● I've seen the trip hop legend <a className="underline decoration-yellow-300 font-medium" href="https://www.youtube.com/watch?v=kbSTA5aEYBo">Tricky</a> performing live three times.</p>

<p>
● ...</p>

<p>
● ...</p>


  </Layout>
)

export default FunFactsPage
