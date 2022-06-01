const jwt=require('jsonwebtoken');

const generarJwt = (uid) => new Promise((resolve,reject) => {
    const payload = { uid };
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