import React from "react"
import Layout from "../components/layout"
import "../css/contacto.scss"

const Contacto = () => {
  return (
    <>
      <Layout title="Contacto | Nursing Home">
        <section className="section-contacto">
          <h2 className="h2">Contacto</h2>

          <form action="" className="form">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="form__input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form__input"
            />
            <input
              type="text"
              name="asunto"
              placeholder="Asunto"
              className="form__input"
            />
            <textarea
              className="textarea"
              name="mensaje"
              placeholder="Mensaje"
            ></textarea>

            <input
              type="submit"
              name="enviar"
              className="button"
              value="Enviar"
            />
          </form>

          <div className="desktop-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.6417078573936!2d-58.04922008419892!3d-34.865229078889975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2df6860639995%3A0xf347e5212e3e781c!2sAires%20de%20City%20Bell%20Geriatrico!5e0!3m2!1ses-419!2sar!4v1623038560680!5m2!1ses-419!2sar"
              className="desktop-map__iframe"
            ></iframe>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Contacto
