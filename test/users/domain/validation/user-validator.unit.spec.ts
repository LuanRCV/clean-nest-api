import { type UserValidator, UserValidatorFactory, UserRules } from '@/users/domain/validation/user.validator'
import { mockUserProps } from '../mocks/user-entity.mock'

describe('FieldsValidator', () => {
  let sut: UserValidator

  beforeEach(() => {
    sut = UserValidatorFactory.create()
  })

  it('should initialize errors and validatedData variables with null', () => {
    expect(sut.errors).toEqual({})
    expect(sut.props).toBeNull()
  })

  describe('validate method', () => {
    describe('class-validator integration', () => {
      it('should track all errors if UserProps is null', () => {
        const isValid = sut.validate(null)

        expect(isValid).toBe(false)
        expect(sut.errors).toEqual({
          name: [
            'name must be shorter than or equal to 225 characters',
            'name should not be empty',
            'name must be a string'
          ],
          email: [
            'email must be shorter than or equal to 225 characters',
            'email should not be empty',
            'email must be a string'
          ],
          password: [
            'password must be shorter than or equal to 100 characters',
            'password should not be empty',
            'password must be a string'
          ]
        })
      })

      it('should track if UserProps name is empty', () => {
        sut.validate({ ...mockUserProps(), name: '' as any })

        expect(sut.errors).toEqual({
          name: [
            'name should not be empty'
          ]
        })
      })

      it('should track if UserProps name is a string', () => {
        sut.validate({ ...mockUserProps(), name: 10 as any })

        expect(sut.errors).toEqual({
          name: [
            'name must be shorter than or equal to 225 characters',
            'name must be a string'
          ]
        })
      })

      it('should track if UserProps name is shorter than 255 chars', () => {
        sut.validate({ ...mockUserProps(), name: 'a'.repeat(256) as any })

        expect(sut.errors).toEqual({
          name: [
            'name must be shorter than or equal to 225 characters'
          ]
        })
      })

      it('should track if UserProps email is empty', () => {
        sut.validate({ ...mockUserProps(), email: '' as any })

        expect(sut.errors).toEqual({
          email: [
            'email should not be empty'
          ]
        })
      })

      it('should track if UserProps email is a string', () => {
        sut.validate({ ...mockUserProps(), email: 10 as any })

        expect(sut.errors).toEqual({
          email: [
            'email must be shorter than or equal to 225 characters',
            'email must be a string'
          ]
        })
      })

      it('should track if UserProps email is shorter than 255 chars', () => {
        sut.validate({ ...mockUserProps(), email: 'a'.repeat(256) as any })

        expect(sut.errors).toEqual({
          email: [
            'email must be shorter than or equal to 225 characters'
          ]
        })
      })

      it('should track if UserProps password is empty', () => {
        sut.validate({ ...mockUserProps(), password: '' as any })

        expect(sut.errors).toEqual({
          password: [
            'password should not be empty'
          ]
        })
      })

      it('should track if UserProps password is a string', () => {
        sut.validate({ ...mockUserProps(), password: 10 as any })

        expect(sut.errors).toEqual({
          password: [
            'password must be shorter than or equal to 100 characters',
            'password must be a string'
          ]
        })
      })

      it('should track if UserProps password is shorter than 100 chars', () => {
        sut.validate({ ...mockUserProps(), password: 'a'.repeat(101) as any })

        expect(sut.errors).toEqual({
          password: [
            'password must be shorter than or equal to 100 characters'
          ]
        })
      })

      it('should track if UserProps date is not a date instance', () => {
        sut.validate({ ...mockUserProps(), createdAt: '' as any })

        expect(sut.errors).toEqual({
          createdAt: [
            'createdAt must be a Date instance'
          ]
        })
      })

      it('should get a valid props on success', () => {
        const props = mockUserProps()
        const isValid = sut.validate(props)

        expect(isValid).toBeTruthy()
        expect(sut.props).toEqual(new UserRules(props))
      })
    })
  })
})
