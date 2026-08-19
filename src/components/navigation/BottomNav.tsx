import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Home, Globe, Bookmark, User } from "lucide-react-native";
import { useThemeColors } from "@/src/store/hooks";

export default function BottomNav({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { colors } = useThemeColors();

  const getIcon = (routeName: string, isFocused: boolean) => {
    const color = isFocused ? "#FFFFFF" : colors.textSecondary;
    const size = 24;

    switch (routeName) {
      case "index":
        return <Home color={color} size={size} />;
      case "explore":
        return <Globe color={color} size={size} />;
      case "bookmarks":
        return <Bookmark color={color} size={size} />;
      case "profile":
        return <User color={color} size={size} />;
      default:
        return <Home color={color} size={size} />;
    }
  };

  const getLabel = (routeName: string) => {
    switch (routeName) {
      case "index":
        return "Home";
      case "explore":
        return "Discover";
      case "bookmarks":
        return "Bookmarks";
      case "profile":
        return "Profile";
      default:
        return routeName;
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabSlot}
          >
            {isFocused ? (
              <View style={styles.activePill}>
                {getIcon(route.name, isFocused)}
                <Text style={styles.activeLabel} numberOfLines={1}>
                  {getLabel(route.name)}
                </Text>
              </View>
            ) : (
              <View style={styles.inactiveIcon}>
                {getIcon(route.name, isFocused)}
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 12,
    paddingHorizontal: 25,
    borderTopWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabSlot: {
    alignItems: "center",
    justifyContent: "center",
  },
  activePill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0EA5E9",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 9999,
  },
  activeLabel: {
    color: "#FFFFFF",
    marginLeft: 8,
    fontWeight: "600",
    fontSize: 14,
  },
  inactiveIcon: {
    padding: 12,
  },
});
