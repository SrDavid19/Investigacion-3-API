const {Router, request} = require('express');
const router = Router();

const players = require('../sample.json');

router.get('/',(req,res)=>{
    res.json(players);
});

router.post('/',(req, res)=> {
    const { Nombre, Apellido, Nacionalidad,Posicion, Dorsal, Estatura, Edad, Contrato, Valor} = req.body; 
    if(Nombre && Apellido && Nacionalidad && Posicion && Dorsal && Estatura && Edad && Contrato && Valor ){
        const id = players.length + 1;
        const newPlayer = {id, ...req.body};
        players.push(newPlayer);
        res.json(players);
    }else{
        res.status(500).json({error:'Hay un error'});
    }
});

module.exports = router;