import React from "react"
import Helmet from "react-helmet"
import "../css/reset.min.css"
import "../css/footer.scss"
import Nav from "./Nav"
import Facebook from "../images/facebook.svg"
import WhatsApp from "../images/whats-app-outlined.svg"
import Instagram from "../images/instagram-fill.svg"

const Layout = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
      </Helmet>
      <header className="header">
        <Nav />
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="footer__title">Siguenos en:</div>
        <div className="footer__title--icons">
          <Facebook className="footer__iconos" />
          <WhatsApp className="footer__iconos" />
          <Instagram className="footer__iconos" />
        </div>
      </footer>
    </>
  )
}

export default Layout
