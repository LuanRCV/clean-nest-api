import { UserValidatorFactory } from '../validation/user.validator'

export type UserProps = {
  id: string
  name: string
  email: string
  password: string
  createdAt?: Date
}

export class UserEntity {
  constructor (
    private readonly props: UserProps
  ) {
    UserEntity.validate(props)
    this.props.createdAt = this.props.createdAt ?? new Date()
  }

  static validate (props: UserProps): void {
    const validator = UserValidatorFactory.create()
    validator.validate(props)
  }

  get id (): string {
    return this.props.id
  }

  get name (): string {
    return this.props.name
  }

  set name (name: string) {
    UserEntity.validate({ ...this.props, name })
    this.name = name
  }

  get email (): string {
    return this.props.email
  }

  set email (email: string) {
    UserEntity.validate({ ...this.props, email })
    this.email = email
  }

  get password (): string {
    return this.props.password
  }

  set password (password: string) {
    UserEntity.validate({ ...this.props, password })
    this.password = password
  }

  get createdAt (): Date {
    return this.props.createdAt
  }
}
