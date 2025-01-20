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

const x=9;
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
                r4.render(<MyElem2/>);