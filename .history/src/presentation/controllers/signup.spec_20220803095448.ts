describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = SignUpController()
    const httpRequest = {
      body: {
       // name: 'any_name',
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})