exports.httpError=(res,err)=>{
    console.log('Http Status ----> ERROR');
    console.log(err);
    res.status(500).send({error:'Algo ha ocurrido'});
}