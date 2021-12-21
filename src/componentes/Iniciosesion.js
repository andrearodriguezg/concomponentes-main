import React from "react";

const Iniciosesion = ()=> {
    return (
        <section
        className="u-align-center u-clearfix u-grey-10 u-section-1"
        id="sec-4eab"
        >
        <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-align-center u-container-style u-group u-radius-50 u-shape-round u-white u-group-1">
            <div className="u-container-layout u-valign-middle u-container-layout-1">
                <h3 className="u-text u-text-default u-text-1">Inicio sesion</h3>
                <div className="u-expanded-width u-form u-login-control u-form-1">
                <form
                    action="#"
                    method="POST"
                    className="u-clearfix u-form-custom-backend u-form-spacing-35 u-form-vertical u-inner-form"
                    source="custom"
                    name="form-2"
                    style={{ padding: 10 }}
                >
                    <div className="u-form-group u-form-name">
                    <label
                        htmlFor="username-708d"
                        className="u-form-control-hidden u-label"
                    />
                    <input
                        type="text"
                        placeholder="Usuario"
                        id="username-708d"
                        name="username"
                        className="u-grey-5 u-input u-input-rectangle"
                        required
                    />
                    </div>
                    <div className="u-form-group u-form-password">
                    <label
                        htmlFor="password-708d"
                        className="u-form-control-hidden u-label"
                    />
                    <input
                        type="text"
                        placeholder="Contraseña"
                        id="password-708d"
                        name="password"
                        className="u-grey-5 u-input u-input-rectangle"
                        required
                    />
                    </div>
                    <div className="u-form-checkbox u-form-group">
                    <input
                        type="checkbox"
                        id="checkbox-708d"
                        name="remember"
                        defaultValue="On"
                        defaultChecked="checked"
                    />
                    <label htmlFor="checkbox-708d" className="u-label">
                        Recordarme
                    </label>
                    </div>
                    <div className="u-align-center u-form-group u-form-submit">
                    <a
                        href="#"
                        className="u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-4-light-1 u-palette-4-base u-radius-17 u-btn-1"
                    >
                        Ingresar
                    </a>
                    <input
                        type="submit"
                        defaultValue="submit"
                        className="u-form-control-hidden"
                    />
                    </div>
                    <input type="hidden" defaultValue name="recaptchaResponse" />
                </form>
                </div>
                <a
                href="Registrarse.html"
                data-page-id={146036843}
                className="u-border-1 u-border-active-palette-2-base u-border-hover-palette-4-base u-border-palette-4-base u-btn u-button-style u-login-control u-login-forgot-password u-none u-text-palette-4-base u-btn-2"
                >
                Registrarse
                </a>
                <a
                href
                className="u-border-1 u-border-active-palette-2-base u-border-hover-palette-4-base u-border-palette-4-base u-btn u-button-style u-login-control u-login-forgot-password u-none u-text-palette-4-base u-btn-3"
                >
                Restaurar contraseña
                </a>
            </div>
            </div>
        </div>
        </section>
    )
};
export default Iniciosesion 
