
var firebase = require("firebase")

exports.loginUsuario = (req, res) => { 
    
    try {
        console.log(req.body);
        firebase.auth().signInWithEmailAndPassword(req.body.usuario, req.body.password).then((respuesta) => {
            console.log(respuesta);
            res.json({respuesta});
          }, error => {
            console.log(error);
            res.json({error});
          })
      
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.recuperarPassword = (req, res) => { 
    
    try {
        console.log(req.body);
        firebase.auth().sendPasswordResetEmail(req.body.correo).then((respuesta) => {
            res.json({ msg: "Enviamos un correo para restablecer la password" });

          }).catch(error => {
            res.json(error);
          })
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}