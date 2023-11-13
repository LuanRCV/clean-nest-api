import { type IValidator } from '@/shared/domain/validation/validator.interface'
import { validateSync } from 'class-validator'

export class FieldsValidator<Props> implements IValidator<Props> {
  errors = {}
  props = null

  validate (data: any): boolean {
    const errors = validateSync(data)

    for (const error of errors) {
      this.errors[error.property] = Object.values(error.constraints)
    }

    if (errors.length === 0) {
      this.props = data
    }

    return !errors.length
  }
}
