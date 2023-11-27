const express = require('express'); //importando el modulo express victotmono
const app = express();

app.use(express.json());

// http://localhost:3000/
app.get('/', (req, res) => {
    res.send("hello world")

});

app.listen(3000,() => {console.log('listening on port 3000')} )

const express = require('express') //importando el módulo express

const app = express()

//http://localhost:3000/login?user=jesus&password=12345

app.get('/login', (req, res) => {
    const {user,password}=req.query
    if (!user || !password){
        res.status(400).json({msg: 'You need to provide <user> and <password> parameters'})
        return
    }
    if (user == 'jesus' && password == '12345'){
        res.json({msg: 'Iniciaste sesión con éxito'})
        return
    }
    res.status(400).json("Error en el usuario o contraseña")
})

//http://localhost:3000/
app.get('/:nombre', (req, res) => {
    const params = req.params
    res.json({params})
})

// hhtp://localhost:3000/


/* Los navegadores sólo usan el método GET, por lo tanto los demás no se verán */
app.post('/login', (req, res) => { //Endpoint
   const {user, password} = req.body
    
})
if (!user || !password){
    res.status(400).json({msg: 'You need to provide <user> and <password> parameters'})
    return
}
if (user == 'jesus' && password == '12345'){
    res.json({msg: 'Iniciaste sesión con éxito'})
    return

}

res.status(400).json{
    msg: 'Error en el usuario o contraseña'
}
app.patch('/', (req, res) => { //Endpoint
    res.json("Hola con PATCH")
})

app.delete('/', (req, res) => {
    res.json("Hola con DELETE")
})


app.listen(3000, () => {console.log('listening on port 3000')})

const express = require ('express') //importando el modulo express victormono

const app = express()

// http://localhost:3000   El navegador por si solo solo manera GET/

app.get('/', (req, res) => {
   res.send("Hola con GET")
})
app.post('/', (req,res) =>{
    res.send("Hola con POST")
})
app.put('/', (req,res) =>{
    res.send("Hola con PUT")
})

app.patch('/', (req,res) =>{
    res.send("Hola con PATCH")
})

app.delete('/', (req,res)=>{
    res.send("Hola con DELETE")
}) 

app.listen(3000,() => {console.log('listening on port 3000')} )