import { z } from 'zod';
import { PHONE_MIN_DIGIT_ERR, PHONE_NUMBER_ERR } from '../constants/errorMessages';

export const iranPhoneRegex =
  /^(\+?98|0)?9\d{9}$/; // 09xxxxxxxxx or +989xxxxxxxxx

export const loginSchema = z.object({
  phone: z
    .string()
    .regex(iranPhoneRegex, PHONE_NUMBER_ERR)
    .min(10,PHONE_MIN_DIGIT_ERR ),
});

export type LoginFormData = z.infer<typeof loginSchema>;