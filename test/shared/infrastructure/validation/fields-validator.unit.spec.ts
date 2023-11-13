import { type Validator } from '@/shared/domain/validation/validator.interface'
import { FieldsValidator } from '@/shared/infrastructure/validation/fields-validator'
import * as classValidator from 'class-validator'

const mockFields = (): any => {
  return {
    any_field_1: 'value_1',
    any_field_2: 'value_2'
  }
}

const mockValidationFailResult = (): any => {
  return [
    {
      property: 'any_field_1',
      constraints: {
        isRequired: 'test error'
      }
    }
  ]
}

interface SutProps {
  field: string
}

describe('FieldsValidator', () => {
  let sut: Validator<SutProps>

  beforeEach(() => {
    sut = new FieldsValidator<SutProps>()
  })

  it('should initialize errors and validatedData variables with null', () => {
    expect(sut.errors).toEqual({})
    expect(sut.props).toBeNull()
  })

  describe('validate method', () => {
    describe('class-validator integration', () => {
      it('should call validateSync with correct values', () => {
        const validateSyncSpy = jest.spyOn(classValidator, 'validateSync')
        const fields = mockFields()
        sut.validate(fields)

        expect(validateSyncSpy).toHaveBeenCalledWith(fields)
      })

      it('should get errors and not get props on validateSync fail', () => {
        jest.spyOn(classValidator, 'validateSync').mockReturnValueOnce(mockValidationFailResult())
        sut.validate(mockFields())

        expect(sut.props).toBeNull()
        expect(sut.errors).toEqual({
          any_field_1: ['test error']
        })
      })
    })

    it('should not get errors and get props on success', () => {
      jest.spyOn(classValidator, 'validateSync').mockReturnValueOnce([])
      const fields = mockFields()
      sut.validate(fields)

      expect(sut.props).toEqual(fields)
      expect(sut.errors).toEqual({})
    })
  })
})
