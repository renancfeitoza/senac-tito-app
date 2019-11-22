import React from 'react'
import api from './services/axios'

export default class extends React.Component {
    state= {
        loading:false,
        stateStudent = {
            nome:'',
            email:'',
            dt_nasc: '',
            turma: '',
            profile: ''
        }
    }
    handleChangeStudent = e =>{
        this.setState({
            ...this.state.stateStudent,
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = e =>{
        this.setState({
            loading: false
        })
        e.preventDefault()
        const {stateStudent} = this.state
        
        const data = Object.assign(stateStudent)
        Object.freeze(data)
        Object.preventExtensions(data)

        api.get(`/rota`, data).then(res =>{
            console.log('colocar validacao')
            this.setState({
                stateStudent: {
                    ...stateStudent,
                    nome:'',
                    email:'',
                    dt_nasc: '',
                    turma: '',
                    profile: ''
                },
                loading: false
            })
        }).catch(err =>{
            this.setState({
                loading:false
            })
        })
    }
    render(){
        const { loading, stateStudent} = this.state
        return(
            <React.Fragment>
                <FormStudent 
                    loading={loading}
                    stateStudent={stateStudent}
                    handleChangeStudent={this.handleChangeStudent}
                />

            </React.Fragment>
        )
    }
}