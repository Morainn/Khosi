import React from 'react'
import { useParams } from 'react-router-dom'

export default function Bio({players}){
    const params = useParams();

    const playerID = params.playerID;

    const results = players.response.filter((player) =>{
        return player.id == playerID
    })

    const player = results[0];

    return(
        <div>
            <div className='bg-white py-2 grid grid-cols-1 divide-x'>
            <h1 className='bg-gray-700 p-1 text-gray-300 text-xl'>Player Bio</h1>
                        <div align="center" >
                            <img src={player.profilePicture} width={500} alt={'No Photo'}/> 
                            {player.fullName}
                        </div> 
                        <div className='text-center' ><h1 className='bg-white-700 p-1 text-white-300 text xl'>Position: {player.position}</h1></div> 
                        <div className='text-center'>Age: {player.age}</div>
                        <div className='text-center'>Tot. Apperance: {player.apperance}</div>  
                        <div className='text-center'>Tot. Goals: {player.goals}</div>     
                        <div className='text-center'>Jersey No.: {player.shirtNumber}                      </div>
                        <div className='text-center'>Place Of Birth: {player.PlaceOfBirth}</div>
                        <div className='text-center'>Height: {player.Height}</div>
                        <div className='text-center'>Nationality: {player.Nationality}</div>        
            </div> 
        </div>
    )
}