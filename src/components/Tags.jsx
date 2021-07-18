import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Tags = (props) => {
    // Setting Tag State
    const [tags, setTags] = useState([]);

    // Function responsible for adding tags to students
    const addTags = e => {
        if(e.key === 'Enter' && e.target.value !== '') {
            setTags([...tags, e.target.value]);
            props.selectedTags([...tags, e.target.value]);
            e.target.value = '';
        }
    }

    // Function responsible for removing tags from users
    const removeTags = i => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== i)]);
    }

    return (
        <div className='tags'>
            <ul>
            <div className="item-container">
                {tags.map((tag,index) => (
                        <div key={index} className="list-item">
                            <li>
                                <span>{tag}</span>
                                <i className="remove" onClick={() => removeTags(index)}>
                                    <FontAwesomeIcon icon={faTimes} size='1x' />
                                </i>
                            </li>
                        </div>
                ))}
            </div>
            </ul>
            <input
                className='input-tag'
                type="text"
                onKeyUp={event => addTags(event)}
                placeholder="Press enter to add tags"
            />
        </div>
    )
}

export default Tags
