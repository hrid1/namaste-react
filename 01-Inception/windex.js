const parent = React.createElement("h1", {id: "parent"}, "hi bro")

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

const parent2 = React.createElement("div", {id: "parent"}, 
   [
    React.createElement("div", {id: "child1"}, [
        React.createElement("h2", {}, " Motorala"),
        React.createElement("h2", {}, "Lenevo"),
    ]
       
    ),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h2", {}, " Apple"),
        React.createElement("h2", {}, "Samsung"),
    ]
       
    )
   ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent2);
