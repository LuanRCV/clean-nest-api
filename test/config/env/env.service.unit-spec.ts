import { Test, type TestingModule } from '@nestjs/testing'
import { EnvService } from '../../../src/config/env/env.service'
import { EnvModule } from '../../../src/config/env/env.module'
import { ConfigService } from '@nestjs/config'

describe('EnvService', () => {
  let sut: EnvService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EnvModule.forRoot()],
      providers: [EnvService, ConfigService]
    }).compile()

    sut = module.get<EnvService>(EnvService)
  })

  it('should be defined', () => {
    expect(sut).toBeDefined()
  })

  describe('getAppPort method', () => {
    it('should return the correct port number on success', () => {
      const port = sut.getAppPort()

      expect(port).toBe(3000)
    })
  })

  describe('getNodeEnv method', () => {
    it('should return the correct node env on success', () => {
      const nodeEnv = sut.getNodeEnv()

      expect(nodeEnv).toBe('test')
    })
  })
})
