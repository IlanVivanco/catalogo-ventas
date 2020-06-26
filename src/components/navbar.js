import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import {
  Navbar,
  NavbarBrand,
  NavbarEnd,
  NavbarItem,
  Container,
  Icon,
} from "bloomer"

export default class navbar extends Component {
  static propTypes = {
    siteTitle: PropTypes.string.isRequired,
  }
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <Navbar>
        <Container>
          <NavbarBrand>
            <span className="navbar-item">
              {this.props.siteTitle}
            </span>
            <NavbarEnd>
              <NavbarItem>
                <a href={this.props.whatsapp} className="navbar-item">
                  <Icon className="fab fa-whatsapp fa-lg" />
                </a>
                <a href={this.props.facebook} className="navbar-item">
                  <Icon className="fab fa-facebook fa-lg" />
                </a>
                {/* <a to="/" className="navbar-item">
                  <Icon className="fab fa-instagram fa-lg" />
                </a> */}
              </NavbarItem>
            </NavbarEnd>
          </NavbarBrand>

        </Container>
      </Navbar>
    )
  }
}
