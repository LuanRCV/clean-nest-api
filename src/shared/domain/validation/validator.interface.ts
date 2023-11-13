export type IValidationErrors = Record<string, string[]>

export interface IValidator<Props> {
  errors: IValidationErrors
  props: Props
  validate: (data: Props) => boolean
}
