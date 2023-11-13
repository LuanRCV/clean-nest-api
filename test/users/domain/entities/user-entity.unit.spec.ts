import { UserEntity, type UserProps } from '@/users/domain/entities/user.entity'
import MockDate from 'mockdate'
import { mockUserProps } from '../mocks/user-entity.mock'

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
    userProps = mockUserProps()
    sut = new UserEntity(userProps)
  })

  describe('Constructor', () => {
    test('should create a UserEntity with correct values on success', () => {
      expect(sut.id).toEqual(userProps.id)
      expect(sut.name).toEqual(userProps.name)
      expect(sut.email).toEqual(userProps.email)
      expect(sut.password).toEqual(userProps.password)
      expect(sut.createdAt).toEqual(new Date())
    })
  })
})
