import React, { Component } from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import base from "../components/baseStyles"

import Emoji from "../components/emoji"

const HeaderEl = styled.header`
  /* color: ${base.colorPrimary}; */
    background-color: ${props =>
      props.theme.secondary ? props.theme.third : "palevioletred"};
      a {
      color: ${props =>
        props.theme.secondary ? props.theme.secondary : "palevioletred"};
      }
  z-index: 99;
  padding: 2rem;
`

const Switch = styled.div`
  display: flex;
  background: lightblue;
  border-radius: 2rem;
  padding: 0 1rem;
  height: 30px;
`

const SwitchWrap = styled.div`
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  background-color: ${props =>
    props.theme.main ? props.theme.main : "palevioletred"};

  &:after {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    background: ${props =>
      props.theme.main ? props.theme.main : "palevioletred"};
    z-index: ${props => (props.theme.main ? props.theme.off : "1")};
  }
`

const SwitchWrapDark = styled(SwitchWrap)`
  &:after {
    background: ${props =>
      props.theme.secondary ? props.theme.secondary : "palevioletred"};
    z-index: ${props => (props.theme.secondary ? props.theme.off : "-1")};
  }
`

class Header extends Component {
  render() {
    return (
      <HeaderEl>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link to="/">{this.props.siteTitle}</Link>
          </h1>
          <Switch>
            <SwitchWrapDark>
              <Emoji symbol={"🌙"} label={"moon"} />
            </SwitchWrapDark>

            <SwitchWrap>
              <Emoji symbol={"🌞"} label={"sun"} />
            </SwitchWrap>
          </Switch>
          <div>
            <button onClick={this.props.changeTheme}>Darkmode</button>
          </div>
        </div>
      </HeaderEl>
    )
  }
}

export default Header
