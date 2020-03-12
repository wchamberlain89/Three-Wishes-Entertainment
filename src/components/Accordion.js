import React, { useState, useRef, useEffect } from 'react'
import AccordionContainer from './styles/AccordionStyles';
import caret from '../img/Caret.svg';

const Accordion = props => {
  const [active, setActive] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, active])

  const toogleActive = () => {
    setActive(!active)
  }

  return (
    <AccordionContainer>
      <button className="accordion__header" onClick={toogleActive}>
        <img src={caret} className={`accordion__icon ${active ? "rotate" : ""}`}/>
        <p>{props.title}</p>
      </button>

      <div
        ref={contentRef}
        className="accordion__content"
      >
        {props.children}
      </div>
    </AccordionContainer>
  )
}

export default Accordion