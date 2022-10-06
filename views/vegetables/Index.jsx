const React = require("react");

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

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
    return (
      <body>
        
      <div>
        
        <h1>All Vegetables</h1>
        <a href='/vegetables/new'>Create New Fruit</a>

        <ul>
          {vegetables.map((vegetables, idx) => (
            <li>
              The <a href={`/vegetables/${idx}`}>{vegetables.name}</a> is{" "}
              {vegetables.color} <br />
              {vegetables.readyToEat
                ? `It is ready to eat`
                : `It is not ready to eat`}
              <br />
              <a href={`/vegetables/${idx}`}>
                <img src={vegetables.image} width= "300"/>
              </a>
            </li>
          ))}
        </ul>
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



module.exports = Index;
