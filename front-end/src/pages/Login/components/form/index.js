    import React from 'react'
    import imgHome from '../../../../utils/IMG/home.svg'
    import interesses from '../../../../utils/IMG/interesses.svg'
    import linkedin from '../../../../utils/IMG/linkedin.svg'
    import twitter from '../../../../utils/IMG/twitter.svg'
    import logo from '../../../../utils/IMG/logo.png'
    import facebook from '../../../../utils/IMG/facebook.svg'
    import instagram from '../../../../utils/IMG/instagram.svg'
    import assistenteFiscal from '../../../../utils/IMG/AssistenteFiscal.jpg'
    import organizadorEventos from '../../../../utils/IMG/organizadordeeventos.jpg'
    import admFinanceira from '../../../../utils/IMG/AdministracaoFinanceira.jpg'
    import auxEscritorio from '../../../../utils/IMG/AuxiliarEscritorio.jpg'
    import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
    import '../../../../utils/CSS/Login.css'
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
    <label for="check"><i className="material-icons">menu</i></label>
    <div className="menu">
      <nav>
        <div className="profileI">
          <section></section>
        </div>
        <div className="options">
          <div className="optionsProfile">
            <section className="profileUI">
              <Link to=""><img src={imgHome} alt="" />Página principal</Link>
            </section>
            <section className="profileUI">
              <Link to="../Profile/"
                ><img src="img/editprofile.svg" alt="" />Editar meu perfil</Link>
            </section>
            <section className="profileUI">
              <Link to=""
                ><img src={interesses}alt="" />Meus interesses</Link>Sair
            </section>
            <section className="sociais">
              <Link to="https://www.facebook.com/senaclapatito" target="_blank"
                ><img src={facebook} alt=""
              /></Link>
              <Link to="https://www.instagram.com/senactito/" target="_blank"
                ><img src={instagram} alt=""
              /></Link>
              <Link to=""><img src={linkedin} alt=""/></Link>
              <Link to=""><img src={twitter} alt=""/></Link>
            </section>
          </div>
        </div>
      </nav>
      <div className="logout">
        <section>
          <Link to=""><img src="img/logout.svg" alt="" />Sair</Link>
        </section>
      </div>
    </div>
    <div className="logasso">
      <img src={logo} alt="" className="logo" />
    </div>
    <div className="conteudo">
      <div
        id="carousel-example-1z"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-1z"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carousel-example-1z" data-slide-to="1"></li>
          <li data-target="#carousel-example-1z" data-slide-to="2"></li>
          <li data-target="#carousel-example-1z" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active" data-interval="4000">
            <div className="card w-20">
              <img
                className="card-img-top"
                src={assistenteFiscal}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Assistente Fiscal</h5>
                <p className="card-text"></p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Carga horária</strong>: 30 horas
                </li>
                <li className="list-group-item">
                  <strong>Descrição:</strong><br />
                </li>
              </ul>
              <div className="card-body">
                <a
                  href="https://www.sp.senac.br/jsp/default.jsp?newsID=DYNAMIC,oracle.br.dataservers.CourseDataServer,selectCourse&course=24220&template=395.dwt&testeira=367&unit=TIT"
                  className="card-link"
                  >Ver mais</a
                >
              </div>
            </div>
          </div>
          <div className="carousel-item" data-interval="4000">
            <div className="card w-20">
              <img
                className="card-img-top"
                src={organizadorEventos}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Organizador de Eventos</h5>
                 <p className="card-text"></p> 
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Carga horária</strong>: 180 horas
                </li>
                <li className="list-group-item">
                  <strong>Descrição:</strong><br />
                </li>
              </ul>
              <div className="card-body">
                <Link
                  to="https://www.sp.senac.br/jsp/default.jsp?newsID=DYNAMIC,oracle.br.dataservers.CourseDataServer,selectCourse&course=22910&template=395.dwt&testeira=367&unit=TIT"
                  className="card-link"
                  >Ver mais</Link>
                
              </div>
            </div>
          </div>
        
          <div className="carousel-item" data-interval="4000">
            <div className="card w-20">
              <img
                className="card-img-top"
                src={admFinanceira}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Administração Financeira</h5>
                <p className="card-text"></p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Carga horária</strong>: 30 horas
                </li>
                <li className="list-group-item">
                  <strong>Descrição:</strong><br />
                </li>
              </ul>
              <div className="card-body">
                <Link
                  to="https://www.sp.senac.br/jsp/default.jsp?newsID=DYNAMIC,oracle.br.dataservers.CourseDataServer,selectCourse&course=22898&template=380.dwt&unit=NONE&testeira=474"
                  className="card-link"
                  >Ver mais</Link>
                
              </div>
            </div>
          </div>
          <div className="carousel-item" data-interval="4000">
            <div className="card  w-20">
              <img
                className="card-img-top"
                src={auxEscritorio}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Auxiliar de Escritório</h5>
                <p className="card-text"></p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Carga horária</strong>: 160 horas
                </li>
                <li className="list-group-item">
                  <strong>Descrição:</strong><br />
                </li>
              </ul>
              <div className="card-body">
                <Link
                  to="https://www.sp.senac.br/jsp/default.jsp?newsID=DYNAMIC,oracle.br.dataservers.CourseDataServer,selectCourse&course=22898&template=380.dwt&unit=NONE&testeira=474"
                  className="card-link"
                  >Ver mais</Link>
              </div>
            </div>
          </div>
        </div>
        <Link
          className="carousel-control-prev"
          href="#carousel-example-1z"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Anterior</span>
        </Link>
        <Link
          className="carousel-control-next"
          href="#carousel-example-1z"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Próximo</span>
        </Link>
      </div>
    </div>
    <div className="btnLogin">
      <Link to="">Entrar</Link>
    </div>
      </>
    )
}