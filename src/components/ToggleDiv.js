import { element } from 'prop-types';
import React, { useState } from 'react'
import ToggleElement from '../components/ToggleElement'

const ToggleDiv = ({elements}) => {
  
  const [whichOpen, setWhichOpen] = useState(-1);
  
  const clickHandler = (which) => {
      if (which === whichOpen){
        setWhichOpen(-1);
      }
      else{
        setWhichOpen(which);
      }
  }

  return (
    <div className="pt-3">


        {
        
        elements.map(element => (
          <ToggleElement key={element.key} id={element.key} title={element.title} content={element.content} isOpen={element.key===whichOpen} clickHandler={clickHandler}/>
        ))
        
        
        }
            
        
    </div>
  )
}

export default ToggleDiv