import { hash, compare } from 'bcryptjs'

export async function hashPassword(password: string): Promise<string> {
  const hashedPassword = await hash(password, 12)
  return hashedPassword
}

export async function verifyPassword(
  oldPassword: string,
  hashedPassword: string
): Promise<boolean> {
  const isValid = await compare(oldPassword, hashedPassword)
  return isValid
}
