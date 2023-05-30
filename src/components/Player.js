import { Players } from '../shared/ListOfPlayers'
import React from 'react'

export default function Player() {
    return (
        <div className='container'>
            <div className='players'>
                {Players.map((player) => {
                    return (
                        <div className='column'>
                            <div className='card'>
                                <img src={player.img} alt={player.name} />
                                <h3>{player.name}</h3>
                                <p className='title'>{player.club}</p>
                                <p><button>Detail</button></p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

