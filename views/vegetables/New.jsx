const React = require("react");

class New extends React.Component {
  render() {
    return (
    <body>
      <div>
        <h1> Add New vegetables </h1>

        <form action='/vegetables' method='POST'>
          Name: <input type="text" name="name" />
          <br />
          Color: <input type="text" name="color" />
          <br />
          Ready to eat: <input type="checkbox" name="readyToEat" />
          <br />
          <input type="submit" value="Create new vegetable" />
        </form>
      </div>
    </body>
    );
  }
}

// const styles = {
//   body: {
//   backgroundColor: randColor,
//   border: "solid, 1px"
// }}

// const ColorArray = [
//   "#bf382c", //red
//   "#e7eca3", //yellow
//   "#ec6831", //orange
//   "#a4c5ea", //cyan
//   "#008080", // blue
//   "#857463", // gray
//   "#86b49c", //teal
//   "#9de19a", //green
//   "#bca9e1", //purple
//   "#98a7f2", //violet
// ];

// let randColor = ColorArray[Math.floor(Math.random() * ColorArray.length)];

module.exports = New
