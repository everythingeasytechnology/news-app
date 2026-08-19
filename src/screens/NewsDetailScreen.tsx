import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import {
  ChevronLeft,
  Bookmark,
  MoreHorizontal,
  CheckCircle2,
  Send,
} from 'lucide-react-native';
import { Article } from '@/src/data/newsData';
import { useThemeColors } from '@/src/store/hooks';
import { scale, scaleFont } from '@/src/utils/responsive';

const HERO_HEIGHT = scale(400);
const SHEET_OVERLAP = scale(28);
const CURRENT_USER_AVATAR = 'https://i.pravatar.cc/100?img=68';

interface Comment {
  id: string;
  name: string;
  avatar: string;
  text: string;
  time: string;
}

const COMMENT_POOL: Omit<Comment, 'id'>[] = [
  {
    name: 'Priya Sharma',
    avatar: 'https://i.pravatar.cc/100?img=45',
    text: 'Great read, thanks for the detailed breakdown!',
    time: '2h ago',
  },
  {
    name: 'Marcus Chen',
    avatar: 'https://i.pravatar.cc/100?img=14',
    text: "I've been following this story closely, glad to see solid reporting on it.",
    time: '5h ago',
  },
  {
    name: 'Olivia Bennett',
    avatar: 'https://i.pravatar.cc/100?img=36',
    text: 'Not sure I agree with everything here, but I appreciate the balanced perspective.',
    time: '1d ago',
  },
  {
    name: 'Rahul Verma',
    avatar: 'https://i.pravatar.cc/100?img=52',
    text: 'This is exactly what I was looking for. Well written.',
    time: '3h ago',
  },
  {
    name: 'Sofia Martinez',
    avatar: 'https://i.pravatar.cc/100?img=29',
    text: 'Interesting take, curious to see how this develops over the next few weeks.',
    time: '6h ago',
  },
];

function pickSeedComments(articleId: string): Comment[] {
  let hash = 0;
  for (let i = 0; i < articleId.length; i++) {
    hash = (hash * 31 + articleId.charCodeAt(i)) >>> 0;
  }
  const start = hash % COMMENT_POOL.length;
  return [0, 1, 2].map((offset) => {
    const source = COMMENT_POOL[(start + offset) % COMMENT_POOL.length];
    return { ...source, id: `${articleId}-seed-${offset}` };
  });
}

export default function NewsDetailScreen({ article }: { article: Article }) {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { colors } = useThemeColors();
  const [comments, setComments] = useState<Comment[]>(() => pickSeedComments(article.id));
  const [newComment, setNewComment] = useState('');

  const handlePostComment = () => {
    const text = newComment.trim();
    if (!text) return;
    setComments((prev) => [
      { id: `you-${prev.length}-${text.length}`, name: 'You', avatar: CURRENT_USER_AVATAR, text, time: 'Just now' },
      ...prev,
    ]);
    setNewComment('');
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
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
        <View style={[styles.contentSheet, { backgroundColor: colors.surface }]}>
          <View style={styles.sourceRow}>
            <Image
              source={{ uri: article.sourceAvatar }}
              style={[styles.sourceAvatar, { backgroundColor: colors.iconButtonBg }]}
            />
            <Text style={[styles.sourceName, { color: colors.textPrimary }]}>
              {article.sourceName}
            </Text>
            {article.verified && <CheckCircle2 color="#0ea5e9" fill="#fff" size={scale(15)} />}
          </View>

          {article.body.map((paragraph, index) => (
            <Text key={index} style={[styles.paragraph, { color: colors.textSecondary }]}>
              {paragraph}
            </Text>
          ))}

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <Text style={[styles.commentsHeader, { color: colors.textPrimary }]}>
            Comments ({comments.length})
          </Text>

          <View style={styles.addCommentRow}>
            <Image
              source={{ uri: CURRENT_USER_AVATAR }}
              style={[styles.commentAvatar, { backgroundColor: colors.iconButtonBg }]}
            />
            <View style={[styles.commentInputWrap, { backgroundColor: colors.iconButtonBg }]}>
              <TextInput
                value={newComment}
                onChangeText={setNewComment}
                placeholder="Add a comment..."
                placeholderTextColor={colors.textMuted}
                style={[styles.commentInput, { color: colors.textPrimary }]}
                multiline
              />
            </View>
            <TouchableOpacity
              onPress={handlePostComment}
              disabled={!newComment.trim()}
              style={[
                styles.sendButton,
                { backgroundColor: newComment.trim() ? '#0EA5E9' : colors.iconButtonBg },
              ]}
            >
              <Send color={newComment.trim() ? '#FFFFFF' : colors.textMuted} size={scale(15)} />
            </TouchableOpacity>
          </View>

          {comments.map((comment) => (
            <View key={comment.id} style={styles.commentItem}>
              <Image
                source={{ uri: comment.avatar }}
                style={[styles.commentAvatar, { backgroundColor: colors.iconButtonBg }]}
              />
              <View style={styles.commentBody}>
                <View style={styles.commentMetaRow}>
                  <Text style={[styles.commentName, { color: colors.textPrimary }]}>
                    {comment.name}
                  </Text>
                  <Text style={[styles.commentTime, { color: colors.textMuted }]}>
                    {comment.time}
                  </Text>
                </View>
                <Text style={[styles.commentText, { color: colors.textSecondary }]}>
                  {comment.text}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Floating controls — always on top, never scroll away */}
      <View style={[styles.topControls, { top: insets.top + 12 }]}>
        <TouchableOpacity style={styles.circleButton} onPress={() => router.back()}>
          <ChevronLeft color="#fff" size={scale(18)} />
        </TouchableOpacity>
        <View style={styles.topControlsRight}>
          <TouchableOpacity style={styles.circleButton}>
            <Bookmark color="#fff" size={scale(16)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circleButton}>
            <MoreHorizontal color="#fff" size={scale(16)} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    left: scale(13),
    right: scale(13),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topControlsRight: {
    flexDirection: 'row',
    gap: scale(10),
  },
  circleButton: {
    width: scale(33),
    height: scale(33),
    borderRadius: scale(17),
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroBottom: {
    position: 'absolute',
    left: scale(13),
    right: scale(13),
    bottom: scale(33),
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#0EA5E9',
    paddingHorizontal: scale(13),
    paddingVertical: scale(5),
    borderRadius: 9999,
    marginBottom: scale(13),
  },
  badgeText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: scaleFont(12),
  },
  heroTitle: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: scaleFont(23),
    lineHeight: scaleFont(28),
    marginBottom: scale(10),
  },
  heroMeta: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: scaleFont(12),
  },
  contentSheet: {
    borderTopLeftRadius: scale(26),
    borderTopRightRadius: scale(26),
    paddingHorizontal: scale(13),
    paddingTop: scale(23),
    paddingBottom: scale(40),
  },
  sourceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
    marginBottom: scale(19),
  },
  sourceAvatar: {
    width: scale(33),
    height: scale(33),
    borderRadius: scale(17),
  },
  sourceName: {
    fontSize: scaleFont(15),
    fontWeight: '700',
    flex: 1,
  },
  paragraph: {
    fontSize: scaleFont(13),
    lineHeight: scaleFont(21),
    marginBottom: scale(16),
  },
  divider: {
    height: 1,
    marginTop: scale(6),
    marginBottom: scale(19),
  },
  commentsHeader: {
    fontSize: scaleFont(16),
    fontWeight: '700',
    marginBottom: scale(16),
  },
  addCommentRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: scale(8),
    marginBottom: scale(23),
  },
  commentInputWrap: {
    flex: 1,
    borderRadius: scale(15),
    paddingHorizontal: scale(13),
    paddingVertical: scale(8),
    minHeight: scale(37),
    justifyContent: 'center',
  },
  commentInput: {
    fontSize: scaleFont(12),
    maxHeight: scale(84),
  },
  sendButton: {
    width: scale(33),
    height: scale(33),
    borderRadius: scale(17),
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentItem: {
    flexDirection: 'row',
    gap: scale(8),
    marginBottom: scale(16),
  },
  commentAvatar: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
  },
  commentBody: {
    flex: 1,
  },
  commentMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(6),
    marginBottom: scale(3),
  },
  commentName: {
    fontSize: scaleFont(12),
    fontWeight: '700',
  },
  commentTime: {
    fontSize: scaleFont(10),
  },
  commentText: {
    fontSize: scaleFont(12),
    lineHeight: scaleFont(17),
  },
});
