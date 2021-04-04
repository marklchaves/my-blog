import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            siteUrl
          }
        }
      }
    `
  );
  return (
    <>
      This is where <Styled.a href={data.site.siteMetadata.siteUrl}>{data.site.siteMetadata.author}</Styled.a>
      {` `}
      goes.
      <br />
      Or, whatever&mdash;you make the rules.
    </>
  )
}
