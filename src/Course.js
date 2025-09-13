import React from "react";
import C from './images/C.png'
import Java from './images/Java.png'
import Python from './images/Python.png'
import JS from './images/Javascript.png'

    const courseMap = {
        "C": C,
        "Java": Java,
        "Python": Python,
        "Javascript": JS
    };

export default function Course({ courseName }) { //child component
    //imageların importu bu child componentta olacak
    console.log(C)
    console.log(courseName);
    console.log(courseMap[courseName]);


    return (
        <div>
            <img src={courseMap[courseName]} height={"300"} alt="C"></img>
        </div>
    );
}