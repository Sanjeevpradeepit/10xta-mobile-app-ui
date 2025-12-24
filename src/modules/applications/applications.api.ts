
import { apiClient } from '../../infrastructure/api/apiClient';
import {
  LoginDTO,
  LoginResponse,
  SendOtpDTO,
  VerifyOtpDTO,
  VerifyOtpResponse,
} from './applications.types';

/**
 * EMAIL / PASSWORD LOGIN (optional)
 */
export async function loginApi(
  payload: LoginDTO,
): Promise<LoginResponse> {
  const { data } = await apiClient.post('/auth/login', payload);
  return data;
}

/**
 * SEND OTP TO PHONE
 */
export async function sendOtpApi(
  payload: SendOtpDTO,
): Promise<void> {
  await apiClient.post('/auth/send-otp', payload);
}

/**
 * VERIFY OTP
 */
export async function verifyOtpApi(
  payload: VerifyOtpDTO,
): Promise<VerifyOtpResponse> {
  const { data } = await apiClient.post('/auth/verify-otp', payload);
  return data;
}
