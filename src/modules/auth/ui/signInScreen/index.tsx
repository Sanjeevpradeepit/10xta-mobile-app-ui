import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { createStyles } from "./styles";
import { useThemedStyles } from "@/shared/theme";
import Screen from "@/shared/components/screen/Screen";
import CustomHeader from "@/shared/components/customHeader";

export default function SignInScreen({ navigation }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(false);
  const styles = useThemedStyles(createStyles);

  const onPressBack = () => navigation.goBack();
  return (
    <Screen
      keyboardAvoid
      scroll
      listMode
  
      header={<CustomHeader  onPressBack={onPressBack} title="Log In" />}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          {/* <Text style={styles.headerText}>Sign in</Text> */}
          <Text style={styles.logo}>10xTA</Text>
        </View>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.welcome}>Welcome Back</Text>
          <Text style={styles.subText}>Hello there, sign in to continue</Text>

          <TextInput
            placeholder="Username"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            value={password as any}
            onChangeText={setPassword as any}
          />

          <View style={styles.termsRow}>
            <Text style={styles.check}>✔</Text>
            <Text style={styles.terms}>
              I accept the <Text style={styles.link}>terms</Text> and{" "}
              <Text style={styles.link}>privacy policy</Text>
            </Text>
          </View>

          <TouchableOpacity
            style={styles.forgot}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signInBtn}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
}
