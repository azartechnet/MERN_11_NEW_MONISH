import React from "react";
import ReactDOM from "react-dom/client";
//basic rendering
/*const App=()=>{
    return( 
        <div>
            <h1>This is First Program</h1>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);*/

//Function Rendering

/*function Sample()
{
    return(
        <>
         <h1>Heading-1</h1>
         <h2>Heading-2</h2>
        </>
     
    )
}
const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Sample/>);*/

//Function Rendering using login form

/*function Login()
{
    return(
        <div>
            <h1>Login Form</h1>
            <label>UserName</label>
            <input type="text"/>
            <br/>
            <label>Password</label>
            <input type="password"/>
            <br/>
            <input type="submit"/>
        </div>
    )
}
const r2 = ReactDOM.createRoot(document.getElementById('root'));
r2.render(<Login/>);*/

//Dynamic Rendering

/*const App=()=>{
    const username="sdlc";
    return(
        <div>
            <h1>Dynamic Rendering</h1>
            <h2>Username: {username}</h2>
            <p>Today's date::{new Date().toLocaleDateString()}</p>
        </div>
    )
}
const r3 = ReactDOM.createRoot(document.getElementById('root'));
r3.render(<App/>);*/

//React without JSX

/*const myelem1=React.createElement('h1',null,'welcome')
const myelem2=React.createElement('h2',null,'welcome to react')
const myelem3=React.createElement('p',null,'welcome to react')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement("div", null, myelem1, myelem2, myelem3));*/

//Task unorderlist and orderlist

/*const MyElem1=()=>{
    return(
        <div>
            <h1 style={{color:'red'}}>Welcome</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li> 
            </ol>
        </div>
    )
}
const r4 = ReactDOM.createRoot(document.getElementById('root'));
r4.render(<MyElem1/>);*/

//Conditional Rendering

/*const x=9;
let text="";
if(x>10){
    text="Greater than 10"
    }else{
        text="Less than 10"
        }
        const MyElem2=()=>{
            return(
                <div>
                    <h1 style={{color:'red'}}>Welcome</h1>
                    <p>{text}</p>
                </div>
                )
                }
                const r4 = ReactDOM.createRoot(document.getElementById('root'));
                r4.render(<MyElem2/>);*/

//importing css

/*import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const App=()=>{
    return(
        <div>
            <h1>Welcome</h1>
            <h1 className="f1">Hello</h1>
            <p id='f2'>Demo</p>
            <div class="container">
  <h2>Button Styles</h2>
  <button type="button" class="btn">Basic</button>
  <button type="button" class="btn btn-default">Default</button>
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-link">Link</button>      
</div>

        </div>
    )
}
const r4 = ReactDOM.createRoot(document.getElementById('root'));
r4.render(<App/>);*/

//Function Component

/*function Sample()
{
    return(
        <div>
            <h1>Sample</h1>
            <p>Sample</p>
            <div>
               <h1>Inside div</h1>
            </div>
        </div>
    
        
    )
}
const r4 = ReactDOM.createRoot(document.getElementById('root'));
r4.render(<Sample/>);*/

//class Component

/*class Sample extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>Sample</h1>
            </div>
        )
    }
}
const r4 = ReactDOM.createRoot(document.getElementById('root'));
r4.render(<Sample/>);*/

//Function Component Argum...

/*function Sample(props)
{
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.age}</p>

        </div>
    )
}
const r4 = ReactDOM.createRoot(document.getElementById('root'));
r4.render(<Sample name="Rahul" age="25"/>);*/

//component in component

/*function Component1()
{
    return(
        <div>
            <h1>Component 1</h1>
        </div>
    )
}
function Component2()
{
    return(
        <div>
            <h1>Component 2</h1>
            <Component1/>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component2/>)*/

//constructor using super

/*class Sample extends React.Component
{
    constructor()
    {
        super();
        this.state={name:"mohamed",age:36}
    }
    render()
    {
        return(
            <>
              <h1>UserName:{this.state.name}</h1>
              <h1>Age:{this.state.age}</h1>
            </>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//constructor using props

/*class Sample extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={name:this.props.name,age:this.props.age}
    }
    render()
    {
        return(
            <>
             <h1>UserName:{this.state.name}</h1>
             <h1>Age:{this.state.age}</h1>

            </>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="mohamed" age="36"/>)*/

//React state
//State in ReactJS refers to an object that stores a component’s 
//dynamic data and determines how the component behaves.

/*class Sample extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            brand:"Ford",
            model:"Mustang",
            year:2020,
            color:"Red"
        }
    }
    render()
    {
        return(
            <>
               <h1>Brand:{this.state.brand}</h1>
               <h1>Model:{this.state.model}</h1>
               <h1>Year:{this.state.year}</h1>
               <h1>Color:{this.state.color}</h1>
            </>
            )
    }

}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Changing the state object

/*class Sample extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            brand:"Ford",
            model:"Mustang",
            year:2020
            }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick()
    {
        this.setState({
            brand:"Toyota",
            model:"Camry",
            year:2019
            })
    
            }
            render()
            {
                return(
                    <div>
                        <h1>Brand: {this.state.brand}</h1>
                        <h2>Model: {this.state.model}</h2>
                        <h3>Year: {this.state.year}</h3>
                        <button onClick={this.handleClick}>Change</button>
                    </div>
                    )
                    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React Events

/*function Football()
{
    const shoot=()=>{
        alert("Goal Shooted")
    }
    return(
        <div>
            <button onClick={shoot}>Shoot</button>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

/*function Football()
{
    const shoot=(a)=>{
        alert("Goal Shooted"+a)
        }
        return(
            <div>
                <button onClick={()=>shoot("By Messi")}>Shoot</button>
            </div>
        )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//Conditional Rendering

/*function MissedGoal()
{
    return<h1>MISSED</h1>
}
function MadeGoal(props)
{
   return<h1>Goal</h1>
}
function Goal(props)
{
    const isGoal=props.isGoal;
    if(isGoal)
    {
        return<MadeGoal/>
    }
    else
    {
        return<MissedGoal/>
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Goal isGoal={Math.random()>0.5}/>)*/

//React List using Map

/*function Car(props)
{
    return<li>I am {props.b1}</li>
}
function Garage()
{
    const cars=["BMW","Audi","Mercedes","Toyota","Honda"];
    return(
        <div>
            <h1>Garage</h1>
            <ul>
                {cars.map((car)=><Car b1={car}/>)}
            </ul>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//React List using Key
/*function Car(props)
{
    return<li>I am {props.b1} as {props.k}</li>
}
function Garage()
{
    const cars=[
        {id:1,b1:"BMW"},
        {id:2,b1:"Audi"},
        {id:3,b1:"Mercedes"},
    ];
    return(
        <div>
            <h1>Garage</h1>
            <ul>
                {cars.map((car)=><Car k={car.id} b1={car.b1}/>)}
            </ul>
            </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//React getDerivedStateFromProps

/*class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={count:0};
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("getDerivedStateFromProps");
    }
    render()
    {
        return(
            <div>
                <h1>Header</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
                </div>
                );
        
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/

//ComponentDidMount

/*class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={favcolor:"red"}
    }
    componentDidMount()
    {
        console.log("componentDidMount");
        setTimeout(()=>{
            this.setState({favcolor:"blue"})
        },3000)
    }
    render()
    {
        return(
            <div>
                <h1>Header</h1>
                <p>My favourite color is {this.state.favcolor}</p>

            </div>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/

//Updating getDerivedStateFromProps

/*class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={favcolor:"red"};
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("getDerivedStateFromProps");
    }
    changeColor=()=>{
        this.setState({favcolor:"blue"})
    }
    render()
    {
        return(
            <div>
               <h1>Header</h1>
               <p>My favourite color is {this.state.favcolor}</p>
               <button onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/

//shouldcompnentUpdate

/*class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={favcolor:"red"};
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log("shouldComponentUpdate");

        return true;
    }
    changeColor=()=>{
        this.setState({favcolor:"blue"})
        }
        render()
        {
            return(

                <div>
                    <h1>Header</h1>
                    <p>My favourite color is {this.state.favcolor}</p>
                    <button onClick={this.changeColor}>Change Color</button>
                    </div>
                    )
                    }
}
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<Header/>)*/

 //React Hooks

 import { useState,useEffect } from "react";

 /*function Counter()
 {
     const [count,setCount]=useState(0);
     const [name,setName]=useState("mohamed");
     return(
        <div>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <p>My name is {name}</p>
            <button onClick={()=>setName("Ahmed")}>Change Name</button>
        </div>
     )
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<Counter/>)*/

 //React useEffect

 /*function ClickCounter()
 {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Clicked ${count} times`;
        });
        return (
            <div>
             <p>Count: {count}</p>
              <button onClick={() => setCount(count + 1)}>Increment</button>
              <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        )
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<ClickCounter/>)*/

 //React useRef

 /*import {useRef}from 'react'

 function FocusInput()
 {
     const inputRef=useRef(null);
     const handleClick=()=>{
        inputRef.current.focus();
     }
     return(
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Focus</button>
        </div>
     )
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<FocusInput/>);*/

 //React using without useContext

 /*function Component1()
 {
    const [user,setUser]=useState("mohamed")
    return(
        <div>
            <p>Username: {user}</p>
            <button onClick={()=>setUser("mohamed ali")}>Change</button>
            <Component2 user={user}/>
        </div>
    )
 }
 function Component2(props)
 {
    return(
        <div>
            <p>Username: {props.user}</p>
        </div>
    )
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<Component1/>);*/

 //React using with useContext

 /*import { useContext,createContext } from "react";

 const UserContext=createContext();

 function Component1()
 {
    const [user,setUser]=useState("mohamed");
    return(
        <UserContext.Provider value={user}>
            <div>
                <p>Username: {user}</p>
                <Component2/>
            </div>
        </UserContext.Provider>
        
    )
 }
 function Component2()
 {
    const user = useContext(UserContext);
    return(
        <div>
            <p>Username: {user}</p>
        </div>
    )
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<Component1/>);*/

 //Another Example useState

 /*function UserProfile()
 {
    const [user,setUser]=useState({name:"mohamed",age:36,email:"mohamed@gmail.com"})

    const updateEmail=()=>{
        setUser({...user,email:"mohamed123@gmail.com"})
    }
    return(
        <div>
            <p>Username: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <button onClick={updateEmail}>Update Email</button>
            </div>
            )
            }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<UserProfile/>);*/

  //useState with Array

  /*function TodoList()
  {
    const [todos,setTodos]=useState(["BuyMilk","BuyEggs","BuyBread"]);
    const addTodo=()=>{
        setTodos([...todos,"BuyButter"])
    }
    return(
        <div>
            <ul>
                {todos.map((todo,index)=>(
                    <li>{index}{todo}</li>
                    ))}
                    </ul>
                    <button onClick={addTodo}>Add Todo</button>
        </div>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<TodoList/>);*/

  //React REST API post using of useState and useEffects

  /*function App()
  {
    const [user,setUser]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>setUser(data))
    })
    return(
        <div>
            <h1>Users</h1>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>WebSite</th>
                    <th>Action</th>
               </thead>
                <tbody>
                    {user.map((user,index)=>(
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td>Edit Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
  }
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<App/>);*/

 //Using UserId

 /*function App(){
    const [user,setUser]=useState([]);
    const [id,setId]=useState(1);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>response.json())
        .then(data=>setUser(data))
    })
    return(
        <div>
            <h1>Users</h1>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <h2>{user.website}</h2>
            <button onClick={()=>setId(id+1)}>NextUser</button>
        </div>
    )
 }
 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<App/>);
*/

//Fetch weather data from API and display it on the screen


/*function App() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=11.2213&longitude=78.1652&hourly=temperature_2m")
            .then(response => response.json())
            .then(data => setWeather(data.hourly.temperature_2m))
            .catch(error => console.error("Error fetching weather data:", error));
    }, []);

    return (
        <div>
            <h1>Weather</h1>
            {weather ? (
                <>
                    <h2>Temperature: {weather[0]}°C</h2>
                    <h2>Temperature: {weather[1]}°C</h2>
                </>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
