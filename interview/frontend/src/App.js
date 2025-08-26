import React,{useEffect,useState} from "react";
import axios from 'axios';

function App()
{
   const [books, setBooks] = useState([]);
  const [form,setForm]=useState({title:"",author:""})
 


  
  // Fetch books when page loads
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await axios.get("http://localhost:5000/books");
    setBooks(res.data);
  };


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
      {/* Show Data in Table */}
      <h3>Books List</h3>
      <table border="1" cellPadding="5" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}
export default App;