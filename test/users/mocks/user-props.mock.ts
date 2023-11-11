import { type UserProps } from '@/users/domain/entities/user.entity'
import { faker } from '@faker-js/faker'

export function mockUserProps (): UserProps {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }
}
