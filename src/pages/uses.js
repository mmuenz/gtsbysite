import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsesPage = () => (
  <Layout>
    <Seo title="Uses" />
    <p className="text-3xl">My digital toolbox</p>
    <div>
      <p>
        On this page (inspired by web pages such as{" "}
        <a
          className="underline decoration-yellow-300 font-medium"
          href="https://wesbos.com/uses"
          target="_blank"
        >
          this
        </a>
        ,{" "}
        <a
          className="underline decoration-yellow-300 font-medium"
          href="https://uses.tech/"
          target="_blank"
        >
          this
        </a>
        , and{" "}
        <a
          className="underline decoration-yellow-300 font-medium"
          href="https://usesthis.com/"
          target="_blank"
        >
          this
        </a>
        ), you can find a list of digital tools I use every day.
      </p>
      <div className="pt-1">
        <p className="text-2xl my-3">Note taking:</p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://obsidian.md/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Obsidian
          </a>{" "}
          as a "second brain"
        </p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.notion.so/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Notion
          </a>{" "}
          for collaboration
        </p>
      </div>

      <div className="pt-2">
        <p className="text-2xl my-3">Productivity tools:</p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://openai.com/product/gpt-4"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            ChatGPT
          </a>{" "}
          for everything
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.alfredapp.com/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Alfred
          </a>{" "}
          for searching and launching apps
        </p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://raindrop.io/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Raindrop
          </a>{" "}
          for organizing my bookmarks
        </p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://ifttt.com/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            IFTTT
          </a>{" "}
          for automation
        </p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.lastpass.com/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            LastPass
          </a>{" "}
          for password managment
        </p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.instapaper.com/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Instapaper
          </a>{" "}
          for bookmarking articles
        </p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Microsoft Outlook
          </a>{" "}
          as calendar app
        </p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://netnewswire.com/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            NetNewsWire
          </a>{" "}
          as RSS Reader
        </p>
      </div>

      <div className="pt-2">
        <p className="text-2xl my-3">Terminal and shell:</p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://iterm2.com/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            iTerm2
          </a>{" "}
          as my main terminal
        </p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://en.wikipedia.org/wiki/Z_shell"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Z shell (zsh)
          </a>{" "}
          with{" "}
          <a
            href="https://ohmyz.sh/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            oh-my-zsh
          </a>{" "}
          (
          <a
            className="underline decoration-yellow-300 font-medium"
            href="https://github.com/agnoster/agnoster-zsh-theme"
            target="_blank"
          >
            agnoster theme
          </a>
          ){" "}
        </p>
      </div>

      <div className="pt-2">
        <p className="text-2xl my-3">Remote working tools:</p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://slack.com/"
            className="underline decoration-yellow-300 font-medium"
          >
            Slack
          </a>{" "}
          for team communication
        </p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://clockify.me/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Clockify
          </a>{" "}
          for time tracking
        </p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://zoom.us/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Zoom
          </a>{" "}
          for meetings
        </p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://cyberduck.io/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Cyberduck
          </a>{" "}
          as an FTP/SFTP client
        </p>
      </div>

      <div className="pt-2">
        <p className="text-2xl my-3">Development:</p>

        <p className="p-0 my-2">
          ● Python, JavaScript, R as programming languages
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Visual Studio Code
          </a>{" "}
          for code editing
        </p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            React
          </a>
          {", "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Tailwind CSS
          </a>
          {", "}
          <a
            href="https://expressjs.com/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Express
          </a>{" "}
          for web dev
        </p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.gatsbyjs.com/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Gatsby
          </a>{" "}
          (this website was built with Gatsby)
        </p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://posit.co/download/rstudio-desktop/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            RStudio
          </a>{" "}
          as an IDE for R
        </p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.postman.com/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Postman
          </a>{" "}
          as an API platform
        </p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.docker.com/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Docker
          </a>{" "}
          as containerization tool
        </p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://www.mongodb.com/atlas/database"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            MongoDB Atlas
          </a>{" "}
          as cloud database
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://github.com/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            GitHub
          </a>{" "}
          as version control platform
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://aws.amazon.com/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            AWS
          </a>{" "}
          as a cloud computing platform
        </p>
      </div>

      <div className="pt-2">
        <p className="text-2xl my-3">Other:</p>
        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://apps.ankiweb.net/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Anki
          </a>{" "}
          for spaced repetition learning
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="http://udemy.com/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Udemy
          </a>{" "}
          for online learning
        </p>

        <p className="p-0 my-2">
          ●{" "}
          <a
            href="https://porkbun.com/"
            target="_blank"
            className="underline decoration-yellow-300 font-medium"
          >
            Porkbun
          </a>{" "}
          as domain registrar
        </p>
      </div>

      <div className="pt-2">
        <p className="text-2xl my-3">Hardware:</p>
        <p className="p-0 my-2">
          ● MacBook Pro (13-inch, M1, 2020), 512 GB SSD
        </p>
        <p className="p-0 my-2">● Samsung 27" LED Display</p>
        <p className="p-0 my-2">● Keychron K2 Pro mechanical keyboard</p>
      </div>
    </div>
  </Layout>
)

export default UsesPage
