import React from "react"
import PropTypes from "prop-types"
import {
  // Link,
  graphql,
} from "gatsby"
import {
  Section,
  Container,
  Button,
  Title,
  Column,
  Content,
  Image,
  Card,
  CardImage,
  CardContent,
  Media,
  MediaContent,
  Modal,
  ModalContent,
  ModalBackground,
  ModalClose,
  Subtitle
} from "bloomer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import catalog from "../content/catalog.json"
import { Columns } from "bloomer/lib/grid/Columns"

class IndexPage extends React.Component {

  constructor( props ){
    super(props);
    this.page = props.data.site.siteMetadata;
    this.products = catalog;
  }

  componentDidMount () {
    this.carousel();
    this.modalImages();
  }

  carousel(){
    if (typeof window !== 'undefined'){
      const bulmaCarousel = require('bulma-carousel/dist/js/bulma-carousel.js')

      bulmaCarousel.attach('.carousel', {
        loop: true,
      });
    }
  }

  modalImages(){
    const thumbs = document.querySelectorAll('.thumb-image img');
    const modal = document.querySelector('.modal');
    const modalClose = modal.querySelectorAll('.modal__close, .modal__bg');
    const modalImage = modal.querySelector('.modal__image img');

    thumbs.forEach(image => {
      image.addEventListener('click', el => {
        const target = el.target.parentNode.dataset.image;
        modalImage.src = target;

        modal.classList.add('is-active');
      });
    });

    modalClose.forEach(close => {
      close.addEventListener('click', () => modal.classList.remove('is-active'));
    });
  }

  render () {
    const page = this.page;
    const products = this.products;

    return (
      <Layout>
        <SEO title="Catálogo" />
        <Hero siteTitle={page.title} description={page.description} more={page.more} />
        <Section>
          <Container>
            <Column>
              <Content>
                <Columns>
                  {products.map(({ publish, title, description, price, images, categories }, index) => {
                      if ( !publish ){
                        return;
                      }

                      return (
                        <Column isSize="1/3" key={index}>
                          <Card>
                            <CardImage className={ images.thumbs.length > 1 ? 'carousel': '' }>
                              {images.thumbs.map((thumb, index) => (
                                <Image isRatio='4:3' src={thumb} data-image={images.full[index]} key={index} className="thumb-image"/>
                              ))}
                            </CardImage>
                            <CardContent>
                              <Media>
                                <MediaContent>
                                  <div>
                                    {categories.map((cat, index) => (
                                      <span className="category" key={index}>{cat}</span>
                                    ))}
                                  </div>
                                  <Title isSize={4}>{title}</Title>
                                  <Subtitle isSize={6}>${price}</Subtitle>
                                </MediaContent>
                              </Media>
                              <Content>
                                <p>{description}</p>
                                <div className="actions">
                                  <Button href={`${page.whatsapp}?text=Hola, estaba viendo el catálogo online y me gustó este producto: ${title}`} isColor='info' isLink target="_blank">Lo quiero</Button>
                                </div>
                              </Content>
                            </CardContent>
                          </Card>
                        </Column>
                      )
                    }
                  )}
                </Columns>
              </Content>
            </Column>
          </Container>
        </Section>

        <Modal className="modal">
          <ModalBackground className="modal__bg" />
          <ModalContent>
            <Image isRatio='4:3' className="modal__image"/>
          </ModalContent >
          <ModalClose className="modal__close"/>
        </Modal>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      more: PropTypes.string.isRequired,
    }),
  })
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        more
        whatsapp
      }
    }
  }
`