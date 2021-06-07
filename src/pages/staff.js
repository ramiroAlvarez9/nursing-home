import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import "../css/staff.scss"

const Staff = () => {
  return (
    <>
      <Layout title="Staff | Nursing home">
        <h2 className="h2">Staff </h2>
        <section>
          <article className="section__article--staff">
            <StaticImage
              src="../images/Generic-Profile-1600x1600.png"
              css={css`
                width: 50%;
                height: 50%;
              `}
            />

            <h3 className="article__h3--staff">Nombre y apellido</h3>
            <p className="article__p--staff">Puesto</p>
          </article>
          <article className="section__article--staff">
            <StaticImage
              src="../images/Generic-Profile-1600x1600.png"
              css={css`
                width: 50%;
                height: 50%;
              `}
            />

            <h3 className="article__h3--staff">Nombre y apellido</h3>
            <p className="article__p--staff">Puesto.</p>
          </article>
          <article className="section__article--staff">
            <StaticImage
              src="../images/Generic-Profile-1600x1600.png"
              css={css`
                width: 50%;
                height: 50%;
              `}
            />

            <h3 className="article__h3--staff">Nombre y apellido</h3>
            <p className="article__p--staff">Puesto</p>
          </article>
        </section>
      </Layout>
    </>
  )
}
export default Staff
