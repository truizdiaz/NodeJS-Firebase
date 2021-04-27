
var admin = require("firebase-admin")

exports.crearUsuario = (req, res) => { 
    
    try {
        console.log(req.body);
        admin.auth().createUser({
            email: req.body.usuario,
            password: req.body.password
            
          }).then((respuesta) => {
            console.log(respuesta);
            res.json(respuesta);
            
          }).catch(error => {
            console.log(error);
              res.json({error});
          })        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}