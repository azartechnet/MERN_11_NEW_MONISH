import React,{useEffect,useState} from "react";
import axios from 'axios';

function App()
{
  
  const [form,setForm]=useState({title:"",author:""})
 
  //Load books


 const handleChange=(e)=>{
  setForm({...form,[e.target.name]:e.target.value})
 }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:5000/books",form);
   alert("Books added")
   setForm({title:"",author:""})
  }

  return(
    <div>
      <h2>Book CRUD APP</h2>
      <form onSubmit={handleSubmit}>
          <input name="title" placeholder="title" value={form.title} onChange={handleChange} required/>
           <input name="author" placeholder="author" value={form.author} onChange={handleChange} required/>
          <button type="submit">Book</button>
      </form>
    </div>
  )

}
export default App;