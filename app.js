/*
<div id= "parent">
<div id= "child">
 <h1> I'm h1 tag </h1>
 <h1> I'm h2 tag </h1>

</div>
<div id= "child2">
 <h1> I'm h1 tag </h1>
 <h1> I'm h2 tag </h1>

</div>

</div>




*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello I am H1 tag"),
    React.createElement("h2", {}, "Hello I am H2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello I am H1 tag"),
    React.createElement("h2", {}, "Hello I am H2 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
