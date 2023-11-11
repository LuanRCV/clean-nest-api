import { UserEntity } from '@/users/domain/entities/user.entity'
import { faker } from '@faker-js/faker'

describe('UserEntity', () => {
  describe('Constructor', () => {
    test('should create a UserEntity with correct values on success', () => {
      const userParams = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password()
      }
      const sut = new UserEntity(userParams)

      expect(sut.data).toEqual(userParams)
    })
  })
})
