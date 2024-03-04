import { useState } from 'react'
import { FaCheck } from "react-icons/fa";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function modals() {
    return (<>
        <div className="modal" role="dialog"><font></font>
            <div className="modal-box"><font></font>
                <h3 className="text-lg font-bold">Hello!</h3><font></font>
                <p className="py-4">This modal works with a hidden checkbox!</p><font></font>
            </div><font></font>
            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label><font></font>
        </div>
    </>);
}

export default modals;
