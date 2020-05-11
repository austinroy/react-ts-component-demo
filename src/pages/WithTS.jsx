import React from 'react'
import { DisplayData } from '../DisplayData'

const DisplayWithTS = () => {
    const info = {
        name: 'Sheev Palpatine',
        alias: [ 'Chancellor Palpatine', 'Emperor Palpatine', 'Darth Sidious'],
        powers: ['Force Push', 'Force Pull', 'Force Vision', 'Force Lightning', 'Sith Storm', 'Essense Transfer'],
        rating: 10
      }
    return <DisplayData data={info}/>
}

export { DisplayWithTS }