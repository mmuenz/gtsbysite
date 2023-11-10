import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <p className="text-3xl mb-0">{frontmatter.title}</p>
      <div className="mb-7 mt-1">
        <span className="text-lg text-yellow-200">{frontmatter.date+" | "}</span>
        <Link to="/" className="text-lg text-yellow-200">{frontmatter.category}</Link>
        <span className="text-lg text-yellow-200">  - 5 min read</span>
      </div>
      
      <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        category
      }
    }
  }
`;