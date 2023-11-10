import { type DynamicModule, Module } from '@nestjs/common'
import { EnvService } from './env.service'
import { ConfigModule, ConfigService, type ConfigModuleOptions } from '@nestjs/config'
import { join } from 'node:path'

@Module({
  providers: [EnvService, ConfigService]
})
export class EnvModule extends ConfigModule {
  static forRoot (options?: ConfigModuleOptions): DynamicModule {
    return super.forRoot({
      ...options,
      envFilePath: [
        join(__dirname, `../../../.env.${process.env.NODE_ENV}`)
      ]
    })
  }
}
