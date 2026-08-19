import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Menu, Search, Sun, Moon, CheckCircle2 } from "lucide-react-native";
import { breakingNewsData, newsSections } from "@/src/data/newsData";
import { useAppDispatch, useThemeColors } from "@/src/store/hooks";
import { toggleTheme } from "@/src/store/themeSlice";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const PAGE_PADDING = 15;
const CARD_SPACING = 12;
const SIDE_INSET = PAGE_PADDING;
const CARD_WIDTH = SCREEN_WIDTH - PAGE_PADDING * 2;
const SNAP_INTERVAL = CARD_WIDTH + CARD_SPACING;

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isDark, colors } = useThemeColors();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMomentumScrollEnd = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / SNAP_INTERVAL);
    setActiveIndex(index);
  };

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, backgroundColor: colors.background },
      ]}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.paddedSection}>
          <View style={styles.header}>
            <TouchableOpacity
              style={[
                styles.iconButton,
                { backgroundColor: colors.iconButtonBg },
              ]}
            >
              <Menu color={colors.textPrimary} size={24} />
            </TouchableOpacity>
            <View style={styles.headerRight}>
              <TouchableOpacity
                style={[
                  styles.iconButton,
                  { backgroundColor: colors.iconButtonBg },
                ]}
              >
                <Search color={colors.textPrimary} size={24} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.iconButton,
                  { backgroundColor: colors.iconButtonBg },
                ]}
                onPress={() => dispatch(toggleTheme())}
              >
                {isDark ? (
                  <Sun color={colors.textPrimary} size={24} />
                ) : (
                  <Moon color={colors.textPrimary} size={24} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Breaking News Header */}
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
              Breaking News
            </Text>
            <TouchableOpacity onPress={() => router.push("/section/breaking")}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Breaking News Carousel */}
        <View style={styles.breakingNewsContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={SNAP_INTERVAL}
            snapToAlignment="start"
            contentContainerStyle={{ paddingHorizontal: SIDE_INSET }}
            onMomentumScrollEnd={handleMomentumScrollEnd}
          >
            {breakingNewsData.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.9}
                onPress={() => router.push(`/news/${item.id}`)}
                style={[
                  styles.breakingNewsCard,
                  {
                    width: CARD_WIDTH,
                    marginRight:
                      index === breakingNewsData.length - 1 ? 0 : CARD_SPACING,
                  },
                ]}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.absoluteImage}
                  resizeMode="cover"
                />
                <View style={styles.overlay} />

                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.category}</Text>
                </View>

                <View style={styles.cardContent}>
                  <View style={styles.cardMeta}>
                    <Text style={styles.cardSource}>{item.sourceName}</Text>
                    {item.verified && (
                      <CheckCircle2 color="#0ea5e9" fill="#fff" size={16} />
                    )}
                    <Text style={styles.cardTime}>
                      • {item.metaLine.split("• ").pop()}
                    </Text>
                  </View>
                  <Text style={styles.cardTitle} numberOfLines={2}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Pagination Dots */}
          <View style={styles.paginationContainer}>
            {breakingNewsData.map((item, index) => (
              <View
                key={item.id}
                style={
                  index === activeIndex ? styles.dotActive : styles.dotInactive
                }
              />
            ))}
          </View>
        </View>

        {newsSections.map((section) => (
          <View
            key={section.key}
            style={[styles.paddedSection, styles.sectionBlock]}
          >
            {/* Section Header */}
            <View style={styles.sectionHeader}>
              <Text
                style={[styles.sectionTitle, { color: colors.textPrimary }]}
              >
                {section.title}
              </Text>
              <TouchableOpacity
                onPress={() => router.push(`/section/${section.key}`)}
              >
                <Text style={styles.viewAllText}>View all</Text>
              </TouchableOpacity>
            </View>

            {/* Section List */}
            <View style={styles.recommendationList}>
              {section.data.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.articleCard}
                  onPress={() => router.push(`/news/${item.id}`)}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={styles.articleImage}
                  />
                  <View style={styles.articleContent}>
                    <Text
                      style={[
                        styles.articleCategory,
                        { color: colors.textMuted },
                      ]}
                    >
                      {item.category}
                    </Text>
                    <Text
                      style={[
                        styles.articleTitle,
                        { color: colors.textPrimary },
                      ]}
                      numberOfLines={2}
                    >
                      {item.title}
                    </Text>
                    <View style={styles.articleFooter}>
                      <Image
                        source={{ uri: item.sourceAvatar }}
                        style={styles.authorAvatar}
                      />
                      <Text
                        style={[
                          styles.authorName,
                          { color: colors.textSecondary },
                        ]}
                      >
                        {item.sourceName}
                      </Text>
                      <Text
                        style={[
                          styles.articleDate,
                          { color: colors.textMuted },
                        ]}
                      >
                        • {item.metaLine}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 16,
    paddingBottom: 40,
  },
  paddedSection: {
    paddingHorizontal: PAGE_PADDING,
  },
  sectionBlock: {
    marginBottom: 32,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  headerRight: {
    flexDirection: "row",
    gap: 12,
  },
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  viewAllText: {
    color: "#0EA5E9",
    fontWeight: "500",
    fontSize: 14,
  },
  breakingNewsContainer: {
    marginBottom: 24,
  },
  breakingNewsCard: {
    position: "relative",
    height: 256,
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#E5E7EB",
  },
  absoluteImage: {
    ...StyleSheet.absoluteFill,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#0EA5E9",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 9999,
    zIndex: 10,
  },
  badgeText: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 14,
  },
  cardContent: {
    zIndex: 10,
    marginTop: "auto",
  },
  cardMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  cardSource: {
    color: "#FFFFFF",
    fontWeight: "500",
  },
  cardTime: {
    color: "#D1D5DB",
    fontSize: 14,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 28,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 16,
  },
  dotInactive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E5E7EB",
  },
  dotActive: {
    width: 32,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#0EA5E9",
  },
  recommendationList: {
    gap: 16,
  },
  articleCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  articleImage: {
    width: 96,
    height: 96,
    borderRadius: 16,
    backgroundColor: "#E5E7EB",
  },
  articleContent: {
    flex: 1,
    justifyContent: "center",
  },
  articleCategory: {
    fontSize: 14,
    marginBottom: 4,
  },
  articleTitle: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 8,
  },
  articleFooter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  authorAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#E5E7EB",
  },
  authorName: {
    fontSize: 14,
  },
  articleDate: {
    fontSize: 14,
  },
});
