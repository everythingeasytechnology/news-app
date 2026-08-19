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
  Newspaper,
} from "lucide-react-native";
import { useThemeColors } from "@/src/store/hooks";

const BRAND_BLUE = "#2563EB";
const BRAND_BLUE_SOFT = "#DBEAFE";
const PAGE_BG_LIGHT = "#F8FAFC";

const DOT_GRID_ROWS = 8;
const DOT_GRID_COLS = 20;
// Roughly a fifth of the grid is skipped at random-looking spots to avoid a solid block.
const DOT_SKIP = new Set([
  0, 1, 2, 19, 18, 17, 20, 21, 39, 38, 40, 60, 59, 79, 78, 99, 118, 117, 137,
  136, 155, 154, 3, 22, 41, 156, 4, 23, 61, 80, 100, 119, 138, 157,
]);

function DotGrid() {
  const dots = [];
  for (let row = 0; row < DOT_GRID_ROWS; row++) {
    for (let col = 0; col < DOT_GRID_COLS; col++) {
      const index = row * DOT_GRID_COLS + col;
      if (DOT_SKIP.has(index)) continue;
      dots.push(<View key={index} style={styles.mapDot} />);
    }
  }
  return <View style={styles.mapDotGrid}>{dots}</View>;
}

function SkylineSilhouette() {
  const heights = [24, 40, 18, 55, 30, 45, 20, 60, 26, 38, 22, 48, 16, 34];
  return (
    <View style={styles.skylineRow}>
      {heights.map((h, i) => (
        <View key={i} style={[styles.skylineBar, { height: h }]} />
      ))}
    </View>
  );
}

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Trusted",
    desc: "Verified news",
  },
  {
    icon: Bookmark,
    title: "Personalized",
    desc: "News for you",
  },
  {
    icon: Zap,
    title: "Real-time",
    desc: "Breaking news",
  },
];

export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { colors, isDark } = useThemeColors();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const pageBackground = isDark ? colors.background : PAGE_BG_LIGHT;

  const handleLogin = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, backgroundColor: pageBackground },
      ]}
    >
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingBottom: insets.bottom + 32,
            flexGrow: 1,
            justifyContent: "center",
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: colors.iconButtonBg }]}
          onPress={() => (router.canGoBack() ? router.back() : undefined)}
        >
          <ChevronLeft color={colors.textPrimary} size={20} />
        </TouchableOpacity>

        <View style={styles.heroRow}>
          <View style={styles.titleColumn}>
            <Text style={[styles.title, { color: colors.textPrimary }]}>
              Welcome
            </Text>
            <View style={styles.titleLineRow}>
              <Text style={[styles.title, { color: colors.textPrimary }]}>
                Back!
              </Text>
              <View style={styles.titleDot} />
            </View>

            <Text style={[styles.subtitle, { color: colors.textMuted }]}>
              Log in to continue reading the latest news and updates.
            </Text>
          </View>

          <View style={styles.heroImageWrap}>
            <DotGrid />
            <View style={styles.heroImageCircle} />
            <Image
              source={require("@/assets/images/login-news.png")}
              style={styles.heroImage}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.featureRow}>
          {FEATURES.map((feature) => (
            <View key={feature.title} style={styles.featureItem}>
              <View style={styles.featureIconWrap}>
                <feature.icon color={BRAND_BLUE} size={18} />
              </View>
              <View style={styles.featureTextCol}>
                <Text
                  style={[styles.featureTitle, { color: colors.textPrimary }]}
                >
                  {feature.title}
                </Text>
                <Text style={[styles.featureDesc, { color: colors.textMuted }]}>
                  {feature.desc}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={[styles.inputRow, { backgroundColor: colors.surface }]}>
          <Mail color={colors.textMuted} size={17} />
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

        <View style={[styles.inputRow, { backgroundColor: colors.surface }]}>
          <Lock color={colors.textMuted} size={17} />
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
              <Eye color={colors.textMuted} size={17} />
            ) : (
              <EyeOff color={colors.textMuted} size={17} />
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
              {rememberMe && (
                <Check color="#FFFFFF" size={12} strokeWidth={3} />
              )}
            </View>
            <Text
              style={[styles.rememberText, { color: colors.textSecondary }]}
            >
              Remember me
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
          <ArrowRight color="#FFFFFF" size={17} />
        </TouchableOpacity>

        <View style={styles.dividerRow}>
          <View
            style={[styles.dividerLine, { backgroundColor: colors.border }]}
          />
          <View style={[styles.orCircle, { borderColor: colors.border }]}>
            <Text style={[styles.dividerText, { color: colors.textMuted }]}>
              or
            </Text>
          </View>
          <View
            style={[styles.dividerLine, { backgroundColor: colors.border }]}
          />
        </View>

        <View style={styles.signUpCard}>
          <View style={styles.signUpIconWrap}>
            <View style={styles.signUpIconInner}>
              <Newspaper color={BRAND_BLUE} size={15} />
            </View>
            <View style={styles.signUpIconBadge}>
              <Bell color="#FFFFFF" size={9} />
            </View>
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

        <SkylineSilhouette />
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
    marginBottom: 32,
  },
  titleColumn: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 36,
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
  subtitle: {
    fontSize: 13,
    lineHeight: 19,
    marginTop: 12,
  },
  heroImageWrap: {
    width: 150,
    height: 130,
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
  },
  mapDotGrid: {
    position: "absolute",
    top: -22,
    left: -30,
    width: 210,
    height: 96,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },
  mapDot: {
    width: 3,
    height: 3,
    margin: 2.5,
    borderRadius: 1.5,
    backgroundColor: "#E5E7EB",
  },
  heroImageCircle: {
    position: "absolute",
    width: 124,
    height: 124,
    borderRadius: 62,
    backgroundColor: BRAND_BLUE_SOFT,
  },
  heroImage: {
    width: 138,
    height: 138,
  },
  featureRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 6,
    marginBottom: 36,
    marginTop: 16,
    paddingRight: 0,
  },
  featureItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 6,
  },
  featureIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: BRAND_BLUE_SOFT,
    alignItems: "center",
    justifyContent: "center",
  },
  featureTextCol: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 11,
    fontWeight: "700",
    marginBottom: 2,
  },
  featureDesc: {
    fontSize: 10,
    lineHeight: 13,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderRadius: 16,
    paddingHorizontal: 18,
    height: 56,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 0,
    textAlignVertical: "center",
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
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
    fontSize: 13,
  },
  forgotText: {
    fontSize: 13,
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
    marginBottom: 32,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 32,
  },
  dividerLine: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    fontSize: 13,
  },
  orCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
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
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: BRAND_BLUE,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpIconInner: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "-8deg" }],
  },
  signUpIconBadge: {
    position: "absolute",
    bottom: -4,
    left: -4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: BRAND_BLUE,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpContent: {
    flex: 1,
  },
  signUpTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 2,
  },
  signUpDesc: {
    fontSize: 12,
    lineHeight: 16,
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
  skylineRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 6,
    marginTop: 32,
    opacity: 0.5,
  },
  skylineBar: {
    width: 14,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    backgroundColor: "#E5E7EB",
  },
});
