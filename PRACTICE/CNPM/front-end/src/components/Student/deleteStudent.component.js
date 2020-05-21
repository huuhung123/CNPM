import React from 'react'
import axios from "axios"

export const deleteStudent = (props) => {
    // try {
    //     const value = await axios.get(`http://localhost:5000/duty/delete/${match.params._id}`)
    // }
    // catch (err) {
    //         console.log(err)
    // }
    const { history, match } = props

    axios.get(`http://localhost:5000/student/delete/${match.params._id}`)
    .then(res => history.push('/student'))
    .catch(err => console.log(err))

    return (
        <div>
            This is deleteStudent component
        </div>
    )
}
export default deleteStudent

