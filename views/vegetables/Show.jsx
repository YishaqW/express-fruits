const React = require('react');


class Show extends React.Component{
  render(){
    
    const {vegetable, date} = this.props
    
   
    
    return(
      <div>
             <h1>Show Page!!!</h1>

             <h3>The {vegetable.name} is {vegetable.color}.</h3>

             <h4>{vegetable.readyToEat ? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this'}</h4>

             <h4>Year:{date} {sayHello()}</h4>
           </div>
        )
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
    
    module.exports = Show;