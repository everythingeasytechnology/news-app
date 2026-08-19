import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ChevronLeft, Bookmark, MoreHorizontal, CheckCircle2 } from 'lucide-react-native';
import { Article } from '@/src/data/newsData';

const HERO_HEIGHT = 480;
const SHEET_OVERLAP = 32;

export default function NewsDetailScreen({ article }: { article: Article }) {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Hero — fixed in place behind the scrolling sheet */}
      <View style={styles.heroWrapper}>
        <Image source={{ uri: article.image }} style={styles.heroImage} resizeMode="cover" />
        <View style={styles.heroOverlay} />

        <View style={styles.heroBottom}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{article.category}</Text>
          </View>
          <Text style={styles.heroTitle}>{article.title}</Text>
          <Text style={styles.heroMeta}>{article.metaLine}</Text>
        </View>
      </View>

      {/* Only this scrolls, sliding up over the fixed hero */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: HERO_HEIGHT - SHEET_OVERLAP }}
      >
        <View style={styles.contentSheet}>
          <View style={styles.sourceRow}>
            <Image source={{ uri: article.sourceAvatar }} style={styles.sourceAvatar} />
            <Text style={styles.sourceName}>{article.sourceName}</Text>
            {article.verified && <CheckCircle2 color="#0ea5e9" fill="#fff" size={18} />}
          </View>

          {article.body.map((paragraph, index) => (
            <Text key={index} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}
        </View>
      </ScrollView>

      {/* Floating controls — always on top, never scroll away */}
      <View style={[styles.topControls, { top: insets.top + 12 }]}>
        <TouchableOpacity style={styles.circleButton} onPress={() => router.back()}>
          <ChevronLeft color="#fff" size={22} />
        </TouchableOpacity>
        <View style={styles.topControlsRight}>
          <TouchableOpacity style={styles.circleButton}>
            <Bookmark color="#fff" size={19} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circleButton}>
            <MoreHorizontal color="#fff" size={19} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  heroWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HERO_HEIGHT,
    backgroundColor: '#E5E7EB',
  },
  heroImage: {
    ...StyleSheet.absoluteFill,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  topControls: {
    position: 'absolute',
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topControlsRight: {
    flexDirection: 'row',
    gap: 12,
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroBottom: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 40,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#0EA5E9',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 9999,
    marginBottom: 16,
  },
  badgeText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 14,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 34,
    marginBottom: 12,
  },
  heroMeta: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
  },
  contentSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 48,
  },
  sourceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 24,
  },
  sourceAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E5E7EB',
  },
  sourceName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    flex: 1,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 26,
    color: '#374151',
    marginBottom: 20,
  },
});
