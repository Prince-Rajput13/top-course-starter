import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import {useEffect } from "react";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";
const App = () => {
  const [courses,setcourses]=useState(null);
  const [loading, setloading] = useState(true);
  async function fetchData(){
    setloading(true);
    try {
      let res= await fetch(apiUrl);
      let output= await res.json();
      setcourses(output.data);
    } 
    catch (error) {
      return(
        toast.error("Network Problem")
      )
    }
    setloading(false);
  }
  useEffect(()=>{
    fetchData()
  },[])
  return(
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div >
        <Navbar/>
      </div>
      <div className="bgDark2">
        <Filter filterData ={filterData}/>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses}/>)
        }
      </div>
    </div>
  )
};

export default App;
