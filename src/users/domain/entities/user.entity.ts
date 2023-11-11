export type UserParams = {
  name: string
  email: string
  password: string
  createdAt?: Date
}

export class UserEntity {
  constructor (
    public readonly data: UserParams
  ) {
    this.data.createdAt = this.data.createdAt ?? new Date()
  }
}
