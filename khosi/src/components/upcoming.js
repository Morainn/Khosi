import React from "react";

export default function Upcoming({ fixtures }) {

    return (
            <div className=" bg-gray-400  grid-cols-1 divide-y text-black">
                {fixtures.response.map((fixtures) => (
                    <div className='bg-white py-2'>
                        <h1 className='bg-gray-800 p-1 text-gray-300 text-xl'>Upcoming Fixtures</h1>
                        <div className="text-xl" align="center">
                                <img src={fixtures.leaguelogo} width={100} alt={'LeagueLogo'}/>
                                {fixtures.league}
                                {" "}
                        </div> 

                        <h1 className='bg-gray-800 p-1 text-gray-300 text-xl'>Next Fixtures</h1>
                        <div className="w-full flex p-1">
                                <div className="w-[10%]" align="center">
                                    <img src={fixtures.logo1} width={50} alt={'logo'}/>
                                </div>
                                <div className="w-[32%] text-right text-xl">
                                    {fixtures.displayName1}
                                </div>


                                <div className="w-[16%] text-center text-xl">
                                    VS
                                </div>

                                <div className="w-[32%] text-left text-xl">
                                    {fixtures.displayName2}
                                </div>

                                <div className="w-[10%]" align="center">
                                    <img src={fixtures.logo2} width={50} alt={'logo'}/>
                                </div>

                        </div> 
                        <div className="text-center text-xl">
                            {fixtures.detail} {" "}
                            {fixtures.venue} 
                            {" "}
                        </div>

                        <h1 className='bg-gray-800 p-1 text-gray-300 text-xl'>Last Fixtures</h1>
                        <div className="w-full flex p-1">
                                <div className="w-[10%]" align="center">
                                    <img src={fixtures.logo3} width={50} alt={'logo'}/>
                                </div>
                                <div className="w-[32%] text-right text-xl">
                                    {fixtures.displayName3}
                                </div>


                                <div className="w-[16%] text-center text-xl">
                                    VS
                                </div>

                                <div className="w-[32%] text-left text-xl">
                                    {fixtures.displayName4}
                                </div>

                                <div className="w-[10%]" align="center">
                                    <img src={fixtures.logo4} width={50} alt={'logo'}/>
                                </div>

                        </div> 
                        <div className="text-center text-xl">
                            {fixtures.detail1} {" "}
                            {fixtures.venue1} {" "}
                        </div>
            <div >
            {" "}
            <h1 className='bg-gray-800 p-1 text-gray-300 text-xl'>2023-2024 Season Past 8 Results</h1>
            <div className="w-full  p-1">
            <h1 className='bg-gray-800 p-1 text-gray-300 text-xl'>Draw</h1>
                <div className=" text-center text-xl">
                    Sunday 12 May : Kaizer Chiefs 1 : Amazulu 1          
                </div>
                <div className=" text-center text-l">
                    Du Preez 2' : Letsoalo 39'        
                </div>
                <h1 className='bg-gray-800 p-1 text-gray-300 text-xl'>Draw</h1>
                <div className=" text-center text-xl">
                    Tuesday 07 May : Kaizer Chiefs 2 : TS Galaxy 2  
                </div>
                <div className=" text-center text-l">
                    Ranga Chivaviro 50'; 18' : Sphiwe Mahlangu 76'; 32' (P)        
                </div>
                <h1 className='bg-gray-800 p-1 text-gray-300 text-xl'>Loss</h1>
                <div className=" text-center text-xl">
                    Thursday 02 May : Kaizer Chiefs 1 : Mamelodi Sundowns 5   
                </div>
                <div className=" text-center text-l">
                     Mduduzi Shabalala 85' (P) : Thembinkosi Lorch 94', Lucas Ribeiro Costa 90',Tashreeq Matthews 82'; 52',  Matías Esquivel 56'        
                </div>
                <h1 className='bg-gray-800 p-1 text-gray-300 text-xl'>Win</h1>
                <div className="text-center text-xl">
                    Saturday 27 April : Kaizer Chiefs 2 : Supersport United 1   
                </div>
                <div className=" text-center text-l">
                    Mduduzi Shabalala 76',Christian Basomboli 19' : Sphiwe Mahlangu 76'; 32' (P)        
                </div>
                <h1 className='bg-gray-800 p-1 text-gray-300 text-xl'>Loss</h1>
                <div className=" text-center text-xl">
                    Sunday 21 April : Kaizer Chiefs 0 : Richards Bay 1          
                </div>
                <div className=" text-center text-l">
                    Simphiwe Mcineka 64'
        
                </div>
                <h1 className='bg-gray-800 p-1 text-gray-300 text-xl'>Loss</h1>
                <div className=" text-center text-xl">
                    Saturday 06 April : Kaizer Chiefs 0 : Chippa United 2  
                </div>
                <div className=" text-center text-l">
                    Sinoxolo Kwayiba 32' Bienvenu Eva Nga 21'
       
                </div>
                <h1 className='bg-gray-800 p-1 text-gray-300 text-xl'>Loss</h1>
                <div className=" text-center text-xl">
                    Tuesday 02 April : Kaizer Chiefs 0 : Stellenbosch FC 1   
                </div>
                <div className=" text-center text-l">
                    Devon Titus 46'        
                </div>
                <h1 className='bg-gray-800 p-1 text-gray-300 text-xl'>Draw</h1>
                <div className="text-center text-xl">
                    Saturday 09 March : Kaizer Chiefs 2 : Orlando Pirates 3  
                </div>
                <div className=" text-center text-l">
                    Ashley Du Preez 44'; 6' : Monnapule Saleng 68'; 24' Thabiso Lebitso 58'
       
                </div>
            </div>
        </div>
                    </div>      
                ))}
            </div>   
    );
}