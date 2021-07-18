import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Tags from './Tags.jsx'

const Accordion = ({grades}) => {

    // Handle state of accordion (closed / opened)
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className='collapsible'>
                <button className='toggle' onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? <FontAwesomeIcon icon={faPlus} size='4x' />
                     : <FontAwesomeIcon icon={faMinus} size='4x' />
                     }
                </button>
            </div>
            <div className="test-scores">
            {isOpen && grades.map((grade,i) => {
                return <p className='stats' key={`${i}-stats`}>Test {i+1}: {grade}%</p>
            })}
            </div>
            <Tags />
        </div>
    )
}

export default Accordion
