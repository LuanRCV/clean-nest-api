import { IsDate, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { type UserProps } from '../entities/user.entity'
import { FieldsValidator } from '@/shared/infrastructure/validation/fields-validator'

export class UserRules {
  @IsString()
  @IsNotEmpty()
  @MaxLength(225)
    name: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(225)
    email: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
    password: string

  @IsDate()
  @IsOptional()
    createdAt: Date

  constructor ({ email, name, password, createdAt }: UserProps) {
    Object.assign(this, { email, name, password, createdAt })
  }
}

export class UserValidator extends FieldsValidator<UserRules> {
  validate (data: UserProps): boolean {
    return super.validate(new UserRules(data ?? {} as UserProps))
  }
}

export class UserValidatorFactory {
  static create (): UserValidator {
    return new UserValidator()
  }
}
