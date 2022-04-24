
import React, { useState } from 'react'

const MyToggle = ({title, content}) => {

    const [isOpen, setIsOpen] = useState(false);

    const openIt = (e) => {
        setIsOpen(true);
    }

    const closeIt = (e) => {
        setIsOpen(false);
    }

    return (
        <div className="py-1">  
                <span className="p-1">●</span>
                <span className="p-1">{title}</span>
                {!isOpen && content &&  <span className="text-yellow-300 cursor-pointer" onClick={openIt}>[...]</span> }
                {isOpen && <span onClick={closeIt} className="text-yellow-300 cursor-pointer">[{content}] </span>}             
            {/* <p></p>     */}
        </div>
    )
}

export default MyToggle