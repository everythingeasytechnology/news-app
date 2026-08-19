import { Box } from '@/components/ui/box';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';
import React from 'react';

export default function ProfileScreen() {
  return (
    <Box className="flex-1 bg-background">
      <Center className="flex-1">
        <Text className="font-semibold text-lg">Profile</Text>
      </Center>
    </Box>
  );
}
