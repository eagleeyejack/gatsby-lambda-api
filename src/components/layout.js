import React from "react"
import Header from "../components/header"

import "./layout.css"

import { ThemeProvider } from "styled-components"
// import base from "../components/baseStyles"

const light = {
  main: "green",
  secondary: "white",
  third: "#663399",
}

const dark = {
  main: "maroon",
  secondary: "white",
  third: "palevioletred",
}

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = { lightTheme: true }
    this.changeTheme = this.changeTheme.bind(this)
  }

  componentDidMount() {
    const localStorageLayout = localStorage.getItem("lightTheme")
    if (localStorageLayout) {
      this.setState({ lightTheme: JSON.parse(localStorageLayout) })
    }
  }

  changeTheme() {
    this.setState({
      lightTheme: !this.state.lightTheme,
    })
    localStorage.setItem("lightTheme", !this.state.lightTheme)
  }

  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={this.state.lightTheme ? light : dark}>
        <>
          <Header
            siteTitle={"Gatsby Playground"}
            changeTheme={this.changeTheme}
            lightTheme={this.state.lightTheme}
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
