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
            <Link to="/" className="navbar-item">
              {this.props.siteTitle}
            </Link>
            <NavbarEnd>
              <NavbarItem>
                <Link to="/" className="navbar-item">
                  <Icon className="fab fa-whatsapp fa-lg" />
                </Link>
                <Link to="/" className="navbar-item">
                  <Icon className="fab fa-instagram fa-lg" />
                </Link>
                <Link to="/" className="navbar-item">
                  <Icon className="fab fa-facebook fa-lg" />
                </Link>
              </NavbarItem>
            </NavbarEnd>
          </NavbarBrand>

        </Container>
      </Navbar>
    )
  }
}
