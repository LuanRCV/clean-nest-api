import { FieldsValidator } from '@/shared/infrastructure/validation/fields-validator'
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'

class StubRules {
  @IsString()
  @IsNotEmpty()
  @MaxLength(225)
    name: string

  @IsNumber()
  @IsNotEmpty()
    price: number

  constructor (data: any) {
    Object.assign(this, data)
  }
}

class StubFieldsValidator extends FieldsValidator<StubRules> {
  validate (data: any): boolean {
    return super.validate(new StubRules(data))
  }
}

const mockFields = (): StubRules => {
  return {
    name: 'any_name',
    price: 10
  }
}

describe('FieldsValidator', () => {
  let sut: StubFieldsValidator

  beforeEach(() => {
    sut = new StubFieldsValidator()
  })

  describe('validate method', () => {
    describe('class-validator integration', () => {
      it('should get errors and not get props on validateSync fail', () => {
        expect(sut.validate(null)).toBeFalsy()
        expect(sut.errors).toEqual({
          name: [
            'name must be shorter than or equal to 225 characters',
            'name should not be empty',
            'name must be a string'
          ],
          price: [
            'price should not be empty',
            'price must be a number conforming to the specified constraints'
          ]
        })
      })
    })

    it('should not get errors and get props on success', () => {
      const fields = mockFields()
      sut.validate(fields)

      expect(sut.props).toEqual(fields)
      expect(sut.errors).toEqual({})
    })
  })
})
