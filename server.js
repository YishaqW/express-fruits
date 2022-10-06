// ==== Require modules ====
const express = require('express');
const morgan = require('morgan')
// const fruits = require('./models/fruits');
const vegetables = require('./models/vegetables');
require("dotenv").config()
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const Fruit = require('./models/fruitModel')

console.log(process.env.MONGO_URI);

// ==== Create the Express ==== app
const app = express();
const PORT = 3000

// ==== Mount Middleware ==== (app.use)
app.use(morgan('dev')) // Always in install!
// we need this to read the date from the post request
app.use(express.urlencoded({extended:false}))
// create your own middleware
app.use(methodOverride('_method'))
app.use((req, res, next) => {
  console.log('I run for all routes')
  next()
})

// ==== Configure the app ==== (app.set)
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// === Mount Routes ===

// Root Route: testing
app.get('/',(req, res) => {
  res.send('Welcome');
});

// ==== Index Route: get all the fruits ====
app.get('/fruits',(req, res) => {

  Fruit.find({}, (error, fruitsFromDB) => {
    if (error){
      console.log(error)
    }
    // console.log(fruitsFromDB)
    res.render('fruits/Index', {fruits: fruitsFromDB});
  })

});

app.delete('/fruits/:id', (req, res) => {
   const {id} =  req.params
   
   // delete the fruit from database
   Fruit.findByIdAndRemove(id, (error, data ) => {
    console.log('HERE', data)
    if (error){
      console.log(error)
      res.send(403).send('Bad request')
    }
    res.redirect('/fruits')
   })
})

app.get('/fruits/:id/edit', (req, res) => {
  const {id} = req.params
  // find the fruit in the db using the id
  Fruit.findById(id, (error, foundFruit) => {
    if (error){
      console.log(error);
      res.status(403).send('Id not found')
    }
    // render the view and pass the data from the fruit
    res.render('fruits/Edit', {fruit: foundFruit})

  })

})

app.put('/fruits/:id', (req, res) => {
  const { id } = req.params
  if (req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false
  }
  Fruit.findByIdAndUpdate(id, req.body, (error, updatedFruit) => {
    if (error) {
      console.log(error)
      res.status(403).send('cannot update')
    }
    res.redirect(`/fruits`)
  })
})



// CREATE
app.post('/fruits', (req, res) => {
  if (req.body.readyToEat === 'on'){
    req.body.readyToEat = true
  } else { 
    req.body.readyToEat - false
  }
  // fruits.push(req.body)  
  Fruit.create(req.body, (error, createdFruit) => { console.log(req.body)
    if (error) {
      console.log(error)
    }
    console.log(createdFruit)
    res.redirect("/fruits")
  })
})


app.get('/fruits/new', (req, res)=> {
  res.render('fruits/New')
})

app.get('/vegetables',(req, res) => {
  res.render('vegetables/Index', {vegetables: vegetables});
});

app.post('/vegetables', (req, res) => {
  const { readyToEat } = req.body 
  readyToEat === "on" ? readyToEat = true : false
  vegetables.push(req.body)
  res.redirect('/vegetables')
})

app.get('/vegetables/new', (req, res)=> {
  res.render('vegetables/New')
})

// ==== Show Route: sends back one single fruit ====
app.get('/fruits/:id', (req, res) => {
  const { id } = req.params

  Fruit.findById(id, (error, foundFruit) => {
    if (error) {
      console.log(error)
    }
    res.render('fruits/Show', {
      fruit: foundFruit,
      date: new Date().getFullYear()
      })
  })
})

app.get('/vegetables/:indexArray', (req, res) => {
  const {indexArray} = req.params
  res.render('vegetables/Show', {
    vegetable: vegetables[indexArray],
    date: new Date().getFullYear()
  })
})

// ==== Tell the app to listen on port 3000 ====
app.listen(PORT, function() {
  console.log('Listening on port 3000');

mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
})