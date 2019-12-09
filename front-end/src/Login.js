import React from 'react'
import { Form } from './pages/Login/components/form'
import api from './services/axios'
import Loading from './components/Loading'
export default class extends React.Component {
    state= {
        loading: false,
        login: {
            email: '',
        },
        errors: false,
       
    }
    // async componentDidMount() {await this.getLogin()}

    // UNSAFE_componentWillMount = () => console.log(`...`)()
    

    // getLogin = async () => {
    //     this.setState({loading: true})
    //     try{
    //         const res = await api.get(`/login`)
    //         this.setState({
    //             login: res.data.data === null ? '' : res.data.data,
    //             loading: false
    //         })
    //         this.UNSAFE_componentWillMount()
    //     }catch(err) {
    //         this.setState({loading: false})
    //         if(err.response.data.errors === 429) {
    //             // notification
    //             this.setState({
    //                 loading: false
    //             })
    //         }
    //         throw new Error('Erro ao buscar logins')
    //     }
    // }
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
        const alunosTeste = new Map()
        alunosTeste.set('Logado', {nome: 'Felipe'}).set('Deslogado',{nome: 'Maria'})


        alunosTeste.forEach((el,index) => {
            return console.log(
                `Índice = ${Object.keys(index)}), pessoa = ${Object.values(el)}`
            )
        })

        const {login} = this.state
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
        const data = Object.assign(login)
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