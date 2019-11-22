import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../../utils/IMG/Senac_logo.svg.png'
import '../../../../utils/CSS/Login.css'
import facebook from '../../../../utils/IMG/facebook-logo.svg'
import instagram from '../../../../utils/IMG/instagram.svg'
import linkedin from '../../../../utils/IMG/linkedin.svg'
import twitter from '../../../../utils/IMG/twitter.svg'
import youtube from '../../../../utils/IMG/youtube.svg'
import { messageError } from '../../../../components/ValidationRules'
export const Form = ({
    login,
    handleChangeLogin,
    handleSubmit,
    errors
} = this.props) =>{
    return (
        <React.Fragment>
            <nav>
                <div className="menu">
                    <i className="material-icons">menu</i>
                </div>
                <div className="redes-sociais">
                    <Link to="#">
                        <img src={facebook} alt="ícone da cor preta do facebook"/>
                    </Link>
                    <Link to="#">
                        <img src={instagram} alt="ícone da cor preta do instagram"/>
                    </Link>
                    <Link to="#"> 
                         <img src={linkedin} alt="ícone da cor preta do linkedin"/>
                    </Link>
                    <Link to="#">
                        <img src={twitter} alt="ícone da cor preta do twitter"/>
                    </Link>
                    <Link to="#">
                        <img src={youtube} alt="ícone da cor preta do youtube"/>
                    </Link>
                </div>
            </nav>
                <div className="logo">
                  <img src={logo} alt="" className="logo" />
                </div>
                <div className="formLogin">
                <form>
                    <label htmlFor="email">E-mail</label>

                    <div className="login">
                    <span>
                        <i className="material-icons">email</i>
                    </span>
                    <input 
                        type="text" 
                        placeholder="Seu E-mail" 
                        id="email" 
                        value={login.email}
                        aria-required="true"
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
                    <button className="btn-entrar" onClick={handleSubmit}>Entrar</button>
                </form>
          </div>
                <footer></footer>
        </React.Fragment>
    )
}