import React from 'react';
import Card from './Card';
function Cards(props) {
  let courses = props.courses;
  function getcourses(){
    let allcourses=[];
    Object.values(courses).forEach(array=>{
      array.forEach(coursedata=>{
        allcourses.push(coursedata);
      })
    }
    )
    return allcourses;
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getcourses().map((course)=>{
          return <Card course={course}/>
        })
      }
    </div>
  )
}

export default Cards;