import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const ProductDetail = () => {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 justify-center items-center">
      <Text>ProductDetail {id}</Text>
    </View>
  );
};

export default ProductDetail;
