import * as React from "react"
import Layout from "../components/layout"
import "../css/index.scss"
import { Link } from "gatsby"

const IndexPage = () => (
  <>
    <Layout title="Inicio | Nursing Home">
      <section className="section section-index">
        <h1 className="section__h1">Bienvenido a</h1>
        <div className="section__logo">
          <h2 className="section__logo--aires">
            Nursing <span className="section__logo--de">of</span>
          </h2>
          <h2 className="section__logo--citybell">home</h2>
        </div>
        <Link to="/contacto" className="section__contacto">
          Solicita una entrevista hoy.
        </Link>
      </section>
    </Layout>
  </>
)

export default IndexPage
