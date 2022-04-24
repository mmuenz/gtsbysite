
import React from 'react'

const ToggleElement = ({id, title, content, isOpen, clickHandler}) => {

    return (
        <div className="pt-3">  
                <span className="p-1">●</span>
                <span className="p-1">{title}</span>
                {content && !isOpen && <span onClick={() => clickHandler(id)} className="text-yellow-100 cursor-pointer text-sm">(more)</span>} 
            <div className="pl-5 pr-20 pt-1">
                {content && isOpen && <span className="text-yellow-300">{content}</span>} 
                {content && isOpen && <span onClick={() => clickHandler(id)} className="text-yellow-100 cursor-pointer text-sm pr-1"> (less)</span>}
            </div>
        </div>
    )
}

export default ToggleElement