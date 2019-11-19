import React, {Fragment} from 'react';
import api from './services/axios'
import Loading from './components/Loading'
export default class extends React.Component {
  state = {
    loading: false
  }
  componentDidMount = _ => this.test()

  test = _ =>{
    this.setState({
      loading: true
    })

      api.get(`/cursos`).then(res =>{
        console.log(res, '127.0.0.1')
        this.setState({
          loading: false
        })
      })
      .catch(() =>{
        // throw new Error('Exceção')
        console.log('Erro por enquanto')
      })
      .finally(() => {
        this.setState({
          loading: true
        })
      })
    }
  

  render(){
    const {loading} = this.state
    return(
      <Fragment>
            {React.createElement('h1', {}, 'Senac')}
            <Loading loading={loading} />
      </Fragment>
    )
  }
}