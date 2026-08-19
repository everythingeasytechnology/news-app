import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Search, SlidersHorizontal } from "lucide-react-native";
import { Article } from "@/src/data/newsData";
import { useThemeColors } from "@/src/store/hooks";
import { scale, scaleFont } from "@/src/utils/responsive";

const STOPPED_TYPING_DELAY = 400;
const LOADER_DURATION = 500;

interface SectionScreenProps {
  title: string;
  articles: Article[];
}

export default function SectionScreen({ title, articles }: SectionScreenProps) {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { colors } = useThemeColors();
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const stoppedTypingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loaderTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (stoppedTypingTimer.current) clearTimeout(stoppedTypingTimer.current);
      if (loaderTimer.current) clearTimeout(loaderTimer.current);
    };
  }, []);

  const filteredArticles = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (!q) return articles;
    return articles.filter((article) =>
      article.title.toLowerCase().includes(q),
    );
  }, [articles, debouncedQuery]);

  const handleQueryChange = (text: string) => {
    setQuery(text);

    if (stoppedTypingTimer.current) clearTimeout(stoppedTypingTimer.current);
    if (loaderTimer.current) clearTimeout(loaderTimer.current);

    stoppedTypingTimer.current = setTimeout(() => {
      setIsSearching(true);
      loaderTimer.current = setTimeout(() => {
        setDebouncedQuery(text);
        setIsSearching(false);
      }, LOADER_DURATION);
    }, STOPPED_TYPING_DELAY);
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
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          {title}
        </Text>
        <Text style={[styles.subtitle, { color: colors.textMuted }]}>
          News from all around the world
        </Text>

        <View
          style={[styles.searchBar, { backgroundColor: colors.iconButtonBg }]}
        >
          <Search color={colors.textMuted} size={scale(16)} />
          <TextInput
            value={query}
            onChangeText={handleQueryChange}
            placeholder="Search"
            placeholderTextColor={colors.textMuted}
            style={[styles.searchInput, { color: colors.textPrimary }]}
          />
          <SlidersHorizontal color={colors.textSecondary} size={scale(16)} />
        </View>

        {isSearching ? (
          <View style={styles.loaderWrap}>
            <ActivityIndicator size="small" color={colors.textMuted} />
          </View>
        ) : (
          <View style={styles.articleList}>
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
        )}
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
    paddingHorizontal: scale(13),
    paddingTop: scale(13),
  },
  title: {
    fontSize: scaleFont(27),
    fontWeight: "800",
  },
  subtitle: {
    fontSize: scaleFont(12),
    marginTop: scale(5),
    marginBottom: scale(19),
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 9999,
    paddingHorizontal: scale(13),
    height: scale(43),
    gap: scale(8),
    marginBottom: scale(19),
  },
  searchInput: {
    flex: 1,
    fontSize: scaleFont(12),
  },
  loaderWrap: {
    paddingVertical: scale(48),
    alignItems: "center",
  },
  articleList: {
    gap: scale(16),
  },
  articleCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(13),
  },
  articleImage: {
    width: scale(80),
    height: scale(80),
    borderRadius: scale(13),
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
    width: scale(19),
    height: scale(19),
    borderRadius: scale(10),
  },
  authorName: {
    fontSize: scaleFont(11),
  },
  articleDate: {
    fontSize: scaleFont(11),
  },
  emptyText: {
    textAlign: "center",
    marginTop: scale(32),
  },
});
