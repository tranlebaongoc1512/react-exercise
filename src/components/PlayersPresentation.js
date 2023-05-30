// import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function PlayersPresentation({ players }) {
    // const [player, setPlayer] = useState([]);
    return (
        <div className='container'>
            <div className='players'>
                {players.map((player) => {
                    return (
                        <div className='column' key={player.id}>
                            <div className='card'>
                                <img src={player.img} alt={player.name} />
                                <h3>{player.name}</h3>
                                <p className='title'>{player.club}</p>
                                <p>
                                    <button><Link to={`detail/${player.id}`}>Detail</Link></button>
                                    {/* <button onClick={() => { setPlayer(player) }}>
                                    <a href='#popup' id='openPopUp'>Detail</a>
                                </button> */}
                                </p>
                            </div>
                        </div>
                    )
                })}
                {/* <div id='popup' className='overlay'>
                <div className='popup'>
                    <img src={player.img} alt={player.name} />
                    <h2>{player.name}</h2>
                    <a className='close' href='#'>&times;</a>
                    <div className='content'>
                        {player.info}
                    </div>
                </div>
            </div> */}
            </div>
        </div>
    )
}
