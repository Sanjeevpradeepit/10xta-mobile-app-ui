import { z } from 'zod';

/**
 * STEP 1: Phone number input (Send OTP)
 */
export const phoneLoginSchema = z.object({
  phoneNumber: z
    .string()
    .min(8, 'Phone number is too short')
    .max(15, 'Phone number is too long')
    .regex(/^[0-9]+$/, 'Only numbers are allowed'),
});

export type PhoneLoginSchema = z.infer<typeof phoneLoginSchema>;

/**
 * STEP 2: OTP verification
 */
export const otpVerifySchema = z.object({
  otp: z
    .string()
    .length(6, 'OTP must be 6 digits')
    .regex(/^[0-9]+$/, 'OTP must be numeric'),
});



export type OtpVerifySchema = z.infer<typeof otpVerifySchema>;

export const emailLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type EmailLoginSchema = z.infer<typeof emailLoginSchema>;
