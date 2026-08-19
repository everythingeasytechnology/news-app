import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import {
  ChevronLeft,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Bookmark,
  Zap,
  ShieldCheck,
  ArrowRight,
  Check,
  Bell,
} from "lucide-react-native";
import { useThemeColors } from "@/src/store/hooks";

const BRAND_BLUE = "#2563EB";
const BRAND_BLUE_SOFT = "#DBEAFE";

export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { colors } = useThemeColors();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = () => {
    router.replace("/(tabs)");
  };

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, backgroundColor: colors.background },
      ]}
    >
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 32 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: colors.iconButtonBg }]}
          onPress={() => (router.canGoBack() ? router.back() : undefined)}
        >
          <ChevronLeft color={colors.textPrimary} size={24} />
        </TouchableOpacity>

        <View style={styles.heroRow}>
          <View style={styles.titleBlock}>
            <Text style={[styles.title, { color: colors.textPrimary }]}>Welcome</Text>
            <View style={styles.titleLineRow}>
              <Text style={[styles.title, { color: colors.textPrimary }]}>Back!</Text>
              <View style={styles.titleDot} />
            </View>
          </View>

          <View style={styles.heroImageWrap}>
            <View style={styles.heroImageCircle} />
            <Image
              source={require("@/assets/images/login-news.png")}
              style={styles.heroImage}
              resizeMode="contain"
            />
          </View>
        </View>

        <Text style={[styles.subtitle, { color: colors.textMuted }]}>
          Log in to continue reading the latest news and updates.
        </Text>

        <View style={styles.featureRow}>
          <View style={styles.featureItem}>
            <View style={styles.featureIconWrap}>
              <Bookmark color={BRAND_BLUE} size={20} />
            </View>
            <Text style={[styles.featureTitle, { color: colors.textPrimary }]}>
              Personalized
            </Text>
            <Text style={[styles.featureDesc, { color: colors.textMuted }]}>
              Get news that matters to you
            </Text>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureIconWrap}>
              <Zap color={BRAND_BLUE} size={20} />
            </View>
            <Text style={[styles.featureTitle, { color: colors.textPrimary }]}>
              Real-time
            </Text>
            <Text style={[styles.featureDesc, { color: colors.textMuted }]}>
              Breaking news as it happens
            </Text>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.featureIconWrap}>
              <ShieldCheck color={BRAND_BLUE} size={20} />
            </View>
            <Text style={[styles.featureTitle, { color: colors.textPrimary }]}>
              Trusted
            </Text>
            <Text style={[styles.featureDesc, { color: colors.textMuted }]}>
              Reliable sources you can trust
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.inputRow,
            { backgroundColor: colors.surface, borderColor: colors.border },
          ]}
        >
          <Mail color={colors.textMuted} size={20} />
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email or Phone Number"
            placeholderTextColor={colors.textMuted}
            autoCapitalize="none"
            keyboardType="email-address"
            style={[styles.input, { color: colors.textPrimary }]}
          />
        </View>

        <View
          style={[
            styles.inputRow,
            { backgroundColor: colors.surface, borderColor: colors.border },
          ]}
        >
          <Lock color={colors.textMuted} size={20} />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor={colors.textMuted}
            secureTextEntry={!showPassword}
            style={[styles.input, { color: colors.textPrimary }]}
          />
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (
              <Eye color={colors.textMuted} size={20} />
            ) : (
              <EyeOff color={colors.textMuted} size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.optionsRow}>
          <TouchableOpacity
            style={styles.rememberRow}
            onPress={() => setRememberMe((prev) => !prev)}
          >
            <View
              style={[
                styles.checkbox,
                rememberMe && styles.checkboxChecked,
                { borderColor: rememberMe ? BRAND_BLUE : colors.border },
              ]}
            >
              {rememberMe && <Check color="#FFFFFF" size={14} strokeWidth={3} />}
            </View>
            <Text style={[styles.rememberText, { color: colors.textSecondary }]}>
              Remember me
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
          <ArrowRight color="#FFFFFF" size={20} />
        </TouchableOpacity>

        <View style={styles.dividerRow}>
          <View style={[styles.dividerLine, { backgroundColor: colors.border }]} />
          <Text style={[styles.dividerText, { color: colors.textMuted }]}>or</Text>
          <View style={[styles.dividerLine, { backgroundColor: colors.border }]} />
        </View>

        <View style={styles.signUpCard}>
          <View style={styles.signUpIconWrap}>
            <Bell color="#FFFFFF" size={20} />
          </View>
          <View style={styles.signUpContent}>
            <Text style={[styles.signUpTitle, { color: colors.textPrimary }]}>
              New here?
            </Text>
            <Text style={[styles.signUpDesc, { color: colors.textMuted }]}>
              Create an account to personalize your news experience.
            </Text>
          </View>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  heroRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  titleBlock: {
    flex: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    lineHeight: 40,
  },
  titleLineRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 6,
  },
  titleDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: BRAND_BLUE,
    marginBottom: 10,
  },
  heroImageWrap: {
    width: 130,
    height: 130,
    alignItems: "center",
    justifyContent: "center",
  },
  heroImageCircle: {
    position: "absolute",
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: BRAND_BLUE_SOFT,
  },
  heroImage: {
    width: 120,
    height: 120,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    marginTop: 12,
    marginBottom: 24,
  },
  featureRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  featureItem: {
    flex: 1,
    paddingRight: 8,
  },
  featureIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: BRAND_BLUE_SOFT,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 2,
  },
  featureDesc: {
    fontSize: 12,
    lineHeight: 16,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 18,
    height: 56,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    fontSize: 15,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: BRAND_BLUE,
  },
  rememberText: {
    fontSize: 14,
  },
  forgotText: {
    fontSize: 14,
    fontWeight: "600",
    color: BRAND_BLUE,
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: BRAND_BLUE,
    borderRadius: 16,
    height: 58,
    marginBottom: 24,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    fontSize: 14,
  },
  signUpCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: BRAND_BLUE_SOFT,
    borderRadius: 20,
    padding: 16,
  },
  signUpIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: BRAND_BLUE,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpContent: {
    flex: 1,
  },
  signUpTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 2,
  },
  signUpDesc: {
    fontSize: 13,
    lineHeight: 18,
  },
  signUpButton: {
    borderWidth: 1.5,
    borderColor: BRAND_BLUE,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  signUpButtonText: {
    color: BRAND_BLUE,
    fontWeight: "700",
    fontSize: 14,
  },
});
