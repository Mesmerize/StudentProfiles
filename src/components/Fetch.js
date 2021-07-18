import React, {useState, useEffect} from 'react'
import axios from 'axios';

import StudentDetail from './StudentDetail';

// The API Endpoint
const url = 'https://api.hatchways.io/assessment/students';

const Fetch = () => {

    // At the beginning, students is an empty array
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState('');

    // Defining function that fetches data from API
    const fetchData = async() => {
        const {data} = await axios.get(url);
        setStudents(data.students);
    };

    // Function that gets students grades and averages them out
    const getAverage = (grades) => {
        var sum = 0;
        for(var i = 0; i < grades.length; i++ ){
            sum += parseInt( grades[i], 10 ); 
        }
        var avg = sum/grades.length;
        return avg;
    }


    // Used to filter out students by first and last name
    const filteredStudents = students.filter( student => {
        return `${student.firstName} ${student.lastName}`.toLowerCase().includes(search.toLowerCase());
    })
    

    // Trigger the fetchData after the initial render by using the useEffect hook
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {students.length > 0 ? (
                <div className="content">
                    <div className='input-container'>
                        <input
                         className='input' type="text" placeholder='Search By Name' 
                         onChange={e => setSearch(e.target.value)}
                         />
                        {filteredStudents.map((student, i) => (
                            <StudentDetail
                             key={i} {...student} average={getAverage(student.grades)}
                             />
                        ))}
                    </div>
                </div>
            ) : (
                <p>loading....</p>
            )}
        </div>
    )
}

export default Fetch
