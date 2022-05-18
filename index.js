let express = require("express")
let path = require("path")
let hbs = require('hbs')

let app = express()

var templatepath = path.join(__dirname, "./Template/views")
var partialpath = path.join(__dirname, "./Template/partials")
hbs.registerPartials(partialpath)
let cssstaticpath = path.join(__dirname, "./public")
let imge=path.join(__dirname,"./Images");

app.use(express.static(cssstaticpath))
app.use(express.static(imge))
app.set('view engine','hbs')
app.set('views', templatepath)


app.get("/",(req,res)=>{
    res.render('travels')
})

app.get("/Flights",(req,res)=>{
    res.render('Flights')
})

app.get("/passengerinfo",(req,res)=>{
    res.render('passengerinfo')
})
app.get("/payment",(req,res)=>{
    res.render('payment')
})
app.get("/sign-in",(req,res)=>{
    res.render('sign-in')
})
app.get("/hotels",(req,res)=>{
    res.render('hotels')
})

app.listen("3000", ()=>{
    console.log(__dirname)
    console.log(__filename)
    console.log("server is listening to port 3000")})
