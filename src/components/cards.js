import React from 'react';
import Card from './Card';
import { useState } from 'react';
function Cards(props) {
  const [likedCourses,setLikedCourses]=useState([]);
  let courses = props.courses;
  let category=props.category;
  function getcourses(){
    if(category==="All"){
      let allcourses=[];
      Object.values(courses).forEach(array=>{
          array.forEach(coursedata=>{
          allcourses.push(coursedata);
        })
      }
      )
      return allcourses; 
    }
    else{
      return courses[category]
    }
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getcourses().map((course)=>{
          return <Card course={course} 
          likedCourses={likedCourses} 
          setLikedCourses={setLikedCourses}/>
        })
      }
    </div>
  )
}

export default Cards;