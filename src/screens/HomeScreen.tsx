import React, { useRef, useState } from "react";
import {
  Animated,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Search, X, Sun, Moon, CheckCircle2 } from "lucide-react-native";
import {
  allArticles,
  breakingNewsData,
  newsSections,
} from "@/src/data/newsData";
import { useAppDispatch, useThemeColors } from "@/src/store/hooks";
import { toggleTheme } from "@/src/store/themeSlice";
import { scale, scaleFont } from "@/src/utils/responsive";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const PAGE_PADDING = scale(15);
const CARD_SPACING = scale(10);
const SIDE_INSET = PAGE_PADDING;
const CARD_WIDTH = SCREEN_WIDTH - PAGE_PADDING * 2;
const SNAP_INTERVAL = CARD_WIDTH + CARD_SPACING;
const ICON_BUTTON_SIZE = scale(40);

// Header row width minus the two fixed icon buttons + gaps, i.e. the space
// the search bar grows into, anchored against the search button.
const HEADER_ROW_WIDTH = SCREEN_WIDTH - PAGE_PADDING * 2;
const SEARCH_BAR_OPEN_WIDTH =
  HEADER_ROW_WIDTH - (ICON_BUTTON_SIZE * 2 + scale(12)) - scale(12);

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isDark, colors } = useThemeColors();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchAnim = useRef(new Animated.Value(0)).current;

  const handleMomentumScrollEnd = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / SNAP_INTERVAL);
    setActiveIndex(index);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
    Animated.timing(searchAnim, {
      toValue: 1,
      duration: 280,
      useNativeDriver: false,
    }).start();
  };

  const closeSearch = () => {
    Animated.timing(searchAnim, {
      toValue: 0,
      duration: 280,
      useNativeDriver: false,
    }).start(() => {
      setIsSearchOpen(false);
      setSearchQuery("");
    });
  };

  const searchBarWidth = searchAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, SEARCH_BAR_OPEN_WIDTH],
  });
  const searchBarOpacity = searchAnim.interpolate({
    inputRange: [0, 0.4, 1],
    outputRange: [0, 0, 1],
  });

  const hasQuery = searchQuery.trim().length > 0;
  const filteredArticles = hasQuery
    ? allArticles.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.trim().toLowerCase()),
      )
    : [];

  const headerBlock = (
    <View style={styles.paddedSection}>
      <View style={styles.header}>
        <Animated.View
          style={[
            styles.searchBarWrap,
            {
              width: searchBarWidth,
              opacity: searchBarOpacity,
              backgroundColor: colors.iconButtonBg,
            },
          ]}
        >
          {isSearchOpen && (
            <>
              <Search color={colors.textMuted} size={scale(15)} />
              <TextInput
                autoFocus
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search news"
                placeholderTextColor={colors.textMuted}
                style={[styles.searchInput, { color: colors.textPrimary }]}
              />
            </>
          )}
        </Animated.View>

        <View style={styles.headerRight}>
          <TouchableOpacity
            style={[
              styles.iconButton,
              { backgroundColor: colors.iconButtonBg },
            ]}
            onPress={isSearchOpen ? closeSearch : openSearch}
          >
            {isSearchOpen ? (
              <X color={colors.textPrimary} size={scale(19)} />
            ) : (
              <Search color={colors.textPrimary} size={scale(19)} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.iconButton,
              { backgroundColor: colors.iconButtonBg },
            ]}
            onPress={() => dispatch(toggleTheme())}
          >
            {isDark ? (
              <Sun color={colors.textPrimary} size={scale(19)} />
            ) : (
              <Moon color={colors.textPrimary} size={scale(19)} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  if (hasQuery) {
    return (
      <View
        style={[
          styles.container,
          { paddingTop: insets.top, backgroundColor: colors.background },
        ]}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: insets.bottom + 24 },
          ]}
          showsVerticalScrollIndicator={false}
        >
          {headerBlock}

          <View style={[styles.paddedSection, styles.recommendationList]}>
            {filteredArticles.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.articleCard}
                onPress={() => router.push(`/news/${item.id}`)}
              >
                <Image
                  source={{ uri: item.image }}
                  style={[
                    styles.articleImage,
                    { backgroundColor: colors.iconButtonBg },
                  ]}
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
                    style={[styles.articleTitle, { color: colors.textPrimary }]}
                    numberOfLines={2}
                  >
                    {item.title}
                  </Text>
                  <View style={styles.articleFooter}>
                    <Image
                      source={{ uri: item.sourceAvatar }}
                      style={[
                        styles.authorAvatar,
                        { backgroundColor: colors.iconButtonBg },
                      ]}
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
                      style={[styles.articleDate, { color: colors.textMuted }]}
                    >
                      • {item.metaLine}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}

            {filteredArticles.length === 0 && (
              <Text style={[styles.emptyText, { color: colors.textMuted }]}>
                No stories found.
              </Text>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }

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
        {headerBlock}

        {/* Breaking News Header */}
        <View style={styles.paddedSection}>
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
                      <CheckCircle2
                        color="#0ea5e9"
                        fill="#fff"
                        size={scale(13)}
                      />
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
    paddingTop: scale(12),
    paddingBottom: scale(32),
  },
  paddedSection: {
    paddingHorizontal: PAGE_PADDING,
  },
  sectionBlock: {
    marginBottom: scale(26),
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: scale(18),
    height: ICON_BUTTON_SIZE,
  },
  headerRight: {
    flexDirection: "row",
    gap: scale(10),
  },
  searchBarWrap: {
    height: ICON_BUTTON_SIZE,
    flexDirection: "row",
    alignItems: "center",
    gap: scale(8),
    borderRadius: scale(20),
    paddingHorizontal: scale(14),
    marginRight: scale(10),
    overflow: "hidden",
  },
  searchInput: {
    flex: 1,
    fontSize: scaleFont(13),
  },
  iconButton: {
    width: ICON_BUTTON_SIZE,
    height: ICON_BUTTON_SIZE,
    borderRadius: ICON_BUTTON_SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: scale(12),
  },
  sectionTitle: {
    fontSize: scaleFont(19),
    fontWeight: "700",
  },
  viewAllText: {
    color: "#0EA5E9",
    fontWeight: "500",
    fontSize: scaleFont(12),
  },
  breakingNewsContainer: {
    marginBottom: scale(18),
  },
  breakingNewsCard: {
    position: "relative",
    height: scale(200),
    justifyContent: "space-between",
    padding: scale(13),
    borderRadius: scale(18),
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
    paddingHorizontal: scale(12),
    paddingVertical: scale(5),
    borderRadius: 9999,
    zIndex: 10,
  },
  badgeText: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: scaleFont(11),
  },
  cardContent: {
    zIndex: 10,
    marginTop: "auto",
  },
  cardMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(6),
    marginBottom: scale(6),
  },
  cardSource: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: scaleFont(12),
  },
  cardTime: {
    color: "#D1D5DB",
    fontSize: scaleFont(12),
  },
  cardTitle: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: scaleFont(17),
    lineHeight: scaleFont(22),
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: scale(6),
    marginTop: scale(12),
  },
  dotInactive: {
    width: scale(6),
    height: scale(6),
    borderRadius: scale(3),
    backgroundColor: "#E5E7EB",
  },
  dotActive: {
    width: scale(24),
    height: scale(6),
    borderRadius: scale(3),
    backgroundColor: "#0EA5E9",
  },
  recommendationList: {
    gap: scale(12),
  },
  articleCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(12),
  },
  articleImage: {
    width: scale(76),
    height: scale(76),
    borderRadius: scale(13),
    backgroundColor: "#E5E7EB",
  },
  articleContent: {
    flex: 1,
    justifyContent: "center",
  },
  articleCategory: {
    fontSize: scaleFont(11),
    marginBottom: scale(3),
  },
  articleTitle: {
    fontWeight: "700",
    fontSize: scaleFont(14),
    lineHeight: scaleFont(18),
    marginBottom: scale(6),
  },
  articleFooter: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(6),
  },
  authorAvatar: {
    width: scale(18),
    height: scale(18),
    borderRadius: scale(9),
    backgroundColor: "#E5E7EB",
  },
  authorName: {
    fontSize: scaleFont(11),
  },
  articleDate: {
    fontSize: scaleFont(11),
  },
  emptyText: {
    textAlign: "center",
    marginTop: scale(40),
  },
});
