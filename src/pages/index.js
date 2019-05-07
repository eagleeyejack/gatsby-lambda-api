import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import get from "lodash/get"

class IndexPage extends React.Component {
  render() {
    function urlify(text) {
      var urlRegex = /(https?:\/\/[^\s]+)/g

      if (text) {
        return text.replace(urlRegex, function(url) {
          return "<p>" + url + "</p>"
        })
      }
    }

    const tweets = get(this, "props.data.allInternalTwitter.edges")

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        {tweets.map(({ node }, index) => (
          <a
            href={`https://twitter.com/${
              node.user ? node.user.screen_name : ""
            }/status/${node.id_str}`}
            style={{ padding: "1rem 0" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div key={index} style={{ margin: "1rem 0" }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: urlify(node.text),
                }}
              />
            </div>
          </a>
        ))}

        <div style={{ padding: "1rem 0" }}>
          <h3>The API LINK</h3>
          <a href="https://friendly-booth-01ff3a.netlify.com/.netlify/functions/gettweets">
            https://friendly-booth-01ff3a.netlify.com/.netlify/functions/gettweets
          </a>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allInternalTwitter {
      edges {
        node {
          id
          text
          id_str
          user {
            screen_name
          }
        }
      }
    }
    allInternalSpotify {
      edges {
        node {
          items {
            track {
              name
              artists {
                name
              }
              album {
                images {
                  height
                  url
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`
