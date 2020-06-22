import React from "react"
import { Footer, Container, Content } from "bloomer"

const MainFooter = (props) => {
  return (
    <Footer>
      <Container>
        <Content isSize="small">
          <p className="has-text-centered">
            Podés contactarnos por <a href={props.whatsapp}>Whatapp</a>, <a href={props.facebook}>Facebook</a> o por tel al <a href="tel:1157304817">11 5730-4817</a>
          </p>
        </Content>
      </Container>
    </Footer>
  )
}

export default MainFooter