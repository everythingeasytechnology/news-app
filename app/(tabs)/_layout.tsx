import { Tabs } from 'expo-router';
import BottomNav from '@/src/components/navigation/BottomNav';

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <BottomNav {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="explore" />
      <Tabs.Screen name="bookmarks" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
