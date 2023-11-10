import { Test, type TestingModule } from '@nestjs/testing'
import { EnvService } from '../../../src/config/env/env.service'
import { EnvModule } from '../../../src/config/env/env.module'

describe('EnvService', () => {
  let sut: EnvService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EnvModule.forRoot()],
      providers: [EnvService]
    }).compile()

    sut = module.get<EnvService>(EnvService)
  })

  it('should be defined', () => {
    expect(sut).toBeDefined()
  })
})
