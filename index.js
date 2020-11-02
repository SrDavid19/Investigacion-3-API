const { Router }= require ('express');
const router = Router();

//Routes
router.get('/test', (rep, res)=>{
    const data ={
        "Name" : "David",
        "LastName" : "Mejía"
    }
    res.json(data);
});

module.exports = router;