import React from 'react'
import Accordion from './Accordion'

const StudentDetail = ({firstName, lastName, email, skill, company, pic, grades, id, average}) => {

    return (
        <div className="student-container" key={id}>
            <div className="img-container">
                <img src={pic} alt="" />
            </div>
            <div className="student-info-container">
                <h1 className='name'>
                    <span>{firstName}</span> 
                    <span> {lastName}</span>
                </h1>
                <div className="spacer">
                    <p className='stats'>Email: {email}</p>
                    <p className='stats'>Company: {company}</p>
                    <p className='stats'>Skill: {skill}</p>
                    <p className='stats'>Average: {average}%</p>
                <Accordion grades={grades} key={id} />
                </div>
            </div>
    </div>
    )
}

export default StudentDetail
