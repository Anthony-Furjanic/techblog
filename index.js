const express= require("express")
const routes= require("./controllers")
const path= require("path")
const bcrypt= require("bcrypt")
const connectsessionsequelize= require("connect-session-sequelize")
const expresshandlebars= require("express-handlebars")
const dotenv= require("dotenv")
const expresssession= require("express-session")
const mysql2= require("mysql2")
const sequelize= require("sequelize")
const exphbs= require("express-handlebars")
const helpers= require("./utils/helpers")
const hbs= exphbs.create({helpers})
const app= express()
const port=3000

app.use(express.static(path.join(__dirname,"public")))
app.engine("handlebars",hbs.engine)
app.set("view engine","handlebars")
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use(routes)


app.listen(port,()=>{
    console.log("listening on port 3000")
})
