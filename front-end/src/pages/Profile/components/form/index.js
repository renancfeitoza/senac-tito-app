import React from 'react'
import '../../../../utils/CSS/Profile.css'
import imgHome from '../../../../utils/IMG/home.svg'
import logout from '../../../../utils/IMG/logout.svg'
import editProfile from '../../../../utils/IMG/editprofile.svg'
import interesses from '../../../../utils/IMG/interesses.svg'
import linkedin from '../../../../utils/IMG/linkedin.svg'
import twitter from '../../../../utils/IMG/twitter.svg'
import logo from '../../../../utils/IMG/logo.png'
import facebook from '../../../../utils/IMG/facebook.svg'
import instagram from '../../../../utils/IMG/instagram.svg'
import { Link } from 'react-router-dom'
export const FormProfile = ({
    handleChangeProfile,
    loadin,
    stateProfile
} = this.props) =>{
        return (
            <React.Fragment>
            <input type="checkbox" id="check" />
            <label for="check"><i className="material-icons">menu</i></label>
            <div className="menu">
                <nav>
                <div className="profileI">
                    <section></section>
                </div>
                <div className="options">
                    <div className="optionsProfile">
                    <section className="profileUI">
                        <a href="../Principal/"><img src={imgHome} alt="" />Home</a>
                    </section>
                    <section className="profileUI">
                        <Link to="/Profile"><img src={editProfile} alt="" />Editar perfil</Link>
                    </section>
                    <section className="profileUI">
                        <Link to=""><img src={interesses} alt="" />Meus interesses</Link>
                    </section>
                    <section className="sociais">
                        <Link to="https://www.facebook.com/senaclapatito" target="_blank"><img src={facebook} alt="" /></Link>
                        <Link to="https://www.instagram.com/senactito/" target="_blank"><img src={instagram} alt="" /></Link>
                        <Link to=""><img src={linkedin} alt="" /></Link>
                        <Link to=""><img src={twitter} alt="" /></Link>
                        </section>
                    </div>
                </div>
                </nav>
                <div className="logout">
                <section>
                    <Link to=""><img src={logout} alt="" />Sair</Link>
                </section>
                </div>
            </div>
            
                <div className="logo-profile">
                    <img src={logo} alt="" />
                </div>

         </React.Fragment>
     )
}