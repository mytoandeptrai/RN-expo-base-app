import React from 'react';
import { Link, useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const Home = () => {
  const router = useRouter();

  const goToScanPage = () => {
    router.push('/scan');
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Home</Text>
      <Button icon="camera" mode="contained" onPress={goToScanPage}>
        Go To Scan Page
      </Button>
      <Link href="/product-detail/1">View first product details</Link>
      <Link href="/product-detail/2">View second product details</Link>
    </View>
  );
};

export default Home;
