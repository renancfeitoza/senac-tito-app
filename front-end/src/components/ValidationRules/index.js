import React from 'react'

export const messageError = (errors, object, required, min, max) => {
    if (errors === true) {
        if (object !== null && object !== undefined) {
            if (object.length > max || object.length < min) {
                if (required !== null && required !== false) {
                    if (max !== undefined && min !== undefined) {
                        return (
                            <p style={{color:'red'}}>
                                Campo obrigatório (Min: {min} Max: {max})
                            </p>
                        )
                    } else if (max !== undefined && min === undefined) {
                        return (
                            <p style={{color:'red'}}>
                                Campo obrigatório (Max: {max})
                            </p>
                        )
                    } else if (min !== undefined && max === undefined) {
                        return (
                            <p style={{color:'red'}}>
                                Campo obrigatório (Min: {min})
                            </p>
                        )
                    }
                } else {
                    if (max !== undefined && min !== undefined) {
                        return (
                            <p style={{color:'red'}}>
                                (Min: {min} Max: {max})
                            </p>
                        )
                    } else if (max !== undefined && min === undefined) {
                        return <p style={{color:'red'}}>(Max: {max})</p>
                    } else if (min !== undefined && max === undefined) {
                        return <p style={{color:'red'}}>(Min: {min})</p>
                    }
                }
            } else if (required) {
                if (object.length <= 0) {
                    return (
                        <p style={{color:'red'}}>Campo obrigatório</p>
                    )
                }
            }
        }
    }
}



// export const validationInputs = data => {
//     let message = ''
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].value.length > data[i].max) {
//             //return `${data[i].name} tem mais que ${data[i].max} caracteres`
//             message = 'fail'
//         } else if (data[i].value.length < data[i].min) {
//             //return `${data[i].name} tem menos que ${data[i].max} caracteres`
//             message = 'fail'
//         } else if (data[i].value.length <= 0 && data[i].required === true) {
//             message = 'fail'
//         } else {
//             if (data[i - 1]) {
//                 if (
//                     data[i - 1].value.length < data[i - 1].max &&
//                     data[i - 1].value.length > data[i - 1].min
//                 ) {
//                     message = 'success'
//                 } else {
//                     message = 'fail'
//                 }
//             }
//         }
//     }
//     return message
// }
