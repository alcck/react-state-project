import { useState } from 'react';
import './App.css';
import Course from './Course';

export default function App() { //parent component

  function getRandomCourse() {
    const courseArray = ["C", "Java", "Python", "Javascript"];
    return courseArray[Math.floor(Math.random() * courseArray.length)];
  }

  const [courses, setCourses] = useState([]); //array 

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]); //spread operator
    console.log(courses);
  }

  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });

  return (
    <div className="App">
      <button onClick={handleClick}>Kurs Ekle</button>
      <div>
        {courseList}
      </div>
    </div>
  );
}
