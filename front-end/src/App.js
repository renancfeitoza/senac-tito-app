import React from 'react'
import { FormRegister } from './pages/Principal/components/form'
import api from './services/axios'
import Loading from './components/Loading'

export default class extends React.Component {
    state = {
        loading: false,
        errors: false,
        info: {
            name: '',
            escolaridade: '',
            curso_frequentado: '',
            profissao: '',
            date_nasc: '',
            frase: ''
        }
    }
    handleChangeInfo = e =>{
            this.setState({
                info: {
                    ...this.state.info,
                    [e.target.id]: e.target.value
                }
            })
        
    }
    validateRules = _ => {
        const { info } = this.state

        if(
            !info.name ||
            info.name.length < 2 ||
            !info.escolaridade ||
            !info.curso_frequentado ||
            info.curso_frequentado.length < 2 ||
            !info.profissao ||
            info.profissao.length < 3 ||
            !info.frase ||
            info.frase.length < 10 ||
            !info.date_nasc ||
            !info.frase
        )
          return 'fail'
        else return 'success'
    }
    onlyLetters(e) {
        const re = /[^\d]+/
        if (!re.test(e.key)) {
            e.preventDefault()
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        const alunosTeste = new Map()
        alunosTeste.set('Logado', {nome: 'Felipe'}).set('Deslogado',{nome: 'Maria'})


        alunosTeste.forEach((el,index) => {
            return console.log(
                `Índice = ${Object.keys(index)}), pessoa = ${Object.values(el)}`
            )
        })
        const {info} = this.state
        const validate = this.validateRules()

    this.setState({
        loading: true
    })
        if(validate !== 'success') {
            // console.log('a')
            this.setState({
                loading: false,
                errors: true
            })
        }
        const data = Object.assign(info)
        Object.freeze(data)
        console.warn(Object.isExtensible(data))
        console.log(data)
        
        api.post(`/rota`, data).then(_ => {

        }).catch(_ => {
            this.setState({
                loading: false
            })
        }).finally(_ =>{
            this.setState({
                loading: false
            })
        })
    }
    render(){
        const { info: i, loading, errors: err} = this.state
        return (
            <React.Fragment>
                <FormRegister 
                    handleChangeInfo={this.handleChangeInfo}
                    i={i}
                    err={err}
                    handleSubmit={this.handleSubmit}
                    onlyLetters={this.onlyLetters}
                
                />
                <Loading loading={loading} />
            </React.Fragment>
        )
    }
}