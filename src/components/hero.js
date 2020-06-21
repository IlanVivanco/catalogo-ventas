import React, { Component } from "react"
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Subtitle,
  Columns,
  Column
} from "bloomer"

export default class hero extends Component {
  render() {
    return (
      <Hero isColor="primary" isSize="small" textalign="left">
        <HeroBody>
          <Container>
            <Columns>
              <Column>
                <Title>{this.props.description}</Title>
                <Subtitle>{this.props.more}</Subtitle>
              </Column>
            </Columns>
          </Container>
        </HeroBody>
      </Hero>
    )
  }
}
