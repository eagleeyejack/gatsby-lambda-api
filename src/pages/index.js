import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import get from "lodash/get"

class IndexPage extends React.Component {
  render() {
    function urlify(text) {
      var urlRegex = /(https?:\/\/[^\s]+)/g
      return text.replace(urlRegex, function(url) {
        return '<a href="' + url + '">' + url + "</a>"
      })
    }

    const tweet = get(
      this,
      "props.data.allInternalTwitter.edges[0].node.twitterFile"
    )

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div style={{ padding: "1rem 0" }}>
          <a
            href={tweet.url}
            style={{ textDecoration: "none", color: "#222222" }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: urlify(tweet.tweets),
              }}
            />
            <div href={tweet.url}>@{tweet.screenName}</div>
          </a>

          <div style={{ padding: "1rem 0" }}>
            {tweet.all.map((node, index) => (
              <div key={index} style={{ margin: "1rem 0" }}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: urlify(node.text),
                  }}
                />
                <p>@{node.user.screen_name}</p>
              </div>
            ))}
          </div>

          <div style={{ padding: "1rem 0" }}>
            <h3>The API LINK</h3>
            <a href="https://angry-bardeen-2845b6.netlify.com/.netlify/functions/server/twitter">
              https://angry-bardeen-2845b6.netlify.com/.netlify/functions/server/twitter
            </a>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    internalTwitter {
      twitterFile {
        all {
          text
        }
      }
    }
    allInternalTwitter {
      edges {
        node {
          twitterFile {
            date
            screenName
            name
            tweets
            tweetId
            url
            all {
              text
              user {
                name
                screen_name
              }
              entities {
                urls {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
