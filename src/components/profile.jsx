import { useState } from 'react'
import { FaCheck } from "react-icons/fa";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function profile() {
    return (<>
        <div className="avatar placeholder items-center">
            <div className="bg-neutral text-neutral-content rounded-full w-16">
                <span className="text-2xl">DN</span>
            </div>
            <span className='text-xl font-bold m-4'>Davin Neilson</span>
        </div>
    </>);
}

export default profile;