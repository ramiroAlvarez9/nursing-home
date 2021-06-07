import React from "react"
import Layout from "../components/layout"
import "../css/servicios.scss"
import { StaticImage } from "gatsby-plugin-image"

const Servicios = () => {
  return (
    <>
      <Layout title="Servicios | Nursing home">
        <section className="section-servicios">
          <h2 className="section__h2">Servicios</h2>
          <p className="section__p">
            Lorem Ipsum lorem lorem ipsumlorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum{" "}
          </p>
          <article className="section__article">
            <StaticImage src="../images/medicos.jpg" />
            <h3 className="article__h3">ATENCIÓN MEDICA LAS 24HS</h3>
            <p className="article__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              quis diam ut tortor rhoncus scelerisque eget in sapien. Etiam
              mollis, sem quis condimentum posuere, purus eros elementum tortor.
            </p>
          </article>

          <article className="section__article">
            <StaticImage src="../images/clothes.jpg" />
            <h3 className="article__h3">HOTELERIA Y LAVANDERIA</h3>
            <p className="article__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              quis diam ut tortor rhoncus scelerisque eget in sapien. Etiam
              mollis, sem quis condimentum posuere, purus eros elementum tortor.
            </p>
          </article>

          <article className="section__article">
            <StaticImage src="../images/recreativo.jpg" />
            <h3 className="article__h3">ACTIVIDADES RECREATIVAS</h3>
            <p className="article__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              quis diam ut tortor rhoncus scelerisque eget in sapien. Etiam
              mollis, sem quis condimentum posuere, purus eros elementum tortor.
            </p>
          </article>

          <article className="section__article">
            <StaticImage src="../images/festejos.jpg" />
            <h3 className="article__h3">FESTEJO DE FECHAS ESPECIALES</h3>
            <p className="article__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              quis diam ut tortor rhoncus scelerisque eget in sapien. Etiam
              mollis, sem quis condimentum posuere, purus eros elementum tortor.
            </p>
          </article>
        </section>
      </Layout>
    </>
  )
}

export default Servicios
