import { View, Text } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import SectionScreen from "@/src/screens/SectionScreen";
import { getSectionByKey } from "@/src/data/newsData";

export default function SectionRoute() {
  const { key } = useLocalSearchParams<{ key: string }>();
  const section = getSectionByKey(key);

  if (!section) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Section not found</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SectionScreen title={section.title} articles={section.data} />
    </>
  );
}
