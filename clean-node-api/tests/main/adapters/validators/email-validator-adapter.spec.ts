import { EmailValidatorAdapter } from '../../../../src/main/adapters/validators/email-validator-adapter'
import validator from 'validator'

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}

describe('EmailValidator Adapter', () => {

  test('Should return false if validator returns false', () => {
    const sut = makeSut()
    // correção by Humberto, o mock feito no curso faz com que tudo fique true
    jest.spyOn(validator, 'isEmail').mockImplementationOnce(() => {
      return false
    })    
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })

  test('Should return true if validator returns true', () => {
    const sut = makeSut()
    const isValid = sut.isValid('valid_email@mail.com')
    expect(isValid).toBe(true)
  })

  test('Should call validator with correct email', () => {
    const sut = makeSut()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    sut.isValid('any_email@mail.com')
    expect(isEmailSpy).toHaveBeenCalledWith('any_email@mail.com')
  })

})