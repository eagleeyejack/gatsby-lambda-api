import React, { Component } from "react"
import styled from "styled-components"

import Emoji from "./emoji"

const TogButton = styled.button`
  background: RGBA(0, 0, 0, 0);
  border: 0;
  padding: 0;
`

const Toggle = styled.div`
  position: relative;
  width: 68px;
  height: 35px;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
  border-radius: 100px;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`

const Track = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 50px;
  font-size: 16px;
  z-index: -2;
  background-color: ${props => (props.bg ? "#cecece" : "#ffffff")};
  transition: background-color 0.3s cubic-bezier(0.95, 0.25, 0.3, 0.65);

  .emoji {
    margin-top: 4px;
  }
`

const Switch = styled.div`
  position: absolute;
  top: 3px;
  left: 5px;
  height: 28px;
  width: 28px;
  border-radius: 100px;
  z-index: -1;
  transition: background-color 0.3s cubic-bezier(0.95, 0.25, 0.3, 0.65),
    transform 0.3s cubic-bezier(0.95, 0.25, 0.3, 0.65);
  background-color: ${props => (props.move ? "#ffffff" : "#2ecc71;")};
  transform: ${props => (props.move ? "translate(0)" : "translate(30px)")};
`

class ToggleTheme extends Component {
  render() {
    return (
      <TogButton onClick={this.props.changeTheme}>
        <Toggle>
          <Switch move={this.props.lightTheme} />
          <Track bg={this.props.lightTheme}>
            <Emoji symbol={"🌙"} label={"moon"} />
            <Emoji symbol={"🌞"} label={"sun"} />
          </Track>
        </Toggle>
      </TogButton>
    )
  }
}

export default ToggleTheme
