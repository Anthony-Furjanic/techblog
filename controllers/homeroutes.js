const router= require("express").Router()
router.get("/",(request,response)=>{
    console.log("testing")
    response.render("homepage")
})

module.exports=router