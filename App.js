import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement =>ReactElement-JS(Object) => HTMLElement(render)
//React Element

//const heading = React.createElement(
     //   "h1", 
       // {id:"heading"},
       // "Namaste React 🤖"
//);
//console.log(heading);
//JSX(transpiled before it reaches the JS)-Parcel-Babel
//JSX React-HTML-like or XML-like Syntax
//with PARCEL Bable(jS package compiler tranpiller or compiler)

//JSX => React.createElement => ReactElement - JS Object => HTMLElement(render)

//React Component
//Class Based Component -OLD
//Functional Component - NEW
//React ELement
const jsxHeading = ( <h1 className="head" tabIndex="5"> Namaste React using JSX🚀</h1>);
console.log(jsxHeading);


const Title = () =>(
        <h1 className="head" tabIndex="5">
                Namaste React using JSX
        </h1>
)
const number = 1000;
//React Component
//Component Composition
const HeadingComponent = () => (
        <div id="container">
                {Title()}
                <Title/>
                <Title></Title>

                {number}
                <h1 className="heading">Namaste React Functional Component</h1>
        </div>

);

//<HeadingComponent/>


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);


//root.render(jsxHeading);

//root.render(heading);
//const HeadingComponent = ()=>{
  //      return<h1 className="heading">Namaste React Functional Component</h1>

//}
