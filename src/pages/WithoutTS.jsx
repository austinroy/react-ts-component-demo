import React from 'react'
import { DisplayData } from '../DisplayData'

const DisplayWithoutTS = () => {
    const info = {
        name: 'Anakin Skywalker',
        alias: [ 'Darth Vader', 'The Chosen One'],
        powers: ['Force Push', 'Force Pull', 'Force Vision'],
        rating: 10
      }
    return <DisplayData data={info}/>
}

export { DisplayWithoutTS }