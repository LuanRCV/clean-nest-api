export type FieldsErrors = Record<string, string[]>

export interface IFieldsValidator<Props> {
  errors: FieldsErrors
  props: Props
  validate: (data: Props) => boolean
}
