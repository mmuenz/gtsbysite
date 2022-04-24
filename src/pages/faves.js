import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const FavesPage = () => (
  <Layout>
    <Seo title="Faves" />
    
    <p className="text-3xl">My favorites</p>
    <div>
        <p>Blabla.</p>
       <div className="pt-1">
          <p className="text-2xl my-3">Fiction Books:</p>
          <p className="p-0 my-2">● Station Eleven (by Emily St. John Mandel)</p> 
          <p className="p-0 my-2">● Never Let Me Go (by Kazuo Ishiguro)</p> 
      </div>

      <div className="pt-1">
          <p className="text-2xl my-3">Non-fiction Books:</p>
          <p className="p-0 my-2">● The Pragmatic Programmer (by Andy Hunt and Dave Thomas)</p> 
          <p className="p-0 my-2">● Eloquent JavaScript (by Marijn Haverbeke)</p> 
          <p className="p-0 my-2">● Steve Jobs (by Walter Isaacson)</p> 
      </div>





      <div className="pt-2">
          <p className="text-2xl my-3">Movies:</p>
          <p className="p-0 my-2">● Being John Malkovich (1999 - American Comedy/Fantasy)</p> 
          <p className="p-0 my-2">● The Lives of Others (2006 - German Drama/Thriller)</p> 
          <p className="p-0 my-2">● Il Postino (1994 - Italian Romance/Drama)</p> 
          <p className="p-0 my-2">● Pain and Glory (2019 - Spanish Drama) </p> 
          <p className="p-0 my-2">● Moonlight (2016 - American Drama)</p> 
          <p className="p-0 my-2">● The Firemen's Ball (1967 - Czech Comedy/Drama)</p> 
          <p className="p-0 my-2">● Wild Tales (2014 - Argentinian Comedy/Thriller)</p> 
          <p className="p-0 my-2">● Good Bye Lenin! (2003 - German Drama/Comedy)</p> 
          <p className="p-0 my-2">● Do the Right Thing (1989 - American Drama/Comedy)</p> 
          <p className="p-0 my-2">● In the Soup (1992 - American Comedy)</p> 
          <p className="p-0 my-2">● Macadam Stories (2015 - French Comedy/Drama)</p> 
          <p className="p-0 my-2">● Smoke (1995 - American Drama)</p> 
          <p className="p-0 my-2">● Back to the Future (1985 - American Sci-fi/Comedy)</p>
      </div>

      <div className="pt-1">
          <p className="text-2xl my-3">Documentaries:</p>
          <p className="p-0 my-2">● blabla</p> 
          <p className="p-0 my-2">● ...</p> 
      </div>

      <div className="pt-2">
          <p className="text-2xl my-3">Podcasts:</p>
          <p className="p-0 my-2">● blabla</p> 
          <p className="p-0 my-2">● ...</p> 
      </div>

     
      <div className="pt-1">
          <p className="text-2xl my-3">Articles:</p>
          <p className="p-0 my-2">● <a href="https://web.stanford.edu/~fukamit/schwartz-2008.pdf" className=" underline decoration-yellow-300 font-medium">The importance of stupidity in scientific research</a> (Journal of Cell Science)</p> 
          <p className="p-0 my-2">● <a href="https://www.theguardian.com/world/2019/sep/20/walking-friendship-tiramisu-genoa-centenarians-secrets-longevity" className=" underline decoration-yellow-300 font-medium">Walking, friendship and tiramisu: Genoa’s centenarians share secrets of longevity</a> (The Guardian)</p> 
          <p className="p-0 my-2">● <a href="https://www.nytimes.com/2010/01/10/weekinreview/10stone.html" className=" underline decoration-yellow-300 font-medium">The Children of Cyberspace: Old Fogies by Their 20s</a> (The New York Times)</p>
      </div>
      

    </div>
  </Layout>
)

export default FavesPage
