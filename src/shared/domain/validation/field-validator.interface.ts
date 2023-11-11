export type FieldsErrors = Record<string, string[]>

export interface FieldsValidator<Props> {
  errors: FieldsErrors
  props: Props
  validate: (data: any) => boolean
}
