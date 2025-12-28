const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');


router.post('/contact', async(req,res)=>{
    try{
        const {name, email, phone, message} = req.body;

        
        const Data = new Contact({
            name:name,
            email:email,
            phone:phone,
            message:message
        })
        await Data.save();
        res.status(201).json({
        success: true,
        message: "Contact saved successfully"
});

    }
    catch(err){
       console.log(err);
    res.status(500).json({
        success:false,
        message:"Server error"
    })
    }
    
})


module.exports = router