export type ValidationErrors = Record<string, string[]>

export interface Validator<Props> {
  errors: ValidationErrors
  props: Props
  validate: (data: Props) => boolean
}

export interface ClassValidator {

}
