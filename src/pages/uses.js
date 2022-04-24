import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsesPage = () => (
  <Layout>
    <Seo title="Uses" />
    <p className="text-3xl">Some digital tools I use</p>
    <div>
        <p>This page was inspired by <a className="underline decoration-yellow-300 font-medium" href="https://wesbos.com/uses">this</a> and this.</p>
       <div className="pt-1">
          <p className="text-2xl my-3">Note taking:</p>
          <p className="p-0 my-2">● <a href="https://obsidian.md/" className="underline decoration-yellow-300 font-medium">Obsidian</a> as my "second brain"</p> 
          <p className="p-0 my-2">● <a href="https://www.notion.so/" className="underline decoration-yellow-300 font-medium">Notion</a>  for collaboration</p> 
      </div>

      <div className="pt-2">
          <p className="text-2xl my-3">Productivity tools:</p>
          <p className="p-0 my-2">● <a href="https://www.alfredapp.com/" className="underline decoration-yellow-300 font-medium">Alfred</a> (currently experimenting with <a href="https://www.raycast.com/" className="underline decoration-yellow-300 font-medium">Raycast</a>)</p> 
          <p className="p-0 my-2">● <a href="https://raindrop.io/" className="underline decoration-yellow-300 font-medium">Raindrop.io</a></p> 
          <p className="p-0 my-2">● <a href="https://ifttt.com/" className="underline decoration-yellow-300 font-medium">IFTTT</a></p> 
          <p className="p-0 my-2">● <a href="https://www.lastpass.com/" className="underline decoration-yellow-300 font-medium">LastPass</a></p> 
      </div>

      <div className="pt-2">
          <p className="text-2xl my-3">Terminal and shell:</p>
          <p className="p-0 my-2">● <a href="https://iterm2.com/" className="underline decoration-yellow-300 font-medium">iTerm2</a></p> 
          <p className="p-0 my-2">● <a href="https://en.wikipedia.org/wiki/Z_shell" className="underline decoration-yellow-300 font-medium">Z shell (zsh)</a> with <a href="https://ohmyz.sh/" className="underline decoration-yellow-300 font-medium">oh-my-zsh</a> (<a className="underline decoration-yellow-300 font-medium" href="https://github.com/agnoster/agnoster-zsh-theme">agnoster theme</a>) </p> 
      </div>

      <div className="pt-2">
          <p className="text-2xl my-3">Remote working tools:</p>
          <p className="p-0 my-2">● <a href="https://slack.com/" className="underline decoration-yellow-300 font-medium">Slack</a> </p> 
          <p className="p-0 my-2">● <a href="https://clockify.me/" className="underline decoration-yellow-300 font-medium">Clockify</a> </p> 
          <p className="p-0 my-2">● <a href="https://zoom.us/" className="underline decoration-yellow-300 font-medium">Zoom</a> </p> 
          <p className="p-0 my-2">● <a href="https://cyberduck.io/" className="underline decoration-yellow-300 font-medium">Cyberduck</a> </p> 
      </div>

      <div className="pt-2">
          <p className="text-2xl my-3">Development:</p>
          <p className="p-0 my-2">● <a href="https://code.visualstudio.com/" className="underline decoration-yellow-300 font-medium">Visual Studio Code</a> </p> 
          <p className="p-0 my-2">● <a href="https://www.notion.so/" className="underline decoration-yellow-300 font-medium">React, Tailwind, etc (Strapi?)</a> </p> 
          <p className="p-0 my-2">● <a href="https://www.gatsbyjs.com/" className="underline decoration-yellow-300 font-medium">Gatsby</a> (this website was built in Gatsby)</p> 
          <p className="p-0 my-2">● <a href="https://www.docker.com/" className="underline decoration-yellow-300 font-medium">Docker</a> </p> 
      </div>

      <div className="pt-2">
          <p className="text-2xl my-3">Other:</p>
          <p className="p-0 my-2">● <a href="https://neuracache.com/" className="underline decoration-yellow-300 font-medium">Neuracache</a> for spaced repetition learning</p> 
       
      </div>

      <div className="pt-2">
          <p className="text-2xl my-3">Hardware:</p>
          <p className="p-0 my-2">● MacBook Pro (13-inch, M1, 2020), 512 GB SSD</p> 
          <p className="p-0 my-2">● Samsung 27" LED Display</p> 
          <p className="p-0 my-2">● Apple keyboard</p> 
      </div>



      

    </div>
      
      


  </Layout>
)

export default UsesPage