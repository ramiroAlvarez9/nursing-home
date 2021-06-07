import React from "react"
import Layout from "../components/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import "../css/galeria.scss"

const Galeria = () => {
  return (
    <>
      <Layout title="Galeria | Nursing home">
        <h2 className="h2">Galeria</h2>
        <div class = "gallery">
        <Carousel>
          <Carousel.Item >
            <StaticImage src="../images/2.jpg" className = "static-image-gallery"/>
          </Carousel.Item>
          <Carousel.Item >
            <StaticImage src="../images/1.jpg"  className = "static-image-gallery"/>
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage src="../images/3.jpg"  className = "static-image-gallery"/>
          </Carousel.Item>
          <Carousel.Item >
            <StaticImage src="../images/5.jpg"  className = "static-image-gallery"/>
          </Carousel.Item>
          <Carousel.Item >
            <StaticImage src="../images/9.jpg"  className = "static-image-gallery"/>
          </Carousel.Item>
          
        </Carousel>
        </div>
        <div className= "gallery-desktop">
          <StaticImage src="../images/2.jpg" className = "static-image-gallery"/>        
          <StaticImage src="../images/1.jpg"  className = "static-image-gallery"/>
          <StaticImage src="../images/3.jpg"  className = "static-image-gallery"/>
          <StaticImage src="../images/5.jpg"  className = "static-image-gallery"/>
          <StaticImage src="../images/8.jpg"  className = "static-image-gallery"/>
          <StaticImage src="../images/9.jpg"  className = "static-image-gallery"/>
        </div>        
      </Layout>
    </>
  )
}

export default Galeria
