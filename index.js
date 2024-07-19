const express=require("express");
const app=express();

const users=[{
        name:'chai',
        kidneys:[{
            healthy:false
     }]
    }]
    
app.use(express.json());


app.get('/',function(req,res){
    const chaikidneys=users[0].kidneys;
    const numberofkidneys=chaikidneys.length;
    let numberofhealthykidneys=0;
    for(let i=0;i<chaikidneys.length;i++){
        if(chaikidneys[i].healthy){
            numberofhealthykidneys=numberofhealthykidneys+1;
        }
    }
    const numberofunhealthykidneys=numberofkidneys-numberofhealthykidneys;
    res.json({
        numberofkidneys,
        numberofunhealthykidneys,
        numberofhealthykidneys
    })
})
// app.use(express.json());

app.post('/',function(req,res){
    const ishealthy=req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        "msg":"done"
    })
    
app.put('/',function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({})
})

})
app.delete('/',function(req,res){
    if(isthereatleastoneunhealthykidney()){
        const newKidneys=[];
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys=newKidneys;
        res.json({
            "msg":"nigggggga"
        })
    }
    else{
        res.status(411).json({
            msg:"nigga  bad abd"
        });
    }
   
})

function isthereatleastoneunhealthykidney(){
    let atleastoneunhealthykideny=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastoneunhealthykideny=true;
        }
    }
    return atleastoneunhealthykideny;
}
app.listen(3002);