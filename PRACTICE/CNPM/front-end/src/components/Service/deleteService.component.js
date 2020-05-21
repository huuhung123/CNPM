import React from 'react'
import axios from "axios"

export const deleteService = (props) => {
    // try {
    //     const value = await axios.get(`http://localhost:5000/duty/delete/${match.params._id}`)
    // }
    // catch (err) {
    //         console.log(err)
    // }
    const { history, match } = props

    axios.get(`http://localhost:5000/service/delete/${match.params._id}`)
    .then(res => history.push('/service'))
    .catch(err => console.log(err))

    return (
        <div>
            This is deleteService component
        </div>
    )
}
export default deleteService

