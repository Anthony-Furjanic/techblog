const router= require ("express").Router
const apiroutes= require("./apis")
const homeroutes= requre("./homeroutes.js")

router.use("/api",apiroutes)
router.use("/",homeroutes)
router.use((req,res)=>{
    res.status(404).end()
})

module.exports=router


