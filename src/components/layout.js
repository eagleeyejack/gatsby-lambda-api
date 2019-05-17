import React from "react"
import Header from "../components/header"

import "./layout.css"

import { ThemeProvider } from "styled-components"
// import base from "../components/baseStyles"

const light = {
  main: "green",
  secondary: "white",
  third: "#663399",
  off: "1",
}

const dark = {
  main: "maroon",
  secondary: "black",
  third: "red",
  off: "-1",
}

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { lightTheme: true }
    this.changeTheme = this.changeTheme.bind(this)
  }

  changeTheme() {
    this.setState({
      lightTheme: !this.state.lightTheme,
    })
  }

  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={this.state.lightTheme ? light : dark}>
        <>
          <Header
            changeTheme={this.changeTheme}
            theme={this.state.lightTheme ? light : dark}
            siteTitle={"Gatsby Playground"}
          />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            {children}
          </div>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
