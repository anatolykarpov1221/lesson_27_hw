import React from 'react'
import UserItem from './UserItem';
import { User } from './types/User';



export default function UserList() {

    const users:User[] =[
        {firstName: "Анатолий", lastName: "Ушанов", age: 31},
        {firstName: "Юрий", lastName: "Митрофанов", age: 45},
        {firstName: "Егор", lastName: "Богомолов", age: 30},
        {firstName: "Павел", lastName: "Гусев", age: 29}
    ];




  return (
    <div>{
        
        users.map((user)=> <UserItem  key={user.lastName} {...user}/>)
        }
        </div>
    
  )
}