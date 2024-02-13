import { Student } from "./types/Student";

function StudentItem ({ name,age,grade }:Student ) {
    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{grade}</p>
        </div>
    );
};

export default StudentItem;
