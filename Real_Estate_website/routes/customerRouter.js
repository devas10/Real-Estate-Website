const router = require("express").Router();

const Customer = require("../models/customerModel"); 

router.post("/customer", async (req, res) =>{
    try{

    let { uid, requirement, budget} = req.body;

    if( !uid || !requirement || !budget)
      return res.status(400).json({ msg: "Not all fields have been entered." });  
  
      const newCustomer = new Customer({
        uid,
        requirement,
        budget,
      });
      
      const savedCustomer = await newCustomer.save();
      res.json(savedCustomer);
    } catch(err) {
        res.status(500).json({ error: err.message });
      }
    });

    module.exports = router;
  