import React from 'react'
import { Link } from 'react-router-dom'

export default function Table({players}){
    return <div >
                <div className="bg-gray-400 grid grid-cols-1 divide-y text-black">
                    {players.response.map((players) => (
                         <Link to={`/bio/${players.id}`} key={players.id}>
                        <div className='bg-white py-2'>
                            <div align="center">
                                <img src={players.profilePicture} width={100} alt={'No Photo'}/> 
                                {players.fullName}
                            </div> 
                            <div className='text-center'>Position: {players.position}</div>       
                        </div> 
                     </Link>      
                    ))};
                    </div>
            </div>
}