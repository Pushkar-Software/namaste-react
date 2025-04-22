const heading1 = React.createElement("h1", {
    id: "heading",
    xyz: "abc "
}, "Hello World From ReactJS!");
// Nested HTML Strcture 
/*
 * <div id="parent">
      <div id="child">
         <h1>This is a H1 Tag <h1>
         <h1>This is a H2 Tag </h2.
      </div>

      <div id="child2">
         <h1>This is a H1 Tag of Child 2 <h1>
         <h1>This is a H2 Tag of Child 2 </h2.
      </div>
    <div>   
    
    ReactElement(Object) => HTML(Browser understant )
*/ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "This is a h1 Tag of Child - 1"),
        React.createElement("h2", {}, "This is a h2 Tag of Child - 1")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "This is a h1 Tag of Child - 2"),
        React.createElement("h2", {}, "This is a h2 Tag of Child - 2")
    ])
]);
// JSX 
console.log(parent); // It's return a object
const root = ReactDOM.createRoot(document.getElementById("reactRoot"));
root.render(parent);

//# sourceMappingURL=Episode 01.7c0ccee6.js.map
