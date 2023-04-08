import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";

const Detail = () => {
    const [dentist, setDentist] = useState([])
    const paramsForDentist = useParams()
    const getDentist = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/` + paramsForDentist.id).then((response) => {
            return response.json()
        })
        setDentist(data)
    }

    useEffect(() => {
        getDentist()
    },)

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Webite</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{dentist.name}</td>
                    <td>{dentist.email}</td>
                    <td>{dentist.phone}</td>
                    <td>{dentist.website}</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default Detail