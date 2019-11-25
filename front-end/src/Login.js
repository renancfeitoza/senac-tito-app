import React from 'react'
import { Form } from './pages/Login/components/form'
import api from './services/axios'
import Loading from './components/Loading'
export default class extends React.Component {
    state= {
        loading: false,
        errors: false,
        login: {
            email: ''
        },
       
    }
    handleChangeLogin = e =>{
        if(e.target.id === 'email') {
            this.setState({
                login: {
                    ...this.state.login,
                    [e.target.id]: e.target.value
                }
            })
        }
    }
    validateRules = _ => {
        const { login } = this.state

        if(!login.email)
          return 'fail'
        else return 'success'
    }
    handleSubmit = e => {
        e.preventDefault()

        const {login} = this.state
        const validate = this.validateRules()

    this.setState({
        loading: true
    })
        if(validate !== 'success') {
            console.log('valida')
            this.setState({
                loading: false,
                errors: true
            })
        }
        const data = Object.assign(login)
        Object.freeze(data)
        Object.preventExtensions(data)
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
        const {login,loading,errors} = this.state
        return(
            <React.Fragment>
                <Form 
                    login={login} 
                    handleChangeLogin={this.handleChangeLogin}
                    handleSubmit={this.handleSubmit}
                    errors={errors}
                    validationRules={this.validateRules}
                />
                <Loading loading={loading} />
            </React.Fragment>
        )
    }
}