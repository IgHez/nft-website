import React from 'react';
import {useAddress, useDisconnect, useMetamask} from '@thirdweb-dev/react';

function NFTdropPage() {
    //auth
    const connectWithMetamask = useMetamask();
    const address =  useAddress();
    const disconnect = useDisconnect();

    console.log(address)

    return (
        <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
            <div className="sm:hidden justify-self-center">
                menu
            </div>
            {/* left */}
            <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
                <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
                    <div className='bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl'>
                        <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72' src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg" alt="nft image" />
                    </div>
                    <div className='space-y-2 p-5 text-center'>
                        <h1 className='text-4xl font-bold'>Ig Apes</h1>
                        <h2 className='text-lg text-gray-300'>A collection of ape breathers</h2>
                    </div>
                </div>
            </div>

            {/* right */}
            <div className="flex flex-1 flex-col p-12 lg:col-span-6">
                {/* header */}
                <header className='flex justify-between'>
                    <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-60'><span className='font-extrabold underline decoration-pink-600 '>Ig</span> NFT market place</h1>
                    <button onClick={() => address ? disconnect() : connectWithMetamask()} className='rounded-full bg-rose-600 px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'>
                        { address ? 'sign out' : 'sign in'}
                    </button>
                    
                </header>
                <hr className="my-2 border" />
                    {address && (
                        <p className='text-center text-sm text-rose-500'>you're logged in with wallet {address.substring(0, 5)}...{address.substring(address.length - 5)}</p>
                    )}
                {/* content */}
                <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
                    <img className='w-80 object-cover pb-10 lg:h-40' src="https://www.tbstat.com/wp/uploads/2022/12/daylight-662x675.png" alt="" />
                    <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The Ig Ape coding club | NFT</h1>
                    <p className="pt-2 text-xl text-green-500">13 / 14 NFT's claimed</p>
                </div>
                {/* button */}

                <button className='mt-10 h-16 bg-red-600 w-full rounded-full font-bold hover:opacity-90 transition-all ease-in'>Mint NFT (0.01 ETH)</button>
            </div>
        </div>
    )
}

export default NFTdropPage