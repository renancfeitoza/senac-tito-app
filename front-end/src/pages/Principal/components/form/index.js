import React from 'react'
import { messageError } from '../../../../components/ValidationRules'
import { Link } from 'react-router-dom'
import {Input} from 'reactstrap'
import '../../../../utils/CSS/Principal.css'

export const FormRegister = ({
handleChangeInfo,
i,
handleSubmit,
err,
onlyLetters
} = this.props) => {
    return (
        <React.Fragment>
            <div className="containerLoginAluno">
                <div className="contentLoginAluno">
                <form className="form_login_aluno">
                <h1 className="h1-registerStudent">Cadastre-se</h1>
                <label htmlFor="name">Nome:*</label>
                <input
                    type="text"
                    aria-label="Digite seu nome completo aqui neste campo"
                    id="name"
                    placeholder="Digite seu nome completo aqui"
                    aria-required="true"
                    onChange={handleChangeInfo}
                    value={i.name}
                    onKeyPress={onlyLetters}
                    maxLength={100}
                />
                {messageError(
                    err,
                    i.name,
                    true,
                    2,
                    100
                )}
                <label htmlFor="escolaridade" className="label_register_student">Escolaridade</label>
                <Input
                    type="select"
                    name="escolaridade"
                    id="escolaridade"
                    value={i.escolaridade}
                    onChange={handleChangeInfo}
                    aria-label="Selecione seu escolaridade aqui neste campo"
                    aria-required="true"
                    maxLength={100}
                >
                    <optgroup label="Escolha um projeto">
                        <option value="Dourado">
                            Dourado
                        </option>
                        <option value="Mestrado">
                            Mestrado
                        </option>
                        <option value="Pós-Graduação">
                          Pós-Graduação
                        </option>
                        <option value="Ensino Superior Completo">
                          Ensino Superior Completo
                        </option>
                        <option value="Ensino Superior Incompleto">
                          Ensino Superior Incompleto
                        </option>
                        <option value="Ensino Médio Incompleto">
                          Ensino Médio Incompleto
                        </option>
                        <option value="Não Alfabetizado(a)">
                          Não Alfabetizado(a)
                        </option>
                        <option value="Semialfabetizado(a)">
                        Semialfabetizado(a)">
                        </option>
                        <option value="Ensino Fundamental Incompleto">
                        Ensino Fundamental Incompleto
                        </option>
                    </optgroup>
                </Input>
                <label htmlFor="curso_frequentado" className="label_register_student">Cursos frequentados:*</label>
                <input
                    type="text"
                    id="curso_frequentado"
                    value={i.curso_frequentado}
                    onChange={handleChangeInfo}
                    aria-label="Digite os cursos frequentados aqui neste campo"
                    aria-required="true"
                    maxLength={100}
                    onKeyPress={onlyLetters}
                />
                {messageError(
                    err,
                    i.curso_frequentado,
                    true,
                    2,
                    100
                )}
                 <label htmlFor="profissao" className="label_register_student">Profissão:*</label>
                <input
                    type="text"
                    name="profissao"
                    id="profissao"
                    value={i.profissao}
                    onChange={handleChangeInfo}
                    aria-label="Digite sua profissão aqui neste campo"
                    placeholder="Digite seu profissão"
                    aria-required="true"
                    maxLength={50}
                    onKeyPress={onlyLetters}
                />
                {messageError(
                    err,
                    i.profissao,
                    true,
                    3,
                    50
                )}
                  <label htmlFor="date_nasc" className="label_register_student">Data de nascimento:*</label>
                <Input
                    type="date"
                    id="date_nasc"
                    value={i.date_nasc}
                    onChange={handleChangeInfo}
                    aria-label="Selecione sua data aqui"
                    aria-required="true"
                    
                >
                </Input>
                 {messageError(
                    err,
                    i.date_nasc,
                    true,
                    undefined,
                    undefined
                )}
                <label htmlFor="frase" className="label_register_student">Frase que define você:*</label>
                <input
                    type="text"
                    name="frase"
                    id="frase"
                    value={i.frase}
                    onChange={handleChangeInfo}
                    aria-label="Digite sua frase aqui neste campo"
                    placeholder="Digite sua frase aqui"
                    aria-required="true"
                    maxLength={50}
                    
                />
                {messageError(
                    err,
                    i.frase,
                    true,
                    10,
                    undefined
                )}
               
                <button onClick={handleSubmit} className="submit_login_aluno">Efetuar cadastro</button>
                <p className="h1-registerStudent" style={{marginTop: 2+'px'}}>
                    Já tem uma conta?
                    Faça login clicando  <Link to="/LoginStudent">&nbsp;aqui</Link>
                </p>

                   </form>
                 </div>
            </div>
                
        </React.Fragment>
    )
}