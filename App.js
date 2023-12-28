const heading = React.createElement("h1", {id:"heading"}, "Hello world from react"); // it will return an object at the end its a javascript.
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // render API is convert heading object into the HTML tag and display
