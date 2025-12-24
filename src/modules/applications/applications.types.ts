export interface LoginDTO {
  email?: string;
  password?: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    name: string;
    phoneNumber: string;
  };
}

export interface SendOtpDTO {
  phoneNumber: string;
}

export interface VerifyOtpDTO {
  phoneNumber: string;
  otp: string;
}

export interface VerifyOtpResponse {
  accessToken: string;
  refreshToken: string;
}
