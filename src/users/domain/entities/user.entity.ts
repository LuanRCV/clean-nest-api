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

  get email (): string {
    return this.props.email
  }

  get password (): string {
    return this.props.password
  }

  get createdAt (): Date {
    return this.props.createdAt
  }
}
