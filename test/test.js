
const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../index');

chai.should();

chai.use(chaiHTTP)

describe('Testing api /obtener_numeros_primos ', function () {
    describe('Verificacion de valores ejemplo', function () {
        it('', (done) => {
            const body = { "numero": 7 }
            chai.request(server)
                .post("/obtener_numeros_primos")
                .send(body)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('numeros_primos').eq('7,5,3,2,');
                    done();
                })
        })
    });
    it("Verificacion valor debe ser un numero", (done) => {
        const body = { "numero": '7' }
        chai.request(server)
            .post("/obtener_numeros_primos")
            .send(body)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object')
                res.body.should.have.property('message').eq('dato ingresado no es un numero');
                done();
            });
    });
    it("Verificacion valor debe ser un numero", (done) => {
        const body = { "valor": 7 }
        chai.request(server)
            .post("/obtener_numeros_primos")
            .send(body)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object')
                res.body.should.have.property('message').eq('no se encontro la variable numero');
                done();
            });
    });

})
