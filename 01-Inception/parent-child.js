alert("hi")
{/* <div className="parent">
    <div className="child">
        <h1>Hi I'm h1 tag</h1>
    </div>
</div> */}


// const parent = React.createElement("h2", { id:"parent" }, "This is From React Parent")

const parent = React.createElement("div", { id: "parent" }, 
    React.createElement("div", {id: "child"},
        React.createElement("h2",{id: "heading"}, "hi I'm h1 from Child")
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// console.log(parent);

root.render(parent);