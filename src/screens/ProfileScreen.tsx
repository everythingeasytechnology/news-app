import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Bell,
  Bookmark,
  Clock,
  LayoutGrid,
  SlidersHorizontal,
  Moon,
  User,
  Crown,
  ShieldCheck,
  HelpCircle,
  Info,
  LogOut,
  ChevronRight,
} from "lucide-react-native";
import { useAppDispatch, useThemeColors } from "@/src/store/hooks";
import { toggleTheme } from "@/src/store/themeSlice";
import { scale, scaleFont } from "@/src/utils/responsive";

const BRAND_BLUE = "#2563EB";
const BRAND_BLUE_SOFT = "#DBEAFE";
const DANGER = "#EF4444";
const DANGER_SOFT = "#FEE2E2";
const PAGE_BG_LIGHT = "#F8FAFC";

const DOT_GRID_ROWS = 6;
const DOT_GRID_COLS = 10;
const DOT_SKIP = new Set([0, 1, 9, 8, 10, 19, 40, 49, 50, 59]);

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

const PERSONALIZATION_ITEMS = [
  {
    icon: LayoutGrid,
    title: "Interests & Topics",
    desc: "Customize your news feed",
  },
  {
    icon: SlidersHorizontal,
    title: "Notification Settings",
    desc: "Manage your alerts and updates",
  },
];

const ACCOUNT_ITEMS = [
  {
    icon: User,
    title: "Edit Profile",
    desc: "Update your personal information",
  },
  {
    icon: Crown,
    title: "Subscription",
    desc: "Manage your premium plan",
    badge: "Active",
  },
  {
    icon: ShieldCheck,
    title: "Privacy & Security",
    desc: "Manage your privacy and security",
  },
];

const MORE_ITEMS = [
  {
    icon: HelpCircle,
    title: "Help & Support",
    desc: "Get help and contact support",
  },
  { icon: Info, title: "About Us", desc: "Learn more about our app" },
];

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const { colors, isDark } = useThemeColors();
  const pageBackground = isDark ? colors.background : PAGE_BG_LIGHT;

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
          { paddingBottom: insets.bottom + 32 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroRow}>
          <View style={styles.titleColumn}>
            <View style={styles.titleLineRow}>
              <Text style={[styles.title, { color: colors.textPrimary }]}>
                My Profile
              </Text>
              <View style={styles.titleDot} />
            </View>
            <Text style={[styles.subtitle, { color: colors.textMuted }]}>
              Manage your account and personalize your news experience.
            </Text>
          </View>

          <View style={styles.rightColumn}>
            <TouchableOpacity
              style={[
                styles.bellButton,
                { backgroundColor: colors.iconButtonBg },
              ]}
            >
              <Bell color={colors.textPrimary} size={scale(17)} />
              <View style={styles.bellDot} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.profileCard, { backgroundColor: colors.surface }]}
        >
          <View style={styles.profileTopRow}>
            <Image
              source={{ uri: "https://i.pravatar.cc/200?img=52" }}
              style={styles.avatar}
            />
            <View style={styles.profileInfo}>
              <Text style={[styles.profileName, { color: colors.textPrimary }]}>
                Arjun Sharma
              </Text>
              <Text style={[styles.profileEmail, { color: colors.textMuted }]}>
                arjun.sharma@gmail.com
              </Text>
              <View style={styles.premiumBadge}>
                <Crown color={BRAND_BLUE} size={scale(10)} />
                <Text style={styles.premiumBadgeText}>Premium Member</Text>
              </View>
            </View>
            <ChevronRight color={colors.textMuted} size={scale(17)} />
          </View>

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <View style={styles.statIconWrap}>
                <Bookmark color={BRAND_BLUE} size={scale(15)} />
              </View>
              <View>
                <Text style={[styles.statValue, { color: colors.textPrimary }]}>
                  120
                </Text>
                <Text style={[styles.statLabel, { color: colors.textMuted }]}>
                  Saved Articles
                </Text>
              </View>
            </View>

            <View
              style={[styles.statDivider, { backgroundColor: colors.border }]}
            />

            <View style={styles.statItem}>
              <View style={styles.statIconWrap}>
                <Clock color={BRAND_BLUE} size={scale(15)} />
              </View>
              <View>
                <Text style={[styles.statValue, { color: colors.textPrimary }]}>
                  35
                </Text>
                <Text style={[styles.statLabel, { color: colors.textMuted }]}>
                  Reading History
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
          Personalization
        </Text>
        <View style={[styles.sectionCard, { backgroundColor: colors.surface }]}>
          {PERSONALIZATION_ITEMS.map((item) => (
            <TouchableOpacity
              key={item.title}
              style={[
                styles.row,
                { borderBottomColor: colors.border, borderBottomWidth: 1 },
              ]}
            >
              <View style={styles.rowIconWrap}>
                <item.icon color={BRAND_BLUE} size={scale(15)} />
              </View>
              <View style={styles.rowTextCol}>
                <Text style={[styles.rowTitle, { color: colors.textPrimary }]}>
                  {item.title}
                </Text>
                <Text style={[styles.rowDesc, { color: colors.textMuted }]}>
                  {item.desc}
                </Text>
              </View>
              <ChevronRight color={colors.textMuted} size={scale(15)} />
            </TouchableOpacity>
          ))}

          <View style={styles.row}>
            <View style={styles.rowIconWrap}>
              <Moon color={BRAND_BLUE} size={scale(15)} />
            </View>
            <View style={styles.rowTextCol}>
              <Text style={[styles.rowTitle, { color: colors.textPrimary }]}>
                Dark Mode
              </Text>
              <Text style={[styles.rowDesc, { color: colors.textMuted }]}>
                Choose your preferred theme
              </Text>
            </View>
            <Switch
              value={isDark}
              onValueChange={() => {
                dispatch(toggleTheme());
              }}
              trackColor={{ false: colors.iconButtonBg, true: BRAND_BLUE }}
              thumbColor="#FFFFFF"
            />
          </View>
        </View>

        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
          Account
        </Text>
        <View style={[styles.sectionCard, { backgroundColor: colors.surface }]}>
          {ACCOUNT_ITEMS.map((item, index) => (
            <TouchableOpacity
              key={item.title}
              style={[
                styles.row,
                index < ACCOUNT_ITEMS.length - 1
                  ? { borderBottomColor: colors.border, borderBottomWidth: 1 }
                  : null,
              ]}
            >
              <View style={styles.rowIconWrap}>
                <item.icon color={BRAND_BLUE} size={scale(15)} />
              </View>
              <View style={styles.rowTextCol}>
                <Text style={[styles.rowTitle, { color: colors.textPrimary }]}>
                  {item.title}
                </Text>
                <Text style={[styles.rowDesc, { color: colors.textMuted }]}>
                  {item.desc}
                </Text>
              </View>
              {item.badge && (
                <View style={styles.activeBadge}>
                  <Text style={styles.activeBadgeText}>{item.badge}</Text>
                </View>
              )}
              <ChevronRight color={colors.textMuted} size={scale(15)} />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
          More
        </Text>
        <View style={[styles.sectionCard, { backgroundColor: colors.surface }]}>
          {MORE_ITEMS.map((item) => (
            <TouchableOpacity
              key={item.title}
              style={[
                styles.row,
                { borderBottomColor: colors.border, borderBottomWidth: 1 },
              ]}
            >
              <View style={styles.rowIconWrap}>
                <item.icon color={BRAND_BLUE} size={scale(15)} />
              </View>
              <View style={styles.rowTextCol}>
                <Text style={[styles.rowTitle, { color: colors.textPrimary }]}>
                  {item.title}
                </Text>
                <Text style={[styles.rowDesc, { color: colors.textMuted }]}>
                  {item.desc}
                </Text>
              </View>
              <ChevronRight color={colors.textMuted} size={scale(15)} />
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.row}>
            <View
              style={[styles.rowIconWrap, { backgroundColor: DANGER_SOFT }]}
            >
              <LogOut color={DANGER} size={scale(15)} />
            </View>
            <View style={styles.rowTextCol}>
              <Text style={[styles.rowTitle, { color: DANGER }]}>Log Out</Text>
              <Text style={[styles.rowDesc, { color: colors.textMuted }]}>
                Sign out from your account
              </Text>
            </View>
            <ChevronRight color={colors.textMuted} size={scale(15)} />
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
    paddingHorizontal: scale(17),
    paddingTop: scale(10),
  },
  heroRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: scale(19),
  },
  titleColumn: {
    flex: 1,
    paddingRight: scale(19),
  },
  titleLineRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: scale(5),
  },
  title: {
    fontSize: scaleFont(23),
    fontWeight: "800",
  },
  titleDot: {
    width: scale(6),
    height: scale(6),
    borderRadius: scale(3),
    backgroundColor: BRAND_BLUE,
    marginBottom: scale(6),
  },
  subtitle: {
    fontSize: scaleFont(11),
    lineHeight: scaleFont(16),
    marginTop: scale(5),
  },
  rightColumn: {
    alignItems: "flex-end",
  },
  bellButton: {
    width: scale(37),
    height: scale(37),
    borderRadius: scale(19),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: scale(10),
  },
  bellDot: {
    position: "absolute",
    top: scale(8),
    right: scale(8),
    width: scale(7),
    height: scale(7),
    borderRadius: scale(3.5),
    backgroundColor: DANGER,
  },
  heroImageWrap: {
    width: scale(106),
    height: scale(90),
    alignItems: "center",
    justifyContent: "center",
  },
  mapDotGrid: {
    position: "absolute",
    top: scale(-8),
    right: scale(-34),
    width: scale(58),
    height: scale(50),
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },
  mapDot: {
    width: scale(2.5),
    height: scale(2.5),
    margin: scale(2),
    borderRadius: scale(1.25),
    backgroundColor: "#E5E7EB",
  },
  heroImageCircle: {
    position: "absolute",
    width: scale(88),
    height: scale(88),
    borderRadius: scale(44),
    backgroundColor: BRAND_BLUE_SOFT,
  },
  heroImage: {
    width: scale(98),
    height: scale(98),
  },
  profileCard: {
    borderRadius: scale(20),
    padding: scale(17),
    marginBottom: scale(23),
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 2,
  },
  profileTopRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(12),
  },
  avatar: {
    width: scale(54),
    height: scale(54),
    borderRadius: scale(27),
    backgroundColor: "#E5E7EB",
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: scaleFont(14),
    fontWeight: "700",
    marginBottom: scale(2),
  },
  profileEmail: {
    fontSize: scaleFont(11),
    marginBottom: scale(6),
  },
  premiumBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(5),
    alignSelf: "flex-start",
    backgroundColor: BRAND_BLUE_SOFT,
    borderRadius: 9999,
    paddingHorizontal: scale(8),
    paddingVertical: scale(3),
  },
  premiumBadgeText: {
    color: BRAND_BLUE,
    fontSize: scaleFont(10),
    fontWeight: "700",
  },
  divider: {
    height: 1,
    marginVertical: scale(13),
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  statItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: scale(8),
  },
  statIconWrap: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(10),
    backgroundColor: BRAND_BLUE_SOFT,
    alignItems: "center",
    justifyContent: "center",
  },
  statValue: {
    fontSize: scaleFont(15),
    fontWeight: "800",
  },
  statLabel: {
    fontSize: scaleFont(10),
  },
  statDivider: {
    width: 1,
    height: scale(30),
    marginHorizontal: scale(10),
  },
  sectionTitle: {
    fontSize: scaleFont(14),
    fontWeight: "700",
    marginBottom: scale(10),
  },
  sectionCard: {
    borderRadius: scale(17),
    marginBottom: scale(23),
    paddingHorizontal: scale(13),
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
    paddingVertical: scale(13),
  },
  rowIconWrap: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(10),
    backgroundColor: BRAND_BLUE_SOFT,
    alignItems: "center",
    justifyContent: "center",
  },
  rowTextCol: {
    flex: 1,
  },
  rowTitle: {
    fontSize: scaleFont(13),
    fontWeight: "600",
    marginBottom: scale(2),
  },
  rowDesc: {
    fontSize: scaleFont(11),
  },
  activeBadge: {
    backgroundColor: BRAND_BLUE_SOFT,
    borderRadius: 9999,
    paddingHorizontal: scale(8),
    paddingVertical: scale(3),
  },
  activeBadgeText: {
    color: BRAND_BLUE,
    fontSize: scaleFont(10),
    fontWeight: "700",
  },
});
