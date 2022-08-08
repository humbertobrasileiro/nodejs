import request from 'supertest'
import app from '../../../src/main/config/app'

describe('Body Parser Middleware', () => {

  test('Should parse body as json', async () => {
    app.post('/teste_body_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/teste_body_parser')
      .send({ name: 'Humberto' })
      .expect({ name: 'Humberto' })
  })
})