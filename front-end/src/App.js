// import React, {Fragment} from 'react';
// import api from './services/axios'
// import Loading from './components/Loading'
// export default class extends React.Component {
//   state = {
//     loading: false
//   }
//   componentDidMount = _ => this.test()

//   test = _ =>{
//     this.setState({
//       loading: true
//     })

//       api.get(`/cursos`).then(res =>{
//         console.log(res, '127.0.0.1')
//         this.setState({
//           loading: false
//         })
//       })
//       .catch(() =>{
//         // throw new Error('Exceção')
//         console.log('Erro por enquanto')
//       })
//       .finally(() => {
//         this.setState({
//           loading: false
//         })
//       })
//     }
  

//   render(){
//     const {loading} = this.state
//     return(
//       <Fragment>
//             {React.createElement('h1', {}, 'Senac')}
//             <Loading loading={loading} />
//       </Fragment>
//     )
//   }
// }

// import React, {Fragment, useState, useEffect} from 'react'
// import api from './services/axios'
// import Loading from './components/Loading'
// export default function Course(){
//     const [loading,setLoading] = useState(false)
//     const [data,setData] = useState([])

//     useEffect(() =>{
//       getCourse()
//     },[])

//     function getCourse(){
//       setLoading(true)
//       api.get(`/course`).then(res =>{
//         setData(res.data)
//         setLoading(false)

//         console.dir('res', res)
//       }).catch(err =>{
//           if(err.response.data.status_code === 429){
//             // notificacao aqui 
//             console.log('Você está fazendo multiplas requisições. Aguarde 1min e tente novamente')
//           }
//           setLoading(false)
//           // throw new Error('Erro ao dar get')
//           return
//       })
//     }
//     return (
//       <Fragment>
//           {React.createElement('p',{},'Curso')}
//           <Loading loading={loading} />
//       </Fragment>
//     )
// }