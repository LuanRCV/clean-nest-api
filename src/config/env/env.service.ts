import { Injectable } from '@nestjs/common'
import { type IEnv } from './env.interface'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class EnvService implements IEnv {
  constructor (
    private readonly configService: ConfigService
  ) { }

  getAppPort (): number {
    return this.configService.get<number>('PORT')
  }

  getNodeEnv (): string {
    return this.configService.get<string>('NODE_ENV')
  }
}
