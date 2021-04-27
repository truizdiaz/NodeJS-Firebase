exports.crearUsuario = (req, res) => { 
    
    try {
        console.log(req.body);
        res.json({ msg: 'Usuario registrado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}