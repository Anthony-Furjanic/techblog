const router= require("express").Router()
const apiroutes= require("./apis")
const homeroutes= require("./homeroutes.js")

// router.use("/apis",apiroutes)
router.use("/",homeroutes)
router.use((req,res)=>{
    res.status(404).end()
})

module.exports=router


