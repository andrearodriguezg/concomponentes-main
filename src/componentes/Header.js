import React from "react";

const Header = () =>{
    return(<>
        <header className="u-clearfix u-header u-header" id="sec-3001">
          <div className="u-clearfix u-sheet u-sheet-1">
            <a href="https://nicepage.com" className="u-image u-logo u-image-1">
              <img
                src="images/default-logo.png"
                className="u-logo-image u-logo-image-1"
              />
            </a>
            <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
              <div
                className="menu-collapse"
                style={{ fontSize: "1rem", letterSpacing: 0, fontWeight: 500 }}
              >
                <a
                  className="u-button-style u-custom-active-color u-custom-border u-custom-border-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                  href="#"
                >
                  <svg viewBox="0 0 24 24">
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="#menu-hamburger"
                    />
                  </svg>
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <symbol
                        id="menu-hamburger"
                        viewBox="0 0 16 16"
                        style={{ width: 16, height: 16 }}
                      >
                        <rect y={1} width={16} height={2} />
                        <rect y={7} width={16} height={2} />
                        <rect y={13} width={16} height={2} />
                      </symbol>
                    </defs>
                  </svg>
                </a>
              </div>
              <div className="u-custom-menu u-nav-container">
                <ul className="u-nav u-spacing-2 u-unstyled u-nav-1">
                  <li className="u-nav-item">
                    <a
                      className="u-active-grey-5 u-button-style u-hover-grey-10 u-nav-link u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90"
                      href="./componentes/Home.js"
                      style={{ padding: "10px 20px" }}
                    >
                      Inicio
                    </a>
                  </li>
                  <li className="u-nav-item">
                    <a
                      className="u-active-grey-5 u-button-style u-hover-grey-10 u-nav-link u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90"
                      href="Inicio.html#carousel_a3ba"
                      data-page-id={12029180}
                      style={{ padding: "10px 20px" }}
                    >
                      Sobre nosotros
                    </a>
                  </li>
                  <li className="u-nav-item">
                    <a
                      className="u-active-grey-5 u-button-style u-hover-grey-10 u-nav-link u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90"
                      href="Inicio.html#carousel_efe9"
                      data-page-id={12029180}
                      style={{ padding: "10px 20px" }}
                    >
                      Nuestros servicios
                    </a>
                  </li>
                  <li className="u-nav-item">
                    <a
                      className="u-active-grey-5 u-button-style u-hover-grey-10 u-nav-link u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90"
                      href="Inicio.html#carousel_c97a"
                      data-page-id={12029180}
                      style={{ padding: "10px 20px" }}
                    >
                      Contactenos
                    </a>
                  </li>
                  <li className="u-nav-item">
                    <a
                      className="u-active-grey-5 u-button-style u-hover-grey-10 u-nav-link u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90"
                      href="Inicio-sesion.html"
                      style={{ padding: "10px 20px" }}
                    >
                      Inicio sesion
                    </a>
                  </li>
                  <li className="u-nav-item">
                    <a
                      className="u-active-grey-5 u-button-style u-hover-grey-10 u-nav-link u-text-active-grey-90 u-text-grey-90 u-text-hover-grey-90"
                      href="Registrarse.html"
                      style={{ padding: "10px 20px" }}
                    >
                      Registrarse
                    </a>
                  </li>
                </ul>
              </div>
              <div className="u-custom-menu u-nav-container-collapse">
                <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                  <div className="u-inner-container-layout u-sidenav-overflow">
                    <div className="u-menu-close" />
                    <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                      <li className="u-nav-item">
                        <a
                          className="u-button-style u-nav-link"
                          href="Inicio.html"
                          style={{ padding: "10px 20px" }}
                        >
                          Inicio
                        </a>
                      </li>
                      <li className="u-nav-item">
                        <a
                          className="u-button-style u-nav-link"
                          href="Inicio.html#carousel_a3ba"
                          data-page-id={12029180}
                          style={{ padding: "10px 20px" }}
                        >
                          Sobre nosotros
                        </a>
                      </li>
                      <li className="u-nav-item">
                        <a
                          className="u-button-style u-nav-link"
                          href="Inicio.html#carousel_efe9"
                          data-page-id={12029180}
                          style={{ padding: "10px 20px" }}
                        >
                          Nuestros servicios
                        </a>
                      </li>
                      <li className="u-nav-item">
                        <a
                          className="u-button-style u-nav-link"
                          href="Inicio.html#carousel_c97a"
                          data-page-id={12029180}
                          style={{ padding: "10px 20px" }}
                        >
                          Contactenos
                        </a>
                      </li>
                      <li className="u-nav-item">
                        <a
                          className="u-button-style u-nav-link"
                          href="Inicio-sesion.html"
                          style={{ padding: "10px 20px" }}
                        >
                          Inicio sesion
                        </a>
                      </li>
                      <li className="u-nav-item">
                        <a
                          className="u-button-style u-nav-link"
                          href="Registrarse.html"
                          style={{ padding: "10px 20px" }}
                        >
                          Registrarse
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
              </div>
            </nav>
          </div>
        </header>
        </>
    )
};
export default Header