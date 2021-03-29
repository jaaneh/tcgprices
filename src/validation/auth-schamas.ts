import Joi from 'joi'

// Sign Up
export const signUpSchema = Joi.object({
  username: Joi.string()
    .min(4)
    .max(16)
    .required(),

  email: Joi.string()
    .email()
    .required(),

  password: Joi.string()
    .min(8)
    .strip()
    .required(),

  repeat_password: Joi.ref('password'),

  signed_up: Joi.date().timestamp(),

  last_signin: Joi.date().timestamp()
}).with('password', 'repeat_password')

// Sign In
export const signInSchema = Joi.object({
  username: Joi.string()
    .min(4)
    .max(16)
    .required(),

  password: Joi.string()
    .min(8)
    .strip()
    .required()
})

// Forgot Password
export const forgotPasswordSchema = Joi.object({
  current_password: Joi.string()
    .min(8)
    .strip()
    .required(),

  new_password: Joi.string()
    .min(8)
    .strip()
    .disallow(Joi.ref('current_password'))
    .required()
}).with('current_password', 'new_password')
