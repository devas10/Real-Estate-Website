const router = require("express").Router();

const Post = require("../models/postModel"); 

router.post("/postListing", async (req, res) => {
    try {
         let { pid, pname, paddress, pzip, pcost, pspace, pdescription, ptype, pavailability} = req.body;

         if(pavailability!=="YES")
           return res.status(400).json({ msg: "Please post only available listings." });

         if(!pname || !paddress || !pzip || !pcost || !pspace || !ptype || !pid )
           return res.status(400).json({ msg: "Not all fields have been entered." });  
        
         if(!pdescription)
           return res.status(400).json({ msg: "Please enter a short description of the property you are about to enter." });

        
        const newPost = new Post({
            pid,
            pname, 
            paddress, 
            pzip, 
            pcost, 
            pspace, 
            pdescription, 
            ptype, 
            pavailability,
        });   
        
        const savedPost = await newPost.save();
        res.json(savedPost);

    } catch(err) {
        res.status(500).json({ error: err.message });
      }
    });

    router.get("/getposts", async (req, res) =>{
        Post.find()
          .then (posts => res.json(posts))
          .catch(err => res.status(400).json('Error: ' + err));
    });

    router.get("/poster", async (req, res) => {

     res.json({msg:"successful connection really."});
    });

module.exports = router;