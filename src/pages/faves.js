import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const FavesPage = () => (
  <Layout>
    <Seo title="Faves" />

    <p className="text-3xl">Things I liked and recommend</p>
    <div>
      <p>
        Here you find some of my favorite things. The following list is NOT
        comprehensive by any means. It's more like a random selection of stuff I
        liked, and I believe you might also enjoy. I hope you discover something
        here that you also find interesting.{" "}
      </p>
      <div className="pt-1">
        <p className="text-2xl my-3">Fiction Books:</p>
        <p className="p-0 my-2">● Station Eleven (by Emily St. John Mandel)</p>
        <p className="p-0 my-2">● Never Let Me Go (by Kazuo Ishiguro)</p>
        <p className="p-0 my-2">
          ● The Brief Wondrous Life of Oscar Wao (by Junot Díaz)
        </p>
        <p className="p-0 my-2">
          ● A Visit from the Goon Squad (by Jennifer Egan)
        </p>
        <p className="p-0 my-2">● Journey by Moonlight (by Antal Szerb)</p>
        <p className="p-0 my-2">● Ketchup (by Sławomir Mrożek)</p>
        <p className="p-0 my-2">● Intersection (by Paul Guimard)</p>
        <p className="p-0 my-2">● Search History (by Eugene Lim) </p>
      </div>

      <div className="pt-1">
        <p className="text-2xl my-3">Non-fiction Books:</p>
        <p className="p-0 my-2">
          ● The Pragmatic Programmer (by Andy Hunt and Dave Thomas)
        </p>
        <p className="p-0 my-2">● Superintelligence (by Nick Bostrom)</p>
        <p className="p-0 my-2">● Steve Jobs (by Walter Isaacson)</p>

        <p className="p-0 my-2">
          ● The Man from the Future: The Visionary Life of John von Neumann (by
          Ananyo Bhattacharya)
        </p>
        <p className="p-0 my-2">
          ● On Writing: A Memoir of the Craft (by Stephen King)
        </p>
        <p className="p-0 my-2">● The Psychology of Money (by Morgan Housel)</p>

        <p className="p-0 my-2">● The Lean Startup (by Eric Ries)</p>

        <p className="p-0 my-2">● The Personal MBA (by Josh Kaufman)</p>

        <p className="p-0 my-2">● Anything You Want (by Derek Sivers)</p>
      </div>

      <div className="pt-2">
        <p className="text-2xl my-3">Movies:</p>
        <p className="p-0 my-2">
          ● Being John Malkovich (1999 - American Comedy/Fantasy)
        </p>
        <p className="p-0 my-2">
          ● The Lives of Others (2006 - German Drama/Thriller)
        </p>
        <p className="p-0 my-2">● Il Postino (1994 - Italian Romance/Drama)</p>
        <p className="p-0 my-2">● Pain and Glory (2019 - Spanish Drama) </p>
        <p className="p-0 my-2">● Moonlight (2016 - American Drama)</p>
        <p className="p-0 my-2">
          ● The Firemen's Ball (1967 - Czech Comedy/Drama)
        </p>
        <p className="p-0 my-2">
          ● Wild Tales (2014 - Argentinian Comedy/Thriller)
        </p>
        <p className="p-0 my-2">
          ● Good Bye Lenin! (2003 - German Drama/Comedy)
        </p>
        <p className="p-0 my-2">
          ● Do the Right Thing (1989 - American Drama/Comedy)
        </p>
        <p className="p-0 my-2">● In the Soup (1992 - American Comedy)</p>
        <p className="p-0 my-2">
          ● Macadam Stories (2015 - French Comedy/Drama)
        </p>
        <p className="p-0 my-2">● Smoke (1995 - American Drama)</p>
        <p className="p-0 my-2">
          ● Back to the Future (1985 - American Sci-fi/Comedy)
        </p>
      </div>

      <div className="pt-1">
        <p className="text-2xl my-3">Documentaries:</p>
        <p className="p-0 my-2">
          ● Paraíso (2021 - Portuguese-French-Brazilian Documentary)
        </p>
        <p className="p-0 my-2">
          ● I Am Not Your Negro (2016 - American Documentary)
        </p>

        <p className="p-0 my-2">
          ● Man with a Movie Camera (1929 - Soviet Documentary)
        </p>

        <p className="p-0 my-2">
          ● Igor Levit - No Fear (2023 - German Documentary)
        </p>

        <p className="p-0 my-2">
          ● Gerhard Richter: Painting (2011 - German Documentary)
        </p>
      </div>

      <div className="pt-1">
        <p className="text-2xl my-3">Articles:</p>
        <p className="p-0 my-2">
          ● The importance of stupidity in scientific research (
          <a
            href="https://web.stanford.edu/~fukamit/schwartz-2008.pdf"
            className=" underline decoration-yellow-300 font-medium"
          >
            Journal of Cell Science
          </a>
          )
        </p>
        <p className="p-0 my-2">
          ● Walking, friendship and tiramisu: Genoa’s centenarians share secrets
          of longevity (
          <a
            href="https://www.theguardian.com/world/2019/sep/20/walking-friendship-tiramisu-genoa-centenarians-secrets-longevity"
            className=" underline decoration-yellow-300 font-medium"
          >
            The Guardian
          </a>
          )
        </p>
        <p className="p-0 my-2">
          ● Things You Learn Dating Cate Hall (
          <a
            href="https://sashachapin.substack.com/p/things-you-learn-dating-cate-hall"
            className=" underline decoration-yellow-300 font-medium"
          >
            Sasha's 'Newsletter'
          </a>
          )
        </p>

        <p className="p-0 my-2">
          ● There’s no speed limit (
          <a
            href="https://sive.rs/kimo"
            className=" underline decoration-yellow-300 font-medium"
          >
            Derek Sivers
          </a>
          )
        </p>

        <p className="p-0 my-2">
          ● 10 Types of Odd Friendships You’re Probably Part Of (
          <a
            href="https://waitbutwhy.com/2014/12/10-types-odd-friendships-youre-probably-part.html"
            className=" underline decoration-yellow-300 font-medium"
          >
            Wait But Why
          </a>
          )
        </p>

        <p className="p-0 my-2">
          ● Don't specialize, hybridize (
          <a
            href="https://stephango.com/hybridize"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            Steph Ango
          </a>
          )
        </p>

        <p className="p-0 my-2">
          ● Fixed vs. Growth: The Two Basic Mindsets That Shape Our Lives (
          <a
            href="https://www.themarginalian.org/2014/01/29/carol-dweck-mindset/"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            The Marginalian
          </a>
          )
        </p>
      </div>

      <div className="pt-2">
        <p className="text-2xl my-3">Podcasts:</p>
        <p className="p-0 my-2">● In Machines we trust</p>
        <p className="p-0 my-2">● The long and short of it</p>
        <p className="p-0 my-2">● Beautiful anonymous</p>
        <p className="p-0 my-2">● Modern love</p>
        <p className="p-0 my-2">● My first million</p>
        <p className="p-0 my-2">● Ologies</p>
        <p className="p-0 my-2">● Ctrl Alt Delete</p>
        <p className="p-0 my-2">● Radiolab</p>
        <p className="p-0 my-2">● Cortex </p>
        <p className="p-0 my-2">● Writing Excuses </p>
      </div>

      <div className="pt-1">
        <p className="text-2xl my-3">Youtube Channels:</p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            Traversy Media
          </a>{" "}
          (Dev)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/channel/UChSIn5kcWQvJxW17KIjdLVw"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            freeCodeCamp.org
          </a>{" "}
          (Dev)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/@sentdex"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            sentdex
          </a>{" "}
          (Dev)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/@PedroTechnologies"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            PedroTech
          </a>{" "}
          (Dev)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/channel/UChSIn5kcWQvJxW17KIjdLVw"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            HPC Tech Shorts
          </a>{" "}
          (Computing)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/channel/UChSIn5kcWQvJxW17KIjdLVw"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            ColdFusion
          </a>{" "}
          (Tech, Business)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/@TwoMinutePapers"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            Two Minute Papers
          </a>{" "}
          (Science, AI)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/channel/UChSIn5kcWQvJxW17KIjdLVw"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            Singularity Weblog
          </a>{" "}
          (Futurism, AI, Philosophy)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/@MITMediaLab"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            MIT Media Lab
          </a>{" "}
          (Tech, Innovation)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/@technologyreview"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            MIT Technology Review
          </a>{" "}
          (Tech, Future Trends)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/channel/UCMAQTBPIm_0zRgTQVjS2NIA"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            The James Kalm Report
          </a>{" "}
          (Art)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/channel/UCY2mhw-XNZSxrUynsI5K8Zw"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            Louisiana Channel
          </a>{" "}
          (Art)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://youtube.com/@jameskalmroughcut"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            James Kalm Rough Cut
          </a>{" "}
          (Art)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/channel/UC3I2GFN_F8WudD_2jUZbojA"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            KEXP
          </a>{" "}
          (Music)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/channel/UC-smeLB9AnOTeypr1YyjJ3A"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            ARTE Concert
          </a>{" "}
          (Music)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/@BBCMusic"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            BBC Music
          </a>{" "}
          (Music)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/channel/UCnTsUMBOA8E-OHJE-UrFOnA"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            Samuel and Audrey
          </a>{" "}
          (Food, Traveling)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/@leaw"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            Leave Everything and Wander
          </a>{" "}
          (Traveling, Life)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/@LifeWhereImFrom"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            Life Where I'm From
          </a>{" "}
          (Traveling, Life)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/channel/UC_zQ777U6YTyatP3P1wi3xw"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            Never Too Small
          </a>{" "}
          (Homes)
        </p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/channel/UCDsElQQt_gCZ9LgnW-7v-cQ"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            Kirsten Dirksen
          </a>{" "}
          (Homes, Simple Living)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://youtube.com/@FloLum"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            Flo Lum
          </a>{" "}
          (Cooking)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/channel/UCETyhmgxupv93Ix4VnIiQJQ"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            Italia Squisita
          </a>{" "}
          (Cooking)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/channel/UCN1h109PDDp_wYIFsoWmZrQ"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            Marion's Kitchen
          </a>{" "}
          (Cooking)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/channel/UCedsqpl7jaIb8BiaUFuC9KQ"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            Pasta Grannies
          </a>{" "}
          (Cooking)
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.youtube.com/@JaujaCocinaMexicana"
            target="_blank"
            className=" underline decoration-yellow-300 font-medium"
          >
            Jauja Cocina Mexicana
          </a>{" "}
          (Cooking)
        </p>
      </div>
    </div>
  </Layout>
)

export default FavesPage
