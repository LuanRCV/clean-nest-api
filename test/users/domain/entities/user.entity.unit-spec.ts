import { UserEntity, type UserProps } from '@/users/domain/entities/user.entity'
import { faker } from '@faker-js/faker'
import MockDate from 'mockdate'

describe('UserEntity', () => {
  let userProps: UserProps
  let sut: UserEntity

  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  beforeEach(() => {
    userProps = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }
    sut = new UserEntity(userProps)
  })

  describe('Constructor', () => {
    test('should create a UserEntity with correct values on success', () => {
      expect(sut.name).toEqual(userProps.name)
      expect(sut.email).toEqual(userProps.email)
      expect(sut.password).toEqual(userProps.password)
      expect(sut.createdAt).toEqual(new Date())
    })
  })
})