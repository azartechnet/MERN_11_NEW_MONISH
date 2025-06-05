
import React,{useEffect,useState} from 'react';
import Axios from 'axios';
function CrudPage()
{
    const [foodName,setFoodName]=useState("");
    const [description,setDescription]=useState("");
    const [foodList,setFoodList]=useState([]);
   

    useEffect(()=>{
        fetchData();
    },[]);

    //insert
    const addFoodData=()=>{
        Axios.post('http://localhost:3001/insert',{foodName,description})
        .then((response)=>
            {
                console.log(response.data);
                })
                .catch((err)=>
                    {
                        console.log(err);
                        }
                        );
    }

    //getData
    const fetchData=()=>
    {
        Axios.get('http://localhost:3001/read').then((response)=>{
            console.log(response.data);
            setFoodList(response.data);
        })
    }

    return(
        
        <div className="container">
        <h1>This is CrudPage</h1>
          <div className="mb-3">
              <input type="text" className="form-control" placeholder="FoodName" required
              onChange={(e)=>setFoodName(e.target.value)}
              />
          </div>
          <div className="mb-3">
               <input type="text" className="form-control" placeholder="FoodDescription" required
               onChange={(e)=>setDescription(e.target.value)}
              />
          </div>
          <div className="mb-3">
              <button className="btn btn-primary" onClick={addFoodData}>AddFood</button>
          </div>
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
                <tr>
                    <th>FoodName</th>
                    <th>FoodDescription</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
          
          <tbody>
             {foodList.map((val,key)=>(
                <tr key={key}>
                    <td>{val.foodName}</td>
                    <td>{val.description}</td>

                    <td>
                       
                        <button className="btn btn-primary">Edit</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                </tr>
             ))}
          </tbody>
          </table>
        </div>
    )
}
export default CrudPage;