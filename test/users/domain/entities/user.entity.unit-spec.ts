import { UserEntity, type UserParams } from '@/users/domain/entities/user.entity'
import { faker } from '@faker-js/faker'

describe('UserEntity', () => {
  let userParams: UserParams
  let sut: UserEntity

  beforeEach(() => {
    userParams = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }
    sut = new UserEntity(userParams)
  })

  describe('Constructor', () => {
    test('should create a UserEntity with correct values on success', () => {
      expect(sut.data).toEqual(userParams)
    })
  })
})
