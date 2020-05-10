import React from 'react'
import {shape, string, number, arrayOf} from 'prop-types'


const DisplayData = ({data}) => {
    console.log(data)
    return (
        <div>
            <div>Name: {data.name}</div>
            <div>Alias: {data.alias.join(', ')}</div>
            <div>Powers: {data.powers.join(', ')}</div>
            <div>Rating: {data.rating}</div>
        </div>
    )
}

DisplayData.propTypes = {
    data: shape({
        name: string,
        alias: arrayOf(string),
        powers: arrayOf(string),
        rating: number,
    })
}

export { DisplayData }