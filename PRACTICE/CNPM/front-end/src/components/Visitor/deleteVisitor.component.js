import React from 'react'
import axios from "axios"

export const deleteVisitor = (props) => {
    // try {
    //     const value = await axios.get(`http://localhost:5000/duty/delete/${match.params._id}`)
    // }
    // catch (err) {
    //         console.log(err)
    // }
    const { history, match } = props

    axios.get(`http://localhost:5000/visitor/delete/${match.params._id}`)
    .then(res => history.push('/visitor'))
    .catch(err => console.log(err))

    return (
        <div>
            This is deleteVisitor component
        </div>
    )
}
export default deleteVisitor

