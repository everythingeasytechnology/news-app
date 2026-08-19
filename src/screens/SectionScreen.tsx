import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  LayoutAnimation,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Search, SlidersHorizontal } from "lucide-react-native";
import { Article } from "@/src/data/newsData";
import { useThemeColors } from "@/src/store/hooks";

const FADE_IN_LAYOUT_ANIM = {
  duration: 280,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
  delete: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
};

function FadeInItem({ children }: { children: React.ReactNode }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 320,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  return <Animated.View style={{ opacity }}>{children}</Animated.View>;
}

interface SectionScreenProps {
  title: string;
  articles: Article[];
}

export default function SectionScreen({ title, articles }: SectionScreenProps) {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { colors } = useThemeColors();
  const [query, setQuery] = useState("");
  const [searchGeneration, setSearchGeneration] = useState(0);

  const filteredArticles = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return articles;
    return articles.filter((article) => article.title.toLowerCase().includes(q));
  }, [articles, query]);

  const handleQueryChange = (text: string) => {
    LayoutAnimation.configureNext(FADE_IN_LAYOUT_ANIM);
    setSearchGeneration((g) => g + 1);
    setQuery(text);
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
        <Text style={[styles.title, { color: colors.textPrimary }]}>{title}</Text>
        <Text style={[styles.subtitle, { color: colors.textMuted }]}>
          News from all around the world
        </Text>

        <View style={[styles.searchBar, { backgroundColor: colors.iconButtonBg }]}>
          <Search color={colors.textMuted} size={20} />
          <TextInput
            value={query}
            onChangeText={handleQueryChange}
            placeholder="Search"
            placeholderTextColor={colors.textMuted}
            style={[styles.searchInput, { color: colors.textPrimary }]}
          />
          <SlidersHorizontal color={colors.textSecondary} size={20} />
        </View>

        <View style={styles.articleList}>
          {filteredArticles.map((item) => (
            <FadeInItem key={`${item.id}-${searchGeneration}`}>
              <TouchableOpacity
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
            </FadeInItem>
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
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
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
