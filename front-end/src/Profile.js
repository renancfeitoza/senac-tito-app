import React from 'react'
import api from './services/axios'
import Loading from './components/Loading'
import { FormProfile } from './pages/Profile/components/form'

export default class extends React.Component {
    state = {
        loading: false,
        errors: false,

        stateProfile: {
            nome_completo: '',
            escolaridade: '',
            curso_frequentado: '',
            profissao: '',
            data_nascimento: '',
            interesses: '',
            frase_definitiva: '',
        }
    }
    // async componentDidMount() {await this.getProfiles()}
    getProfiles = async () => {
        this.setState({
            loading: true
        })
        try {
            const res = await api.get(`/profile`)
                this.setState({
                    stateProfile : {
                        ...this.state.stateProfile,
                        profile: res.data.data === null ? '' : res.data.data,
                        loading: false
                    }
                })
        }catch(err){
            if (err.response.data.status_code === 429) {
                // NotificationManager.warning(
                //     '',
                //     'Você está fazendo multiplas requisições. Aguarde 1min e tente novamente',
                //     4000,
                //     null,
                //     null
                // )
                this.setState({
                    loading: false,
                })
                return
            }
        }
    }
        handleChangeProfile = e => {
            this.setState({
                stateProfile: {
                    ...this.state.stateProfile,
                    [e.target.id]: e.target.value
                }
            })
        }
        validationRulesProfile = _ => {
            const { stateProfile } = this.state

            if(
                !stateProfile.nome_completo ||
                stateProfile.nome_completo.length < 5 ||
                !stateProfile.escolaridade || 
                stateProfile.escolaridade.length < 8 ||
                !stateProfile.curso_frequentado ||
                !stateProfile.profissao ||
                !stateProfile.data_nascimento ||
                stateProfile.interesses.length < 20 ||
                !stateProfile.frase_definitiva
            )   return 'fail'
            else return 'success'
        }
        handleSubmit = () => {
            this.setState({
                loading: true
            })
            const { stateProfile } = this.state
            const validate = this.validationRulesProfile()
            if(validate !== 'success') {
                // notificacao

                this.setState({
                    errors: true,
                    loading: false
                })
            }

            const profileTeste = new Map()
            profileTeste.set('Logado', {nome: 'Felipe'}).set('Deslogado',{nome: 'Maria'})
    
    
            profileTeste.forEach((el,index) => {
                return console.log(
                    `Índice = ${Object.keys(index)}), pessoa = ${Object.values(el)}`
                )
            })
            console.log(profileTeste.has('Felipe'))
         
            const data = Object.assign(stateProfile)
            Object.freeze(data)

            api.post(`/`, data).then(() => {
                // req
    
                    this.setState({
                        loading: false,
                        stateProfile: {
                            ...stateProfile,
                            nome_completo: '',
                            escolaridade: '',
                            curso_frequentado: '',
                            profissao: '',
                            data_nascimento: '',
                            interesses: '',
                            frase_definitiva: '',
                        }
                    })
                    this.componentDidMount()
            }).catch(error => {
                console.log(error)
                this.setState({
                    loading: false
                })
            })
        }

        render(){
            const {stateProfile, loading} = this.state
            return (
                <React.Fragment>
                    <FormProfile 
                        handleChangeProfile={this.handleChangeProfile}
                        stateProfile={stateProfile} // fazer
                        loading={loading}
                    />
                <Loading loading={loading} />
                </React.Fragment>
            )
        }
}