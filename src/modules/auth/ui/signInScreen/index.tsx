import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { createStyles } from "./styles";
import { useThemedStyles } from "@/shared/theme";
import Screen from "@/shared/components/screen/Screen";
import CustomHeader from "@/shared/components/customHeader";
import { useAuthStore } from "@/app/store/auth.store";

type FormData = {
  username: string;
  password: string;
};

export default function SignInScreen({ navigation }: any) {
  const styles = useThemedStyles(createStyles);
  const login = useAuthStore(state => state.login);
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onPressBack = () => navigation.goBack();

  const onSubmit = (data: FormData) => {
    console.log("Login Data:", data);
    login('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NSIsInJvbGUiOiJSRUNSVUlURVIiLCJuYW1lIjoiTWVkYW4gU3JpIiwiZW1haWwiOiJtZWRhbkAxMHh0YS5jb20iLCJleHAiOjE5MDAwMDAwMDB9.dummy-signature-for-dev-only');
    navigation.navigate("Home");
  };

  return (
    <Screen
      keyboardAvoid
      scroll
      listMode={false}
      header={<CustomHeader onPressBack={onPressBack} title="Log In" />}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>10xTA</Text>
        </View>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.welcome}>Welcome Back</Text>
          <Text style={styles.subText}>Hello there, sign in to continue</Text>

          {/* Username */}
          <Controller
            control={control}
            name="username"
            rules={{ required: "Username is required" }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Username"
                placeholderTextColor="#B0B0B0"
                style={styles.input}
                value={value ?? ""}
                onChangeText={onChange}
              />
            )}
          />
          {errors.username && (
            <Text style={styles.error}>{errors.username.message}</Text>
          )}

          {/* Password */}
          <Controller
            control={control}
            name="password"
            rules={{ 
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            }}
            render={({ field: { onChange, value } }) => (
              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="#B0B0B0"
                  style={[styles.input, styles.passwordInput]}
                  secureTextEntry={!showPassword}
                  value={value ?? ""}
                  onChangeText={onChange}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Text style={styles.eyeText}>
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
          {errors.password && (
            <Text style={styles.error}>{errors.password.message}</Text>
          )}

          {/* Terms */}
          <View style={styles.termsRow}>
            <Text style={styles.check}>✔</Text>
            <Text style={styles.terms}>
              I accept the <Text style={styles.link}>terms</Text> and{" "}
              <Text style={styles.link}>privacy policy</Text>
            </Text>
          </View>

          {/* Forgot */}
          <TouchableOpacity
            style={styles.forgot}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Submit */}
          <TouchableOpacity
            style={styles.signInBtn}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
}