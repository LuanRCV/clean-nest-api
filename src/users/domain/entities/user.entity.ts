export type UserProps = {
  name: string
  email: string
  password: string
  createdAt?: Date
}

export class UserEntity {
  constructor (
    private readonly props: UserProps
  ) {
    this.props.createdAt = this.props.createdAt ?? new Date()
  }

  get name (): string {
    return this.props.name
  }

  set name (name: string) {
    this.name = name
  }

  get email (): string {
    return this.props.email
  }

  set email (email: string) {
    this.email = email
  }

  get password (): string {
    return this.props.password
  }

  set password (password: string) {
    this.password = password
  }

  get createdAt (): Date {
    return this.props.createdAt
  }
}
