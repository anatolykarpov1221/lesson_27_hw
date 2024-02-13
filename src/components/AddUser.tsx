import React, { ChangeEvent, FormEventHandler, useState } from 'react'
export default function AddUser() {

type UserData = {
    firstName:string,
    lastName:string,
    age:string
};

const [formData,setFormData]= useState<UserData>({firstName:"",lastName:"",age:""});

const changeHandler = (event:ChangeEvent<HTMLInputElement>)=>{
    const {value,name}= event.target;
    //console.log(`value: ${value} name: ${name}`);
    const newData:UserData= {...formData,[name]:value};
    setFormData(newData);
}
const submitHandler:FormEventHandler=(event:React.FormEvent):void=>{
    event.preventDefault();
    // const submitHandler = (event:React.FormEvent):void => {
    //     event.preventDefault();
    //   }
}

   return (
    <div>
        <p>Форма для User</p>
        <form onSubmit={submitHandler} >
            <input value={formData.firstName} type="text" name="firstname" placeholder="firsName" onChange={changeHandler}/>
            <input value={formData.lastName} type="text" name="lastName" placeholder="lastName" onChange={changeHandler}/>
            <input value={formData.age} type="text" name="age" placeholder="age" onChange={changeHandler}/>
            <button>добавить</button>
        </form>
    </div>
  )
}