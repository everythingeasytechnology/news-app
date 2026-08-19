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
import { Article } from "@/src/data/newsData";

interface SectionScreenProps {
  title: string;
  articles: Article[];
}

export default function SectionScreen({ title, articles }: SectionScreenProps) {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [query, setQuery] = useState("");

  const filteredArticles = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return articles;
    return articles.filter((article) => article.title.toLowerCase().includes(q));
  }, [articles, query]);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>News from all around the world</Text>

        <View style={styles.searchBar}>
          <Search color="#9CA3AF" size={20} />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search"
            placeholderTextColor="#9CA3AF"
            style={styles.searchInput}
          />
          <SlidersHorizontal color="#6B7280" size={20} />
        </View>

        <View style={styles.articleList}>
          {filteredArticles.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.articleCard}
              onPress={() => router.push(`/news/${item.id}`)}
            >
              <Image source={{ uri: item.image }} style={styles.articleImage} />
              <View style={styles.articleContent}>
                <Text style={styles.articleCategory}>{item.category}</Text>
                <Text style={styles.articleTitle} numberOfLines={2}>
                  {item.title}
                </Text>
                <View style={styles.articleFooter}>
                  <Image
                    source={{ uri: item.sourceAvatar }}
                    style={styles.authorAvatar}
                  />
                  <Text style={styles.authorName}>{item.sourceName}</Text>
                  <Text style={styles.articleDate}>• {item.metaLine}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}

          {filteredArticles.length === 0 && (
            <Text style={styles.emptyText}>No stories found.</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
    color: "#000000",
  },
  subtitle: {
    fontSize: 15,
    color: "#9CA3AF",
    marginTop: 6,
    marginBottom: 24,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 9999,
    paddingHorizontal: 16,
    height: 52,
    gap: 10,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#000000",
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
    backgroundColor: "#E5E7EB",
  },
  articleContent: {
    flex: 1,
    justifyContent: "center",
  },
  articleCategory: {
    color: "#9CA3AF",
    fontSize: 14,
    marginBottom: 4,
  },
  articleTitle: {
    color: "#000000",
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
    color: "#6B7280",
    fontSize: 14,
  },
  articleDate: {
    color: "#9CA3AF",
    fontSize: 14,
  },
  emptyText: {
    textAlign: "center",
    color: "#9CA3AF",
    marginTop: 40,
  },
});
