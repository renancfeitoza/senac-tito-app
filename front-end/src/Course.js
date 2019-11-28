import React, { Fragment } from 'react'
import api from './services/axios'
import Loading from './components/Loading'
import { Form } from './pages/Course'

export default class extends React.Component {
    state = {
        loading: false,
        errors: false,
        stateCurso = {
            nome_complete: '',
            total_vaga: '',
            total_bolsas: '',
            dt_nasc: '',
            valor: '',
            carga_horaria:'',
            descricao:'',
            pre_requisito:'',
            metodo: '',
            mercado_trabalho:'',
            programa:'',
            certificacao:'',
            id_categoria:''
        }
    }
    handleChangeCourse = e => {
        const {stateCurso} = this.state
        this.setState({
            stateCurso: {
                ...stateCurso,
                [e.target.id]: e.target.value
            }
        })
    }
    validationRulesCourse = _ => {
        const {nome_complete} = this.state
        if(
            !nome_complete ||
            nome_complete.length > 75 ||
            !total_vaga ||
            !total_bolsas ||
            !valor ||
            !carga_horaria ||
            !descricao ||
            !pre_requisito ||
            !metodo || 
            !mercado_trabalho ||
            !programa ||
            !certificacao ||
            !categoria
        )
            return 'fail'
        else return 'success'
    }
    handleSubmit = () => {
        const { stateCurso } = this.state
        const validation = this.validationRulesCourse()
        this.setState({
            loading: true
        })
        
        if(validation !== 'success'){
            // notificacao
            this.setState({
                loading: false
            })
             return
        }
        const data = Object.assign(stateCurso)
        Object.seal(data)
        Object.preventExtensions(data)
        console.warn(Object.isSealed(data), 'Selado?')
        api.post(`/`, data).then(() => {
            // req

                this.setState({
                    loading: false
                })
        }).catch(error => {
            console.log(error)
            this.setState({
                loading: false
            })
        }).finally(error => {
            console.log(error)
            this.setState({
                loading: false
            })
        })
    }
    render(){
        const { stateCurso,loading } = this.state
        return(
            <Fragment>
                <Form 
                    handleChangeCourse={this.handleChangeCourse}
                    stateCurso={stateCurso}
                />  
                <Loading loading={loading} />
            </Fragment>
        )
    }
}