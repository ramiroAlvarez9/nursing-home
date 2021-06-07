import React, { useState } from "react"
import "../css/nav.scss"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import MenuIcon from "../images/menu.svg"
import CloseMenu from "../images/close-square-filled.svg"


const Nav = () => {
  
  const [desplegar, setDesplegar] = useState("-100%")
  const desplegarMenu = () => setDesplegar("0%")
  const ocultarMenu = () => setDesplegar("-100%")

  return (
    <>
      <nav className="header__nav">
          
            <StaticImage
              src="../images/aires-logo.png"
              alt="logo-desktop"
              layout="fixed"
              className="header__nav--logo--image"
              width = {230}
              height = {230}
            />
            <Link
                to="/"
                className="header__nav--menu-desplegado--container--link"
                id = "link-desktop"
            >
              Inicio
            </Link>
            <Link
              to="/servicios"
              className="header__nav--menu-desplegado--container--link"
              id = "link-desktop"
            >
              Servicios
            </Link>
            <Link
              to="/galeria"
              className="header__nav--menu-desplegado--container--link"
              id = "link-desktop"
            >

              Galeria
            </Link>
            <Link
              to="/staff"
              className="header__nav--menu-desplegado--container--link"
              id = "link-desktop"
            >
              Staff
            </Link>
            <Link
              to="/contacto"
              className="header__nav--menu-desplegado--container--link"
              id = "link-desktop"
            >
              Contacto
            </Link>

        
        <MenuIcon className="header__nav--icon" onClick={desplegarMenu} />
        
        <div
          className="header__nav--menu--desplegado"
          css={css`
            transition: transform 0.3s;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            transform: translateX(${desplegar});
            background-color: #ffffff;
            width: 100vw;
            height: 100%;
          `}
        >
          <div className="header__nav--menu--desplegado--logo">
            <StaticImage
              src="../images/aires-logo.png"
              alt="Logo"
              placeholder="blurred"
              layout="fixed"
              width={175}
              height={175}
            />
            <CloseMenu
              css={css`
                position: absolute;
                right: 4%;
                top: 1%;
                width: 60px;
                height: 60px;
              `}
              onClick={ocultarMenu}
            />
          </div>
          <div class="header__nav--menu--desplegado--container">
            <Link
              to="/"
              className="header__nav--menu-desplegado--container--link"
            >
              Inicio
            </Link>
            <Link
              to="/servicios"
              className="header__nav--menu-desplegado--container--link"
            >
              Servicios
            </Link>
            <Link
              to="/galeria"
              className="header__nav--menu-desplegado--container--link"
            >
              Galeria
            </Link>
            <Link
              to="/staff"
              className="header__nav--menu-desplegado--container--link"
            >
              Staff
            </Link>
            <Link
              to="/contacto"
              className="header__nav--menu-desplegado--container--link"
            >
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
