    import React from 'react'
import logo from '../../../../utils/IMG/Senac_logo.svg.png'
import '../../../../utils/CSS/Login.css'
import { messageError } from '../../../../components/ValidationRules'
import { Link } from 'react-router-dom'
export const Form = ({
    login,
    handleChangeLogin,
    handleSubmit,
    errors,
} = this.props) =>{
    return (
        <>
      <input type="checkbox" id="check" />
      <label htmlFor="check"><i className="material-icons">menu</i></label>
      <div className="menu">
        <nav>
          <Link to="#">
            <div className="link">Principal</div>
          </Link>
          <Link to="#">
            <div className="link">Cursos</div>
          </Link>
          <Link to="#">
            <div className="link">?</div>
          </Link>
          <Link to="#">
            <div className="link">Contato</div>
          </Link>
        </nav>
      </div>
      <div className="formLogin">
        <div className="logo">
          <img src={logo} alt="" className="logo" />
        </div>
        <form action="#">
          <div className="login">
            <span>
              <i className="material-icons">email</i>
            </span>
            <input 
                type="text" 
                placeholder="Digite seu email para logar no sistema" 
                id="email" 
                value={login.email}
                onChange={handleChangeLogin}
            />
          </div>
            {
                messageError(
                    errors,
                    login.email,
                    true,
                    10,
                    150
                )
            }
          <button className="btn-entrar" onClick={handleSubmit} id="submit">Entrar</button>
        </form>
      </div>
      </>
    )
}