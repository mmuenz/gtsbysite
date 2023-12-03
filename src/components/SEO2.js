import React from "react"
import { Helmet } from "react-helmet"

function SEO({ title, description, keywords }) {
  return (
    <Helmet
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: `keywords`,
          content: keywords.join(", "),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `twitter:card`,
          content: `summary`,
        },
      ]}
    />
  )
}

export default SEO
