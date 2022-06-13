const jwt=require('jsonwebtoken');

const generarJwt = (id) => new Promise((resolve,reject) => {
    const payload = { id };
    jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '12h'
    }, (err, token) => {
        if (err) {
            reject('Error generando el token');
        }else{
            resolve(token);
        }
    });
});

module.exports={
    generarJwt
};