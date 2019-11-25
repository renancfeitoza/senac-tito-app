import React from 'react'
import logo from '../../../../utils/IMG/Senac_logo.svg.png'
import '../../../../utils/CSS/Login.css'
import facebook from '../../../../utils/IMG/facebook-logo.svg'
import instagram from '../../../../utils/IMG/instagram.svg'
import linkedin from '../../../../utils/IMG/linkedin.svg'
import twitter from '../../../../utils/IMG/twitter.svg'
import { messageError } from '../../../../components/ValidationRules'
import '../../../../utils/CSS/hamburgers.css'
export const Form = ({
    login,
    handleChangeLogin,
    handleSubmit,
    errors,
} = this.props) =>{
    return (
        <React.Fragment>
           <div className="navBar">
                    <div className="redes-sociais">
                        <a href="https://www.facebook.com/senaclapatito/">
                            <img src={facebook} alt="ícone com cor de fundo preta do facebook"/>
                        </a>
                        <a href="https://www.instagram.com/senacsaopaulo/">
                            <img src={instagram} alt="ícone com cor de fundo preta do instagram"/>
                        </a>
                        <a href="https://www.linkedin.com/company/senac"> 
                            <img src={linkedin} alt="ícone com cor de fundo preta do linkedin"/>
                        </a>
                        <a href="https://twitter.com/senacsaopaulo">
                            <img src={twitter} alt="ícone com cor de fundo preta do twitter"/>
                        </a>
                  </div>
                </div>
                <input type="checkbox" id="check" />
                <label for="check"><i className="material-icons">menu</i></label>
                <div className="bar">
                <nav>
                    <a href="#">
                    <div className="link">Principal</div>
                    </a>
                    <a href="#">
                    <div className="link">Cursos</div>
                    </a>
                    <a href="#">
                    <div className="link">?</div>
                    </a>
                    <a href="#">
                    <div className="link">Contato</div>
                    </a>
                </nav>
                </div>
                <div className="logo">
                <img src={logo} alt="Logotipo oficial do Senac Brasil" className="logo" />
                </div>
                <div className="formLogin">
                <form action="#">
                    <label htmlFor="email">E-mail</label>

                    <div className="login">
                    <span>
                        <i className="material-icons">email</i>
                    </span>
                    <input 
                        type="text" 
                        placeholder="Seu E-mail" 
                        id="email"
                        aria-required="true" 
                        aria-label="Digite aqui o email neste campo"
                        placeholder="Digite seu email para fazer login"
                        onChange={handleChangeLogin}
                    />
                    </div>
                    {
                        messageError(
                            errors,
                            login.email,
                            true,
                            undefined,
                            undefined
                        )
                    }

                    <button className="btn-entrar" onClick={handleSubmit} id="submit">Entrar</button>
                </form>
                </div>
                <footer></footer>
        </React.Fragment>
    )
}