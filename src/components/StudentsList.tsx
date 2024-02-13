import React from 'react';
import StudentItem from './StudentItem';

function StudentsList(){
const students = [
    { name: 'Иванов', age: 20, grade: 'A' },
    { name: 'Петров', age: 22, grade: 'B' },
    { name: 'Сидоров', age: 21, grade: 'C' }
];


    return (
        <div>
            {students.map((student) => (
                <StudentItem  key={student.name} {...student} />
            ))}
        </div>
    );
};

export default StudentsList;
