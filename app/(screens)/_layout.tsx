import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, title: 'Home Page' }} />
      <Stack.Screen name="scan" options={{ title: 'Scan Page' }} />
      <Stack.Screen name="product-detail/[id]" options={{ title: 'Product Detail' }} />
    </Stack>
  );
}
