
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
        <div className="pt-3">  
                <span className="p-1">●</span>
                <span className="p-1">{title}</span>
                {content && !isOpen && <span onClick={openIt} className="text-yellow-100 cursor-pointer text-sm">(more)</span>} 
            <div className="pl-5 pr-20 pt-1">
                {content && isOpen && <span className="text-yellow-300">{content}</span>} 
                {content && isOpen && <span onClick={closeIt} className="text-yellow-100 cursor-pointer text-sm pr-1"> (less)</span>}
            </div>
        </div>
    )
}

export default MyToggle