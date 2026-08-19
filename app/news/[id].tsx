import { View, Text } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import NewsDetailScreen from '@/src/screens/NewsDetailScreen';
import { getArticleById } from '@/src/data/newsData';

export default function NewsDetailRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const article = getArticleById(id);

  if (!article) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Article not found</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <NewsDetailScreen article={article} />
    </>
  );
}
