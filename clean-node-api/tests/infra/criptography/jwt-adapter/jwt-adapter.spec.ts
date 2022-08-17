import jwt from 'jsonwebtoken'
import { JwtAdapter } from '../../../../src/infra/criptography/jwt-adapter/jwt-adapter'

interface SutTypes {
  sut: JwtAdapter
}

const makeSut = (key: string): SutTypes => {
  const sut = new JwtAdapter(key)
  return { sut }
}

describe('Jwt Adapter', () => {
  test('Should call sign with correct', async () => {
    const { sut } = makeSut('secret')
    const signSpy = jest.spyOn(jwt, 'sign')
    sut.encrypt('any_id')
    expect(signSpy).toHaveBeenCalledWith({ id: 'any_id' }, 'secret')
  })
})