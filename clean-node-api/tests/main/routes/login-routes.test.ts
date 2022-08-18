import request from 'supertest'
import app from '../../../src/main/config/app'
import { MongoHelper } from '../../../src/infra/db/mongodb/helpers/mongo-helper'

describe('Login Routes', () => {

  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {

    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Humberto',
          email: 'humbertobtoscano@gmail.com',
          password: '123456',
          passwordConfirmation: '123456'
        })
        .expect(200)
    })

  })

})