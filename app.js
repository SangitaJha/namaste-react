/**
 * <div id="parent">
 *      <div id="child">
 *        <h1>I am h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *       </div>
 * <div id="child">
 *        <h1>I am h1 tag</h1>
 *         <h2>I'm h1 tag</h2>
 *       </div>
 *</div>
 * 
 *
 * ReactElement(Object)=>HTML(Browser Understands)
 */

const parent = React.createElement("div", {id: "parent"}, 
    React.createElement(
        "div", 
        {id: "child"}, [
        React.createElement("h1",{},"I'm an h1 tag"),
            
        React.createElement("h2",{},"I'm an h2 tag")
]),
React.createElement(
        "div", 
        {id: "child"}, [
        React.createElement("h1",{},"I'm an h1 tag"),
            
        React.createElement("h2",{},"I'm an h2 tag")
]),

);

//JSX




console.log(parent);
const heading = React.createElement("h1",
     {id: "heading", xyz: "abc"}, "Hello WOrld from React!");
     console.log(parent);//object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);