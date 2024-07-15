const express=require('express');
const { business } =require('./type.js');
const {businessData}=require('./db.js');
const bodyparser=require('body-parser')
const app=express();
app.use(bodyparser.json());
app.post("/mycard",(req,res)=>{
    const bodyMaterial=req.body;
    const parsedMaterial=business.safeParse(bodyMaterial);
    if (!parsedMaterial.success) {
        return res.json({msg:"wrong input type you idiot"})
    }
    new businessData({name:bodyMaterial.name,
        experience:bodyMaterial.experience,
        interests:bodyMaterial.interests
    }).save()
    
    
    
})
app.listen(3000);