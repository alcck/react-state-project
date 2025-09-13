import React from "react";
import C from './images/C.png'
import Java from './images/Java.png'
import Python from './images/Python.png'
import Javascript from './images/Javascript.png'
import './Course.css';

    const courseMap = {
        C,
        Java,
        Python,
        Javascript
    };

export default function Course({ courseName }) { //child component
    //imageların importu bu child componentta olacak
    console.log(C)
    console.log(courseName);
    console.log(courseMap[courseName]);


    return (
        <div>
            <img className="course" src={courseMap[courseName]} alt="C"></img>
        </div>
    );
}