
const router = require("express").Router();

const Broker = require("../models/brokerModel"); 

router.post("/broker", async (req, res) =>{
  try{
  let { uid, commission, company } = req.body;

  if( !uid || !commission || !company)
    return res.status(400).json({ msg: "Not all fields have been entered." });  

  const newBroker = new Broker({
        uid,
        commission,
        company,
      });
      
  const savedBroker = await newBroker.save();
      res.json(savedBroker);
    } catch(err) {
      res.status(500).json({ error: err.message });
    }
    });
    module.exports = router;
  