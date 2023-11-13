import { FieldsValidator } from '@/shared/infrastructure/validation/fields-validator'
import * as classValidator from 'class-validator'

interface mockedProps {
  field: string
}

describe('FieldsValidator', () => {
  let sut: FieldsValidator<mockedProps>

  beforeEach(() => {
    sut = new FieldsValidator<mockedProps>()
  })

  it('should initialize errors and validatedData variables with null', () => {
    expect(sut.errors).toEqual({})
    expect(sut.props).toBeNull()
  })

  describe('validate method', () => {
    it('should validate with adequated errors on fail', () => {
      const validateSyncSpy = jest.spyOn(classValidator, 'validateSync')
      validateSyncSpy.mockReturnValue([
        {
          property: 'field',
          constraints: {
            isRequired: 'test error'
          }
        }
      ])

      expect(sut.validate(null)).toBeFalsy()
      expect(validateSyncSpy).toHaveBeenCalled()
      expect(sut.props).toBeNull()
      expect(sut.errors).toEqual({
        field: ['test error']
      })
    })

    it('should validate without errors on success', () => {
      const validateSyncSpy = jest.spyOn(classValidator, 'validateSync')
      validateSyncSpy.mockReturnValue([])

      expect(sut.validate({ field: 'value' })).toBeTruthy()
      expect(validateSyncSpy).toHaveBeenCalled()
      expect(sut.props).toEqual({
        field: 'value'
      })
      expect(sut.errors).toEqual({})
    })
  })
})
