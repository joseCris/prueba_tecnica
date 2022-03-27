const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 8080;

app.use(bodyParser.json());

app.post('/obtener_numeros_primos', async (req, res) => {

    try {
        let params = req.body
        console.log("Despachos - POST: /obtener_numeros_primos", params);

        if (!params.numero) {
            throw ({ 'status': '400', 'message': 'no se encontro la variable numero' });
        }
        let numero = params.numero
        if (typeof numero != 'number') {
            throw ({ 'status': '400', 'message': 'dato ingresado no es un numero' });
        }

        let numeros_primos = []
        let result = ""
        
        for(let candidato = 2; candidato <= numero; candidato++) {
            let primo = true;
            for(let divisor=2; divisor < candidato; divisor++) {
                if(candidato%divisor === 0) {
                    primo = !primo;
                    break;
                }
            }
            if(primo) numeros_primos.push(candidato);
        }
        for(let n of numeros_primos.reverse()){
            result = result+n+","
        }

        res.status(200).send({'numeros_primos':result});


    } catch (err) {
        console.log(err)
        res.status(err.status).send({ 'message':err.message });
    }
})

module.exports = app;

app.listen(port, async () => {
    console.log(`Servidor iniciado en el puerto ${port}` )}
)
