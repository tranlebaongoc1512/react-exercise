import React from 'react'
import { useParams } from 'react-router-dom'
import { Players } from '../shared/ListOfPlayers'

export default function Detail() {
    const userName = useParams();
    const player = Players.find(obj => {
        return obj.id == userName.id;
    });
    let cost = player.cost.toLocaleString();
    return (
        <div className='container'>
            <div className='player-card'>
                <div className='badge'>{player.name}</div>
                <div className='player-tumb'>
                    <img src={`../${player.img}`} alt='' />
                </div>
                <div className='player-details'>
                    <h4>{player.club}</h4>
                    <div className='player-price'>Market value: € {cost}</div>
                    <p>{player.info}</p>
                    <div className='player-bottom-details'></div>
                </div>
            </div>
        </div>
    )
}

