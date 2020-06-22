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
import Swiper from 'swiper';

class IndexPage extends React.Component {

  constructor(props) {
    super(props);

    this.page = props.data.site.siteMetadata;
    this.products = this.publishedProducts(catalog);
    this.categories = this.setCategories();

    this.state = {
      filteredProducts: this.products,
      categories: this.categories,
    }
  }

  componentDidMount() {
    this.carousel();
    this.modalImages();
  }

  componentDidUpdate() {
    this.carousel();
    this.modalImages();
  }

  setCategories() {
    const filtered = this.products.reduce((cats, el) => {
      const current = el.categories;
      const categories = [...cats];

      current.forEach((el) => {
        if (!cats.includes(el)) {
          categories.push(el)
        }
      });

      return categories;
    }, []);

    return ["Todo", ...filtered];
  }

  filterList(category) {
    this.filterProducts(category);
  }

  publishedProducts(products) {
    return products.filter((el, index) => {
      return el.publish ? el : null;
    });
  }

  filterProducts(category) {
    if (category) {
      if ("Todo" === category) {
        this.setState({
          filteredProducts: this.products,
        });
      } else {
        const filtered = this.products.filter((el, index) => {
          return el.categories.includes(category) ? el : null;
        });

        this.setState({
          filteredProducts: filtered,
        });
      }
    }
  }

  carousel() {
    new Swiper('.carousel .swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }

  modalImages() {
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

  render() {
    const page = this.page;

    return (
      <Layout>
        <SEO title="Catálogo" />
        <Hero siteTitle={page.title} description={page.description} more={page.more} />
        <Section>
          <Container>
            <Column>
              <Content>
                <Columns>
                  <Column isSize="full" className="has-text-centered">
                    {this.state.categories.map((el, index) => (
                      <Button isSize="small" isColor="info" className="filter-item" onClick={(e) => this.filterList(el)} key={index}>{el}</Button>
                    ))}
                  </Column>
                  {this.state.filteredProducts.map(({ title, description, price, images, categories }, index) => (
                    <Column isSize="1/3" key={index}>
                      <Card>
                        <CardImage className={images.thumbs.length > 1 ? 'carousel' : ''}>
                          <div className="swiper-container">
                            <div className="swiper-wrapper">
                              {images.thumbs.map((thumb, index) => (
                                <div className="swiper-slide" key={index}>
                                  <Image isRatio='4:3' src={thumb} data-image={images.full[index]} className="thumb-image" />
                                </div>
                              ))}
                            </div>

                            <div className="swiper-pagination"></div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>

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
                  ))}
                </Columns>
              </Content>
            </Column>
          </Container>
        </Section>

        <Modal className="modal">
          <ModalBackground className="modal__bg" />
          <ModalContent>
            <Image isRatio='4:3' className="modal__image" />
          </ModalContent >
          <ModalClose className="modal__close" />
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