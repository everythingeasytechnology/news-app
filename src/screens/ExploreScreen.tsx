import React, { useMemo, useState } from "react";
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
import { Search, SlidersHorizontal } from "lucide-react-native";
import { allArticles } from "@/src/data/newsData";
import { useThemeColors } from "@/src/store/hooks";

const CATEGORIES: { label: string; filter: string | null }[] = [
  { label: "All", filter: null },
  { label: "Politic", filter: "Politics" },
  { label: "Sport", filter: "Sports" },
  { label: "Education", filter: "Education" },
  { label: "Gaming", filter: "Gaming" },
  { label: "Technology", filter: "Technology" },
  { label: "Health", filter: "Health" },
  { label: "Travel", filter: "Travel" },
  { label: "Movies", filter: "Movies" },
  { label: "Business", filter: "Business" },
];

export default function ExploreScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { colors } = useThemeColors();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      const matchesCategory =
        !selectedCategory || article.category === selectedCategory;
      const matchesQuery = article.title
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, query]);

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
          Discover
        </Text>
        <Text style={[styles.subtitle, { color: colors.textMuted }]}>
          News from all around the world
        </Text>

        <View style={[styles.searchBar, { backgroundColor: colors.iconButtonBg }]}>
          <Search color={colors.textMuted} size={20} />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search"
            placeholderTextColor={colors.textMuted}
            style={[styles.searchInput, { color: colors.textPrimary }]}
          />
          <SlidersHorizontal color={colors.textSecondary} size={20} />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}
        >
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category.filter;
            return (
              <TouchableOpacity
                key={category.label}
                onPress={() => setSelectedCategory(category.filter)}
                style={[
                  styles.categoryPill,
                  { backgroundColor: colors.iconButtonBg },
                  isActive && styles.categoryPillActive,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    { color: colors.textSecondary },
                    isActive && styles.categoryTextActive,
                  ]}
                >
                  {category.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.articleList}>
          {filteredArticles.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.articleCard}
              onPress={() => router.push(`/news/${item.id}`)}
            >
              <Image
                source={{ uri: item.image }}
                style={[styles.articleImage, { backgroundColor: colors.iconButtonBg }]}
              />
              <View style={styles.articleContent}>
                <Text style={[styles.articleCategory, { color: colors.textMuted }]}>
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
                    style={[styles.authorAvatar, { backgroundColor: colors.iconButtonBg }]}
                  />
                  <Text style={[styles.authorName, { color: colors.textSecondary }]}>
                    {item.sourceName}
                  </Text>
                  <Text style={[styles.articleDate, { color: colors.textMuted }]}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 15,
    paddingTop: 16,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
  },
  subtitle: {
    fontSize: 15,
    marginTop: 6,
    marginBottom: 24,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 9999,
    paddingHorizontal: 16,
    height: 52,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
  },
  categoryRow: {
    gap: 10,
    paddingVertical: 20,
  },
  categoryPill: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 9999,
  },
  categoryPillActive: {
    backgroundColor: "#0EA5E9",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "600",
  },
  categoryTextActive: {
    color: "#FFFFFF",
  },
  articleList: {
    gap: 20,
  },
  articleCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  articleImage: {
    width: 100,
    height: 100,
    borderRadius: 16,
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
  },
  authorName: {
    fontSize: 14,
  },
  articleDate: {
    fontSize: 14,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 40,
  },
});
