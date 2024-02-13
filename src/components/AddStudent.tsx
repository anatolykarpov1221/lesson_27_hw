import React, { ChangeEvent, FormEventHandler, useState } from 'react';

 function AddStudent() {
    const [studentData, setStudentData] = useState({
        name: '',
        age: '',
        grade: ''
    });

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setStudentData({
            ...studentData,
            [name]: value
        });
    };

    const submitHandler:FormEventHandler=(event:React.FormEvent):void=>{
        event.preventDefault();
        console.log(studentData);
        
    };

    return (
        <div>
            <h3>Добавить студента</h3>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="name"
                    value={studentData.name}
                    placeholder="Имя студента"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="age"
                    value={studentData.age}
                    placeholder="Возраст студента"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="grade"
                    value={studentData.grade}
                    placeholder="Оценка студента"
                    onChange={handleChange}
                />
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default AddStudent;
