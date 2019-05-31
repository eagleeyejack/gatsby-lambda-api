import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import get from "lodash/get"

import Emoji from "../components/emoji"

import styled from "styled-components"
// import base from "../components/baseStyles"

import { getWeather } from "../components/helper"

const ThemeCard = styled.div`
  background-color: ${props =>
    props.theme.secondary ? props.theme.third : undefined};
  color: ${props =>
    props.theme.secondary ? props.theme.secondary : undefined};
  padding: 2rem;
`

const WeatherEl = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;

  p {
    margin: 0 0.25rem 0 0;
  }
`

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
    const weather = get(this, "props.data.allInternalWeather.edges")
    // const music = get(this, "props.data.allInternalSpotify.edges")

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        {tweets.map(({ node }, index) => (
          <a
            key={index}
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

        <WeatherEl>
          <div style={{ display: "flex" }}>
            <p>{weather[0].node.name},</p>
            <p>{weather[0].node.sys.country} 🇬🇧</p>
          </div>
          <div style={{ display: "flex" }}>
            <p>{Math.round(weather[0].node.main.temp) + "°C"}</p>
            <Emoji
              symbol={getWeather(weather[0].node.weather[0].main)}
              label={weather[0].node.weather[0].main}
            />
          </div>
        </WeatherEl>
        <ThemeCard>Hello I'm a theme component</ThemeCard>
        <div style={{ padding: "2rem 0" }}>
          <h3>The API LINK</h3>
          <a href="https://friendly-booth-01ff3a.netlify.com/.netlify/functions/gettweets">
            https://friendly-booth-01ff3a.netlify.com/.netlify/functions/gettweets
          </a>
        </div>
        <Link to={"page-2"}>Page 2</Link>
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
    allInternalWeather {
      edges {
        node {
          name
          main {
            temp
          }
          sys {
            country
          }
          weather {
            main
          }
        }
      }
    }
  }
`

// allInternalSpotify(limit: 1) {
//   edges {
//     node {
//       items {
//         track {
//           name
//           artists {
//             name
//           }
//           album {
//             images {
//               height
//               url
//               width
//             }
//           }
//         }
//       }
//     }
//   }
// }

// {music.map(({ node }, index) => (
//   <div className="music">
//     <div className="images">
//       <img src={node.items[0].track.album.images[0].url} />
//     </div>
//     <div className="text-wrap">
//       <div className="text">
//         <p>{node.items[0].track.name}</p>
//         <p>{node.items[0].track.artists[0].name}</p>
//       </div>
//     </div>
//   </div>
// ))}
